import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import AcademicPrograms from './components/AcademicPrograms'
import Admissions from './components/Admissions'
import CampusLife from './components/CampusLife'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero id="home" />
                <AboutUs id="about" />
                <AcademicPrograms id="academics" />
                <Admissions id="admissions" />
                <CampusLife id="campus-life" />
                <ContactUs id="contact" />
              </>
            } />
            {/* Add more routes here for other pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}