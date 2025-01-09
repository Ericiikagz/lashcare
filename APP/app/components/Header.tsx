"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-semibold text-lavender-700">
            Lashcare Kenya 
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/services" className="text-lavender-600 hover:text-lavender-800">Services</Link>
            <Link href="/book" className="text-lavender-600 hover:text-lavender-800">Book Appointment</Link>
            <Link href="/dashboard" className="text-lavender-600 hover:text-lavender-800">My Dashboard</Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/services" className="text-lavender-600 hover:text-lavender-800">Services</Link>
            <Link href="/book" className="text-lavender-600 hover:text-lavender-800">Book Appointment</Link>
            <Link href="/dashboard" className="text-lavender-600 hover:text-lavender-800">My Dashboard</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

