import { gsap } from 'gsap';

export const fadeInUp = (element) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
};

export const fadeIn = (element) => {
  gsap.from(element, {
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
};

export const staggerFadeInUp = (elements) => {
  gsap.from(elements, {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
  });
};