import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-text-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-secondary-light transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-secondary-light transition-colors">Terms of Service</Link></li>
              <li><Link to="/accessibility" className="hover:text-secondary-light transition-colors">Accessibility</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md w-full text-gray-800"
              />
              <button
                type="submit"
                className="bg-secondary text-primary px-4 py-2 rounded-r-md hover:bg-secondary-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} University of Melbourne . (Note : This is a hackathon project not the real university website )</p>
        </div>
      </div>
    </footer>
  )
}