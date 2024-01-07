import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nittya.com - Your daily nutrition</title>
        <meta name="description" content="Nittya: Created by Prakalp Pande" />
        <meta property="og:title" content="Nittya.com - Your daily nutrition" />
        <meta property="og:description" content="Your daily source for nutrition and wellness" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        {/* Add more meta tags as needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
