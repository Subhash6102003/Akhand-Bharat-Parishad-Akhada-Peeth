import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gaushala = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.querySelector('.hero-content'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.content-card'),
        { y: 50, opacity: 0 },
        {
          y: 0,
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

    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current.querySelectorAll('.gallery-item'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <header ref={headerRef} className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/WhatsApp Image 2026-02-14 at 20.56.35.jpeg"
            alt="Peaceful cows grazing in a sunny green pasture with warm light" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-background-dark/40 to-transparent"></div>
        </div>
        <div className="hero-content relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            A Sanctuary for All Life


          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Our <span className="text-primary">Gaushala</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Providing shelter, care, and love to sacred cows in a traditional setting that honors both animal welfare and spiritual practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
            >
              <span className="material-icons">volunteer_activism</span>
              Support Our Cause
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Visit Us
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          <span className="material-icons text-4xl">keyboard_arrow_down</span>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-24 bg-background-light relative overflow-hidden">
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#ee8c2b 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        ></div>
        <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guided by Compassion & Duty</h3>
            <p className="text-gray-600">Our philosophy is rooted in the ancient wisdom that sees the divine in all living beings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="content-card group bg-white p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-primary/5 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-icons text-9xl text-primary">favorite</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-3xl">pets</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cattle as Family</h4>
              <p className="text-gray-600 leading-relaxed">
                Each cow is treated as an individual member of our family. We respect their unique personality and provide care tailored to their needs, ensuring a comfortable and peaceful life.
              </p>
            </div>
            {/* Card 2 */}
            <div className="content-card group bg-white p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-primary/5 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-icons text-9xl text-primary">spa</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-3xl">balance</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Dharma & Duty</h4>
              <p className="text-gray-600 leading-relaxed">
                Serving cows is our sacred dharma. Through this timeless practice, we uphold the values of compassion and selflessness, contributing to the spiritual well-being of society.
              </p>
            </div>
            {/* Card 3 */}
            <div className="content-card group bg-white p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-primary/5 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-icons text-9xl text-primary">self_improvement</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-3xl">nature_people</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Holistic Living</h4>
              <p className="text-gray-600 leading-relaxed">
                We integrate organic farming, natural remedies, and sustainable practices to create a thriving ecosystem where humans and animals coexist harmoniously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine Split Sections */}
      <section className="py-20 bg-white">
        {/* Section 1: Nutrition */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/3] group">
                <img 
                  src="/WhatsApp Image 2026-02-14 at 20.56.19 (2).jpeg"
                  alt="Close up of a cow eating fresh green organic grass" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white font-medium flex items-center gap-2">
                    <span className="material-icons text-primary">grass</span> Fresh Organic Fodder
                  </span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Daily Care
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Nourishment for the Body & Soul</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every meal is prepared with devotion. We serve fresh, organically grown fodder harvested from our own fields, ensuring purity and nutrition in every bite.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">check_circle</span>
                  <span className="text-gray-700">100% Organic green fodder harvested from our own fields.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">check_circle</span>
                  <span className="text-gray-700">Pure, filtered drinking water available 24/7.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">check_circle</span>
                  <span className="text-gray-700">Ayurvedic herbal supplements to boost immunity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Medical Care (Reversed) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/3] group">
                <img 
                  src="/WhatsApp Image 2026-02-14 at 21.07.34.jpeg"
                  alt="Veterinarian checking a cow gently" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white font-medium flex items-center gap-2">
                    <span className="material-icons text-primary">medical_services</span> Dedicated Veterinary Wing
                  </span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Medical Facilities
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Compassionate Medical Attention</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Health is wealth. Our in-house veterinary team provides timely medical intervention, preventive care, and specialized treatment for every member of our herd.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">health_and_safety</span>
                  <div>
                    <h5 className="font-bold text-gray-900">24/7 Veterinary Support</h5>
                    <p className="text-sm text-gray-600">Round-the-clock care for critical cases and newborns.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">healing</span>
                  <div>
                    <h5 className="font-bold text-gray-900">Regular Screenings</h5>
                    <p className="text-sm text-gray-600">Weekly health check-ups to prevent ailments early.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">home</span>
                  <div>
                    <h5 className="font-bold text-gray-900">Shelter for the Disabled</h5>
                    <p className="text-sm text-gray-600">Specialized soft-floor bedding for injured or disabled cows.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Life at the Gaushala</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Glimpses of the divine interactions and peaceful moments that fill our sanctuary every day.</p>
          </div>
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Tall Item */}
            <div className="gallery-item row-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/WhatsApp Image 2026-02-14 at 20.56.35.jpeg"
                alt="Portrait of a brown cow with gentle eyes" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Gentle Soul</p>
              </div>
            </div>
            {/* Wide Item */}
            <div className="gallery-item col-span-1 lg:col-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/WhatsApp Image 2026-02-14 at 20.56.36.jpeg"
                alt="Herd of cows grazing in a wide open field under blue sky" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Morning Grazing</p>
              </div>
            </div>
            {/* Standard Item */}
            <div className="gallery-item group relative overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/WhatsApp Image 2026-02-14 at 20.56.36 (1).jpeg"
                alt="Calf resting in the shade" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">New Life</p>
              </div>
            </div>
            {/* Standard Item */}
            <div className="gallery-item group relative overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/WhatsApp Image 2026-02-14 at 21.07.35.jpeg"
                alt="Volunteer feeding a cow by hand" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Seva (Service)</p>
              </div>
            </div>
            {/* Standard Item */}
            <div className="gallery-item group relative overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/WhatsApp Image 2026-02-14 at 21.07.43.jpeg"
                alt="Evening Aarti ceremony with lamps" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Evening Prayers</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors border-b-2 border-primary pb-1"
            >
              View Full Gallery <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Us CTA Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/WhatsApp Image 2026-02-14 at 21.07.48.jpeg"
            alt="Soft focused background of a rural landscape at sunset" 
            className="w-full h-full object-cover filter blur-[2px] brightness-75"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <div className="bg-background-light/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl text-center border border-white/20">
            <span className="material-icons text-5xl text-primary mb-6">temple_buddhist</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Come Seek Blessings</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Visit our Gaushala to experience the serenity firsthand. Spend a day in service, participate in the evening Aarti, or simply sit in the calming presence of our sacred herd.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-lg mx-auto mb-10 bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-start gap-3">
                <span className="material-icons text-primary mt-1">schedule</span>
                <div>
                  <h4 className="font-bold text-gray-900">Visiting Hours</h4>
                  <p className="text-sm text-gray-600">Daily: 6:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-icons text-primary mt-1">place</span>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-sm text-gray-600">Mathura Vrindavan</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://maps.app.goo.gl/aUta7c5Q3MUd7Ld5A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Get Directions
              </a>
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gaushala;

