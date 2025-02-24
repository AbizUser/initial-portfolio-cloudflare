"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  // const scrollToElement = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };
  return (
    <header className="sticky top-0 z-10 bg-background border-b">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className='flex gap-5'>
        <Link href={"https://github.com/AbizUser"} target='blank'>
        <Button variant="outline" size="icon">
          <FaGithub className="h-2 w-2" />
          <span className="sr-only ">GitHub</span>
        </Button>
        </Link>
        <h1 className="text-2xl font-bold">amoi-AI</h1>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#skills" className="hover:text-primary" >Skills</a>
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
