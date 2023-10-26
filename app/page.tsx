import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Montserrat } from 'next/font/google'
import EqBeatsIq from './components/EqBeatsIq'
import Emotions from './components/Emotions'
import Menifesto from './components/Menifesto'
import SelfImprovment from './components/SelfImprovment'
 
const poppins = Montserrat({
  weight: '400',
  preload: false
})


export default function Home() {
  return (
    <main className={`${poppins.className} flex col`}>
      <Navbar/>
      <Hero/>
      <EqBeatsIq/>
      <Emotions/>
      <Menifesto/>
      <SelfImprovment/>
    </main>
  )
}
