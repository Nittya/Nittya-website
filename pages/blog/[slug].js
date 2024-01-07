import { useRouter } from "next/router";
import { useState } from "react";
import mongoose from "mongoose";
import Blog from "@/models/Blog";

const Post = ({ blog }) => {
    const router = useRouter()
    const { slug } = router.query

    return <>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-16 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 lg:h-auto px-24 object-cover object-top rounded" src={blog.img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Nittya</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{blog.title}</h1>
                        <p className="leading-relaxed">{blog.desc}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let blog = await Blog.findOne({ slug: context.query.slug })

    return {
        props: { blog: JSON.parse(JSON.stringify(blog)) }, // will be passes to the page component as props
    }
}

export default Post