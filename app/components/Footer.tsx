import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
