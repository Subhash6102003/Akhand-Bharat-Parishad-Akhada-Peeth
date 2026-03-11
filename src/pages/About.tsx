import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.content-section'),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-primary">Akhand Bharat Parishad</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A sacred mission to protect and serve Gau Mata in the holy land of Rishikesh
          </p>
        </div>

        <div ref={contentRef} className="space-y-12">
          <div className="content-section bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Akhand Bharat Parishad Akhada Peeth is dedicated to the protection, care, and welfare of sacred cows. We rescue abandoned and injured cows, providing them with medical care, nutritious food, and a safe haven. Our mission is rooted in Vedic principles and the belief that serving Gau Mata is serving humanity.
            </p>
          </div>

          <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-4xl text-primary">visibility</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To create a world where every cow lives with dignity, love, and proper care. We envision expanding our gaushala to accommodate more rescued cows and spreading awareness about the importance of Gau Seva.
              </p>
            </div>

            <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-4xl text-primary">groups</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Compassion, dedication, and selfless service form the core of our organization. We believe in sustainable practices, community involvement, and preserving ancient Vedic traditions while embracing modern veterinary care.
              </p>
            </div>
          </div>

          <div className="content-section bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Gau Seva Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <span className="material-icons text-5xl text-primary mb-3">spa</span>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Spiritual Significance</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Cows are revered in Vedic culture as symbols of abundance and nourishment
                </p>
              </div>
              <div className="text-center">
                <span className="material-icons text-5xl text-primary mb-3">eco</span>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Environmental Impact</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Traditional cow care promotes sustainable agriculture and organic farming
                </p>
              </div>
              <div className="text-center">
                <span className="material-icons text-5xl text-primary mb-3">favorite</span>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Compassionate Living</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Rescuing and caring for abandoned cows embodies the principle of ahimsa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
