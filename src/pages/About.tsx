import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
        contentRef.current.querySelectorAll('.content-section'),
        { y: 50, opacity: 0 },
        {
          y: 0,
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

    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.querySelectorAll('.timeline-item'),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <header ref={headerRef} className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/WhatsApp Image 2026-02-14 at 20.56.36.jpeg"
            alt="Peaceful Indian cows grazing in a sanctuary" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-light"></div>
        </div>
        <div className="hero-content relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-sm font-semibold tracking-wider mb-4 uppercase">
            Established 1998
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
            Preserving Dharma,<br/><span className="text-primary">Serving Lives.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
            We are dedicated to the sacred duty of protecting our indigenous cattle breeds and restoring the spiritual bond between humanity and nature.
          </p>
        </div>
      </header>

      {/* Ornamental Divider */}
      <div className="w-full flex justify-center -mt-6 relative z-20">
        <div className="w-32 h-1 bg-primary rounded-full opacity-50"></div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M30 0l30 30-30 30L0 30z\" fill=\"%23ee8c2b\" fillRule=\"evenodd\"/%3E%3C/svg%3E')",
            backgroundSize: '60px 60px'
          }}
        ></div>
        <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 content-section">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Purpose</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Why We Serve</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="content-section bg-white p-8 rounded-xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <span className="material-icons-outlined text-3xl">volunteer_activism</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                To protect and serve the indigenous cattle breeds of India, ensuring they live with dignity. We strive to create sustainable sanctuaries (Gaushalas) that operate on principles of compassion, organic living, and spiritual harmony.
              </p>
            </div>
            {/* Vision Card */}
            <div className="content-section bg-white p-8 rounded-xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <span className="material-icons-outlined text-3xl">visibility</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                A spiritual ecosystem where every life is revered as divine. We envision a future where traditional wisdom meets modern care, fostering a society that values animal welfare as an integral part of human spiritual evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background-light rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Decorative Circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-6 scale-95 translate-y-2"></div>
                  <img 
                    src="/guruji.png"
                    alt="Portrait of Shri Brahmanand Maharaj Ji" 
                    className="relative w-72 h-80 object-cover rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Guiding Light</span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">श्री ब्रह्मानंद महाराज जी</h3>
                <div className="relative">
                  <span className="material-icons-outlined text-6xl text-primary/10 absolute -top-8 -left-6 transform -scale-x-100">format_quote</span>
                  <p className="text-xl md:text-2xl text-gray-700 italic font-light leading-relaxed mb-8 relative z-10">
                    "The cow is not merely an animal; she is a mother to the world. Serving her is the highest form of worship. When we protect the voiceless, we protect our own humanity and the Dharma that sustains the universe."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Story Section */}
      <section ref={timelineRef} className="py-24 relative bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Journey</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">A Legacy of Seva</h3>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10"></div>
            
            {/* Timeline Item 1 */}
            <div className="timeline-item relative flex items-center justify-between mb-16 w-full group">
              <div className="w-5/12 text-right pr-8">
                <h4 className="text-2xl font-bold text-primary mb-1">1998</h4>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Spiritual Awakening</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Swami Anand Ji experiences a profound calling to serve indigenous cattle during a pilgrimage to Vrindavan. The seed for the Akhada Peeth is sown.
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10 shadow-[0_0_0_4px_rgba(238,140,43,0.2)]"></div>
              <div className="w-5/12 pl-8"></div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item relative flex items-center justify-between mb-16 w-full group">
              <div className="w-5/12 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10 shadow-[0_0_0_4px_rgba(238,140,43,0.2)]"></div>
              <div className="w-5/12 pl-8 text-left">
                <h4 className="text-2xl font-bold text-primary mb-1">2005</h4>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">First Gaushala</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With the support of local devotees, the first shelter is established on a small plot of land, rescuing 50 cows from slaughter.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item relative flex items-center justify-between mb-16 w-full group">
              <div className="w-5/12 text-right pr-8">
                <h4 className="text-2xl font-bold text-primary mb-1">2015</h4>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">National Expansion</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The organization expands its footprint, launching nationwide awareness campaigns and establishing three new sanctuaries across North India.
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10 shadow-[0_0_0_4px_rgba(238,140,43,0.2)]"></div>
              <div className="w-5/12 pl-8"></div>
            </div>

            {/* Timeline Item 4 */}
            <div className="timeline-item relative flex items-center justify-between w-full group">
              <div className="w-5/12 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary border-4 border-primary rounded-full z-10 shadow-[0_0_0_4px_rgba(238,140,43,0.4)] animate-pulse"></div>
              <div className="w-5/12 pl-8 text-left">
                <h4 className="text-2xl font-bold text-primary mb-1">Today</h4>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">A Movement of Compassion</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Over 5,000 cattle protected, medical camps held monthly, and a growing community of 10,000+ volunteers dedicated to Dharma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="p-4">
              <span className="block text-4xl md:text-5xl font-bold mb-2">25+</span>
              <span className="text-white/80 text-sm uppercase tracking-wider font-semibold">Years of Service</span>
            </div>
            <div className="p-4">
              <span className="block text-4xl md:text-5xl font-bold mb-2">5k+</span>
              <span className="text-white/80 text-sm uppercase tracking-wider font-semibold">Cows Protected</span>
            </div>
            <div className="p-4">
              <span className="block text-4xl md:text-5xl font-bold mb-2">12</span>
              <span className="text-white/80 text-sm uppercase tracking-wider font-semibold">Sanctuaries</span>
            </div>
            <div className="p-4">
              <span className="block text-4xl md:text-5xl font-bold mb-2">10k</span>
              <span className="text-white/80 text-sm uppercase tracking-wider font-semibold">Volunteers</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Be a Part of the Divine Cause</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Your contribution can save a life today. Join us in our mission to protect the sacred heritage of our land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate"
              className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all hover:-translate-y-1"
            >
              Donate Now
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

