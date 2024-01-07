import Link from 'next/link'
import React from 'react'
import Blog from '@/models/Blog'
import mongoose from 'mongoose'

const Articles = ({ blogs }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {Object.keys(blogs).map((item) => {
                            return <div key={blogs[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                                <Link passHref={true} href={`/blog/${blogs[item].slug}`}>
                                    <div className="block relative rounded overflow-hidden">
                                        <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh] block" src={blogs[item].img} />
                                    </div>
                                    <div className="mt-4 text-center md:text-left">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{blogs[item].title}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{blogs[item].subtitle}</h2>
                                        <p className="mt-1">₹{blogs[item].desc.substring(0, 100)}</p>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let blogs = await Blog.find({})
    let articles = {}
    for (let item of blogs) {
        articles[item.title] = JSON.parse(JSON.stringify(item))
    }

    return {
        props: { blogs: JSON.parse(JSON.stringify(articles)) },
    }
}

export default Articles