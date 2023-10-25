import React from 'react'
import Navbar from './components/navbar'
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <main className={poppins.className}>
      <Navbar/>
    </main>
  )
}
