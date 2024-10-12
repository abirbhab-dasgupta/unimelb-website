import React from 'react'

export default function Hero(props) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id={props.id} className="relative h-screen flex items-center justify-center text-text-light">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://imgs.search.brave.com/ZCOqNqw2ofOkPRsg-35xto1FPdNxSMtYVQk3_gye2WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pZnNh/LWJ1dGxlci5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDUvSUZTQS0xNi5q/cGc?height=1080&width=1920')" }}
      ></div>
      <div className="absolute inset-0 bg-primary opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Shaping the Future with Innovation</h1>
        <p className="text-xl md:text-2xl mb-8">Discover your potential at our university</p>
        <div className="space-x-4">
          <button
            onClick={() => scrollToSection('academics')}
            className="bg-secondary text-text-light px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary-light transition-colors"
          >
            Explore Programs
          </button>
          <button
            onClick={() => scrollToSection('admissions')}
            className="bg-text-light text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  )
}