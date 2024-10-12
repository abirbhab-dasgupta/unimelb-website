import { CheckCircle, Calendar, PhoneCall } from 'lucide-react'

export default function Admissions(props) {
  return (
    <section id={props.id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Admissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Choose Program</h3>
            <p className="text-gray-600">Explore our wide range of programs and find the perfect fit for your aspirations.</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
            <p className="text-gray-600">Complete our online application form and provide all necessary documents.</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Attend Interview</h3>
            <p className="text-gray-600">If shortlisted, participate in an interview to showcase your potential.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
          <div className="flex justify-center items-center mb-4">
            <Calendar className="w-6 h-6 text-secondary mr-2" />
            <p className="text-lg">Application Deadline: August 15, 2024</p>
          </div>
          <div className="flex justify-center items-center">
            <PhoneCall className="w-6 h-6 text-secondary mr-2" />
            <p className="text-lg">Contact Admissions: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  )
}