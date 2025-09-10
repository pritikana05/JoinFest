import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 py-10">
          <Events />
        </div>
      </main>
      <Footer />
    </div>
  )
}