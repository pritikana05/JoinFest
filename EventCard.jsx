import React from 'react'

export default function EventCard({ event }){
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</div>
      <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
      <div className="text-sm text-gray-600">{event.location}</div>
      <p className="mt-3 text-gray-700">{event.description}</p>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-2 bg-indigo-600 text-white rounded-md">Register</button>
        <button className="px-3 py-2 border rounded-md">Details</button>
      </div>
    </div>
  )
}