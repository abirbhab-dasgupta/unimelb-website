import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  'https://sport.unimelb.edu.au/assets/images/_1200x630_crop_center-center_none/rtc-header.jpghttps://scontent.fccu13-1.fna.fbcdn.net/v/t31.18172-8/18076984_10158730971865195_622149231456817938_o.jpg?stp=dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=gd8mVxfXLDkQ7kNvgGZxzKB&_nc_zt=23&_nc_ht=scontent.fccu13-1.fna&_nc_gid=AIXm3ET9kTQiSi5QDJ2oJdu&oh=00_AYDqiDhPXpi4eeyslFtJ7EAjnM6pu9VjR_3glSDh7-TCtw&oe=67319F69?height=400&width=800',
  'https://www.trinity.unimelb.edu.au/getmedia/b3591e46-da1c-4bb9-8e8f-7ef024437587/KH-263-Trinity-Marketing-190423.jpg?height=400&width=600',
  'https://www.rmit.edu.au/content/dam/rmit/au/en/life-at-rmit/life-at-rmit-1440x450.jpg?height=400&width=600',
  'https://images.squarespace-cdn.com/content/v1/569c3f35a976af8774edeb54/1585716383435-JD9KR1DG7WGXS5N074ZQ/Website+banners+-+case+studies+-+MELBOURNE+UNI.jpg?height=400&width=600',
]

const testimonials = [
  { id: 1, name: 'John Doe', role: 'Computer Science, Class of 2023', quote: 'My experience at this university has been transformative. The faculty and resources available have prepared me for a successful career in tech.' },
  { id: 2, name: 'Jane Smith', role: 'Business Administration, Class of 2022', quote: 'The diverse community and hands-on learning opportunities have broadened my perspective and sharpened my leadership skills.' },
  { id: 3, name: 'Alex Johnson', role: 'Biology, Class of 2024', quote: 'The research facilities and mentorship programs here are unparalleled. I\'ve been able to contribute to groundbreaking studies as an undergraduate.' },
]

export default function CampusLife(props) {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextImage = () => setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  const prevImage = () => setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)

  const nextTestimonial = () => setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prevTestimonial) => (prevTestimonial - 1 + testimonials.length) % testimonials.length)

  return (
    <section id={props.id} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Campus Life</h2>
        <div className="mb-12">
          <div className="relative">
            <img src={images[currentImage]} alt="Campus life" className="w-full h-64 object-cover rounded-lg" />
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Student Testimonials</h3>
          <div className="relative">
            <div className="text-center">
              <p className="text-lg mb-4">"{testimonials[currentTestimonial].quote}"</p>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
            </div>
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}