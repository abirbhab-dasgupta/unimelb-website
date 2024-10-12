import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, fadeIn } from '../utils/animations';

export default function AboutUs(props) {
  const handleClick = () => {
    window.location.href = 'https://en.wikipedia.org/wiki/University_of_Melbourne'
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (inView) {
      fadeInUp(textRef.current);
      fadeIn(imageRef.current);
    }
  }, [inView]);

  return (
    <section ref={ref} id={props.id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div ref={textRef} className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              Founded in 1950, our university has been at the forefront of innovation and academic excellence for over 70 years. We are committed to providing a world-class education that prepares our students for the challenges of tomorrow.
            </p>
            <p className="text-lg mb-4">
              Our mission is to foster critical thinking, creativity, and a passion for lifelong learning in a diverse and inclusive community.
            </p>
            <button
              onClick={handleClick}
              className="inline-block bg-primary text-text-light px-6 py-2 rounded hover:bg-primary-light transition-colors"
            >
              Read More
            </button>
          </div>
          <div ref={imageRef} className="md:w-1/2 md:pl-8">
            <img
              src="https://cdn.eventfinda.com.au/uploads/events/transformed/775321-361701-35.jpg?height=400&width=600"
              alt="University campus"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}