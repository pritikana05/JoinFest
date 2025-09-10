import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} JoinFest. All rights reserved.</div>
        <div className="text-sm text-gray-600">Built with ❤️ for college communities</div>
      </div>
    </footer>
  )
}