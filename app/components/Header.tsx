"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <header className="sticky top-0 z-10 bg-background border-b">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Eisuke Amano</h1>
      <nav className="hidden md:flex space-x-4">
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#skills" className="hover:text-primary">Skills</a>
        <a href="#projects" className="hover:text-primary">Projects</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
      </nav>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <X /> : <Menu />}
      </Button>
    </div>
    {isMenuOpen && (
      <nav className="md:hidden bg-background border-t">
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
          <a href="#about" className="hover:text-primary" onClick={toggleMenu}>About</a>
          <a href="#skills" className="hover:text-primary" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="hover:text-primary" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="hover:text-primary" onClick={toggleMenu}>Contact</a>
        </div>
      </nav>
    )}
  </header>
  )
}

export default Header
