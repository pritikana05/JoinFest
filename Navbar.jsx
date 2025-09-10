import React from 'react'

export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-indigo-600">JoinFest</div>
            <div className="ml-6 hidden md:flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-indigo-600">Home</a>
              <a href="#events" className="hover:text-indigo-600">Events</a>
              <a href="#" className="hover:text-indigo-600">Organizers</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 border rounded-md text-sm">Login</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Create Event</button>
          </div>
        </div>
      </div>
    </nav>
  )
}