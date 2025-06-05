'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Users, FileText, BarChart3, Settings } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Documents', href: '/documents', icon: FileText },
    
  ]

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🐝</span>
            </div>
            <div>
              <h1 className="font-bold text-xl gradient-text">BeeSight</h1>
              <p className="text-xs text-gray-600">Development Blog</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-amber-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-200">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon size={18} />}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}