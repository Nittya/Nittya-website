import Link from 'next/link'
import React from 'react'
import Product from '@/models/Product'
import mongoose from 'mongoose'

const Kids = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return <div key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                <Link passHref={true} href={`/product/${products[item].slug}`}>
                  <div className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh] block" src={products[item].img} />
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].name}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                    <p className="mt-1">₹{products[item].price}</p>
                    <div className="mt-1">
                      {products[item].size.includes('125') && <span className='border border-gray-300 px-1 mx-1'>125</span>}
                      {products[item].size.includes('250') && <span className='border border-gray-300 px-1 mx-1'>250</span>}
                      {products[item].size.includes('500') && <span className='border border-gray-300 px-1 mx-1'>500</span>}
                      {products[item].size.includes('1000') && <span className='border border-gray-300 px-1 mx-1'>1000</span>}
                      {products[item].size.includes('2000') && <span className='border border-gray-300 px-1 mx-1'>2000</span>}
                    </div>
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
  let products = await Product.find({ category: 'kid' })
  let kids = {}
  for (let item of products) {
    if (item.title in kids) {
      // if (!kids[item.title].color.includes(item.color) && item.availableQty > 0) {
      //   kids[item.title].color.push(item.color)
      // }
      if (!kids[item.title].size.includes(item.size) && item.availableQty > 0) {
        kids[item.title].size.push(item.size)
      }
    }
    else {
      kids[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        // kids[item.title].color = [item.color]
        kids[item.title].size = [item.size]
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(kids)) },
  }
}

export default Kids