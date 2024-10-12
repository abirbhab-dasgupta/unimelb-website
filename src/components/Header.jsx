import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-primary text-text-light fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="text-2xl font-bold">
          University of Melbourne
        </button>
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-secondary-light transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-secondary-light transition-colors">About Us</button>
          <button onClick={() => scrollToSection('academics')} className="hover:text-secondary-light transition-colors">Academics</button>
          <button onClick={() => scrollToSection('admissions')} className="hover:text-secondary-light transition-colors">Admissions</button>
          <button onClick={() => scrollToSection('campus-life')} className="hover:text-secondary-light transition-colors">Campus Life</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-secondary-light transition-colors">Contact Us</button>
        </nav>
        <button
          onClick={() => scrollToSection('admissions')}
          className="hidden md:inline-block bg-secondary text-text-light px-4 py-2 rounded hover:bg-secondary-light transition-colors"
        >
          Apply Now
        </button>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <button onClick={() => scrollToSection('home')} className="hover:text-secondary-light transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-secondary-light transition-colors">About Us</button>
            <button onClick={() => scrollToSection('academics')} className="hover:text-secondary-light transition-colors">Academics</button>
            <button onClick={() => scrollToSection('admissions')} className="hover:text-secondary-light transition-colors">Admissions</button>
            <button onClick={() => scrollToSection('campus-life')} className="hover:text-secondary-light transition-colors">Campus Life</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-secondary-light transition-colors">Contact Us</button>
            <button
              onClick={() => scrollToSection('admissions')}
              className="bg-secondary text-text-light px-4 py-2 rounded hover:bg-secondary-light transition-colors inline-block"
            >
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}