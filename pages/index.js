import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nittya.com - Your daily nutrition</title>
        <meta name="description" content="Nittya: Created by Prakalp Pande" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width , initial-scale=1.0 , minimum-scale=1.0" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        This is a index page
      </div>
    </div>
  )
}
