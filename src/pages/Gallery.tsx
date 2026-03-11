import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top center+=100',
          },
        }
      );
    }
  }, []);

  const images = [
    { src: '/WhatsApp Image 2026-02-14 at 20.56.14.jpeg', title: 'Sanctuary Life', description: 'Where peace and safety dwell' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.17.jpeg', title: 'Daily Nutrition', description: 'Fresh organic fodder daily' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.18.jpeg', title: 'Medical Care', description: '24/7 veterinary support' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.16 (1).jpeg', title: 'Spiritual Bond', description: 'A sacred connection' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.16.jpeg', title: 'Facilities', description: 'Modern and compassionate care' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.17 (1).jpeg', title: 'Seva & Community', description: 'Joining in sacred service' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.19.jpeg', title: 'Sacred Space', description: 'A haven of tranquility' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.19 (1).jpeg', title: 'Community Gathering', description: 'United in service' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.20.jpeg', title: 'Daily Rituals', description: 'Sacred traditions' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.21.jpeg', title: 'Volunteer Work', description: 'Hands of compassion' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.22.jpeg', title: 'Gaushala Life', description: 'Every moment matters' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.23.jpeg', title: 'Cultural Events', description: 'Celebrating together' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.24.jpeg', title: 'Community Support', description: 'Building connections' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.25.jpeg', title: 'Sacred Service', description: 'Devoted care' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.26.jpeg', title: 'Living in Harmony', description: 'Nature and nurture' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.34.jpeg', title: 'Green Pastures', description: 'Natural sanctuary' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.34 (1).jpeg', title: 'Peaceful Grazing', description: 'Freedom and safety' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.35.jpeg', title: 'Traditional Care', description: 'Ancient wisdom' },
    { src: '/WhatsApp Image 2026-02-14 at 20.56.36.jpeg', title: 'Spiritual Gathering', description: 'Collective compassion' },
    { src: '/WhatsApp Image 2026-02-14 at 21.07.34.jpeg', title: 'Morning Seva', description: 'Starting the day with purpose' },
    { src: '/WhatsApp Image 2026-02-14 at 21.07.35.jpeg', title: 'Devotional Service', description: 'Service with love' },
  ];

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/WhatsApp Image 2026-02-14 at 20.56.34.jpeg"
            alt="Sacred sanctuary with peaceful cows" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-white">Our Sanctuary</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Gallery of Love & <span className="text-primary">Compassion</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed max-w-xl">
              Glimpse into the sacred sanctuary where every life is cherished and every moment tells a story of devotion and care.
            </p>
          </div>
        </div>
      </header>

      {/* Gallery Grid Section */}
      <section className="py-20 bg-background-light relative">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Visual Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Moments from Our Sanctuary
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Gallery Grid */}
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Be Part of Our Journey
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your support helps us continue providing a safe haven for these gentle beings. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary rounded-xl hover:bg-primary-dark shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
            >
              Donate Now
              <span className="material-icons ml-2">favorite</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

