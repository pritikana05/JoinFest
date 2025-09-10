import React from 'react'

export default function Hero(){
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">JoinFest — Your Gateway to College Fests</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Discover, register and participate in campus events across your city. Find music, tech, cultural and sports fests — all in one place.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#events" className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold">Browse Events</a>
          <a href="#" className="px-6 py-3 border border-white rounded-md">Learn More</a>
        </div>
      </div>
    </header>
  )
}