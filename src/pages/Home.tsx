import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        heroRef.current.querySelectorAll('.hero-text'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
      tl.fromTo(
        heroRef.current.querySelectorAll('.hero-button'),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.5'
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll('.stat-card'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Cards animation
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.querySelectorAll('.feature-card'),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpb12IZBgddSk77nIPC8tMoLZgIHv3EmqukFjDCGl1PTuVQynHmyHC7WL2Il9W7x5u8_qrIZvrjScpmkrVRPe5TWsq9aLkyrW6RCFkF0Lt7pxpmPYzZ8gkuRHykCPU2Ixx0J5eJIzkqxPrdVJAbwQF-Y0vbzi_Ct7f-hsC7oLkjw5zMFo8_yxPckdQMOTvvcuSEMchng4fjz3hh06N9MiBRwlb-VwsFF9i2MO24fGJo7RrdfPZimaShxMVhEa6qDU4rZujNJWaHHgx')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="hero-text text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Serving Gau Mata with{' '}
              <span className="text-primary">Divine Devotion</span>
            </h1>
            <p className="hero-text text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Akhand Bharat Parishad Akhada Peeth is dedicated to the protection,
              care, and welfare of sacred cows in the holy land of Rishikesh.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="hero-button inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full hover:bg-primary-dark shadow-lg hover:shadow-primary/30 transition-all"
              >
                <span>Support Our Mission</span>
                <span className="material-icons ml-2">volunteer_activism</span>
              </Link>
              <Link
                to="/about"
                className="hero-button inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
              >
                <span>Learn More</span>
                <span className="material-icons ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Cows Rescued
              </div>
            </div>
            <div className="stat-card text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Years of Service
              </div>
            </div>
            <div className="stat-card text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Supporters Worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={cardsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Our Sacred Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-primary/10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-4xl text-primary">
                  favorite
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Compassionate Care
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Providing 24/7 medical attention, nutritious food, and loving care
                to every cow in our shelter.
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-primary/10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-4xl text-primary">
                  local_hospital
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Medical Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                State-of-the-art veterinary facilities with expert doctors
                ensuring the health of Gau Mata.
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-primary/10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-4xl text-primary">eco</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Sustainable Living
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Organic farming and natural living practices aligned with Vedic
                principles and environmental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Sacred Mission
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Your contribution helps us provide food, shelter, and medical care to
            abandoned and injured cows.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-primary rounded-full hover:bg-primary-dark shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105"
          >
            <span>Donate Now</span>
            <span className="material-icons ml-3 text-2xl">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
