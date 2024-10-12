import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Book, Briefcase, Microscope, Palette, Globe, Stethoscope, Code, Scale, Leaf } from 'lucide-react';
import { staggerFadeInUp } from '../utils/animations';

const programs = [
  { id: 1, title: 'School of Engineering', icon: Book, description: 'Cutting-edge programs in various engineering disciplines.', type: 'undergraduate' },
  { id: 2, title: 'School of Business', icon: Briefcase, description: 'Preparing future leaders for the global marketplace.', type: 'undergraduate' },
  { id: 3, title: 'School of Sciences', icon: Microscope, description: 'Advancing knowledge through research and innovation.', type: 'undergraduate' },
  { id: 4, title: 'School of Arts and Humanities', icon: Palette, description: 'Fostering creativity and critical thinking across disciplines.', type: 'undergraduate' },
  { id: 5, title: 'School of Social Sciences', icon: Globe, description: 'Understanding human behavior and societal structures.', type: 'undergraduate' },
  { id: 6, title: 'School of Medicine', icon: Stethoscope, description: 'Training the next generation of healthcare professionals.', type: 'undergraduate' },
  { id: 7, title: 'MBA Program', icon: Briefcase, description: 'Developing strategic thinkers and business leaders.', type: 'postgraduate' },
  { id: 8, title: 'Master of Computer Science', icon: Code, description: 'Advanced study in algorithms, AI, and software engineering.', type: 'postgraduate' },
  { id: 9, title: 'Master of Public Health', icon: Stethoscope, description: 'Addressing global health challenges through education and research.', type: 'postgraduate' },
  { id: 10, title: 'Master of Laws (LLM)', icon: Scale, description: 'Specialized legal training for practicing lawyers and law graduates.', type: 'postgraduate' },
  { id: 11, title: 'Master of Environmental Science', icon: Leaf, description: 'Tackling environmental issues through interdisciplinary approaches.', type: 'postgraduate' },
  { id: 12, title: 'Ph.D. in Computer Science', icon: Code, description: 'Pushing the boundaries of technology and computation.', type: 'research' },
  { id: 13, title: 'Ph.D. in Neuroscience', icon: Microscope, description: 'Exploring the complexities of the brain and nervous system.', type: 'research' },
  { id: 14, title: 'Ph.D. in Economics', icon: Briefcase, description: 'Advanced research in economic theory and policy.', type: 'research' },
  { id: 15, title: 'Ph.D. in Astrophysics', icon: Globe, description: 'Unraveling the mysteries of the universe through cutting-edge research.', type: 'research' },
  { id: 16, title: 'Ph.D. in Bioengineering', icon: Microscope, description: 'Innovating at the intersection of biology and engineering.', type: 'research' },
];

export default function AcademicPrograms(props) {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programsRef = useRef(null);

  useEffect(() => {
    if (inView && programsRef.current) {
      staggerFadeInUp(programsRef.current.children);
    }
  }, [inView]);

  const filteredPrograms = filter === 'all' ? programs : programs.filter(program => program.type === filter);

  return (
    <section ref={ref} id={props.id} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Academic Programs</h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-l-lg ${filter === 'all' ? 'bg-primary text-text-light' : 'bg-white text-primary'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('undergraduate')}
            className={`px-4 py-2 ${filter === 'undergraduate' ? 'bg-primary text-text-light' : 'bg-white text-primary'}`}
          >
            Undergraduate
          </button>
          <button
            onClick={() => setFilter('postgraduate')}
            className={`px-4 py-2 ${filter === 'postgraduate' ? 'bg-primary text-text-light' : 'bg-white text-primary'}`}
          >
            Postgraduate
          </button>
          <button
            onClick={() => setFilter('research')}
            className={`px-4 py-2 rounded-r-lg ${filter === 'research' ? 'bg-primary text-text-light' : 'bg-white text-primary'}`}
          >
            Research
          </button>
        </div>
        <div ref={programsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-md p-6">
              <program.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <button
                onClick={() => {/* Add navigation logic */}}
                className="text-primary hover:text-secondary-light transition-colors"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}