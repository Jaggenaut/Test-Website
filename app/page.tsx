import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EqBeatsIq from './components/EqBeatsIq'
import Emotions from './components/Emotions'
import Menifesto from './components/Menifesto'
import SelfImprovment from './components/SelfImprovment'
import BeBest from './components/BeBest'
import Wondered from './components/Wondered'
import Privacy from './components/Privacy'
import WorkwithUs from './components/WorkwithUs'
import Open from './components/Open'
import Footer from './components/Footer'
 



export default function Home() {
  return (
    <main className={`flex col`}>
      <Navbar/>
      <Hero/>
      <EqBeatsIq/>
      <Emotions/>
      <Menifesto/>
      <SelfImprovment/>
      <BeBest/>
      <Wondered/>
      <Privacy/>
      <WorkwithUs/>
      <Open/>
      <hr className='footerline'/>
      <Footer/>
    </main>
  )
}
