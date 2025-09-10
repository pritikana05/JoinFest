import React, { useState } from 'react'
import EventCard from './EventCard'

const SAMPLE_EVENTS = [
  {
    id: 'e1',
    title: 'TechnoFest 2025',
    date: '2025-11-01',
    location: 'IIT Campus',
    description: 'A technology fest featuring workshops, hackathons and guest speakers.'
  },
  {
    id: 'e2',
    title: 'Cultural Carnival',
    date: '2025-09-20',
    location: 'City College Grounds',
    description: 'Music, dance, food stalls and competitions.'
  },
  {
    id: 'e3',
    title: 'Sports Fiesta',
    date: '2025-10-05',
    location: 'University Stadium',
    description: 'Intercollege sports tournaments and cheer events.'
  }
]

export default function Events(){
  const [query, setQuery] = useState('')

  const filtered = SAMPLE_EVENTS.filter(e => {
    const q = query.toLowerCase()
    return e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q)
  })

  return (
    <section id="events" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <input value={query} onChange={e => setQuery(e.target.value)} className="border rounded-md px-3 py-2" placeholder="Search events or location" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {filtered.map(ev => <EventCard key={ev.id} event={ev} />)}
      </div>
    </section>
  )
}