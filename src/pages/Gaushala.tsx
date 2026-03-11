import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gaushala = () => {
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
        contentRef.current.querySelectorAll('.content-card'),
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
            Our <span className="text-primary">Gaushala</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A sacred sanctuary for Gau Mata in the foothills of the Himalayas
          </p>
        </div>

        <div ref={contentRef} className="space-y-12">
          <div className="content-card bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Our Gaushala
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Nestled in the serene environment of Rishikesh, our Gaushala provides a safe and loving home for over 500 rescued cows. We offer comprehensive care including veterinary services, nutritious feed, clean shelter, and spiritual environment where Gau Mata can live with dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="content-card bg-white dark:bg-background-dark p-6 rounded-xl shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-icons text-4xl text-primary">
                  local_hospital
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Medical Care
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                24/7 veterinary support with modern facilities and experienced doctors
              </p>
            </div>

            <div className="content-card bg-white dark:bg-background-dark p-6 rounded-xl shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-icons text-4xl text-primary">
                  restaurant
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Nutritious Feed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organic green fodder, hay, and mineral supplements for optimal health
              </p>
            </div>

            <div className="content-card bg-white dark:bg-background-dark p-6 rounded-xl shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-icons text-4xl text-primary">home</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Comfortable Shelter
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Spacious, clean, and well-ventilated sheds with proper drainage
              </p>
            </div>
          </div>

          <div className="content-card bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Daily Schedule at the Gaushala
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary text-2xl">wb_sunny</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Morning (5:00 AM - 9:00 AM)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Morning prayers, cleaning, fresh water, and green fodder feeding
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary text-2xl">
                  wb_twilight
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Afternoon (12:00 PM - 3:00 PM)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Medical check-ups, grooming, and supplementary nutrition
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary text-2xl">
                  nights_stay
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Evening (5:00 PM - 8:00 PM)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Evening feeding, Gau Arti, and final health monitoring
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary text-2xl">security</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Night Watch (8:00 PM onwards)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    24/7 security and emergency veterinary services available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaushala;
