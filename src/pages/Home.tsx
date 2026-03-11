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
    <div className="bg-background-light">
      {/* Hero Section */}
      <header ref={heroRef} className="relative pt-20 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMAZacVEmWUbNEY17n3YGa8JRX1TNrSox-vJ_4nHHG5ruZZ9J5R4i6fohUAf5051Lcx9WxBHqpNT30BDxZ8WJPWZv8eEADDz2vFIPnCXHqQFk4QzwIipcOQizwt9C-am1j8IfDg6TC0LOp4OuBr1orBeUHYo-lB8XJ75xSzYxKGvl7Twa1zksaTvSwk-VGkE7NukCpRcuTK1CxAOCUZueO0P0BiLa-Hw9eQp81u7sla81uOC9CJGqBobCEOHPvwzuT3QmDW7YUNFCw"
            alt="Peaceful cow in sunlight" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent h-32 bottom-0"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <div className="hero-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-dark mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-white">Dedicated to Service</span>
            </div>
            <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Serving Cattle with <span className="text-primary italic">Love</span>, Care & Dignity for Life
            </h1>
            <p className="hero-text text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed max-w-xl">
              Join Akhand Bharat Parishad Akhada Peeth in our sacred mission. We provide a sanctuary where every life is revered and protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/donate"
                className="hero-button inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary rounded-xl hover:bg-primary-dark shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
              >
                Donate Now
                <span className="material-icons ml-2">favorite</span>
              </Link>
              <Link
                to="/gaushala"
                className="hero-button inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/20 hover:-translate-y-1"
              >
                Visit Our Gaushala
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-white/80 text-sm">
              <span className="material-icons text-green-400 text-sm">verified</span>
              <span>80G Tax Exemption Available</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mission Statement Floating Card */}
      <section className="relative z-20 -mt-16 mb-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border-t-4 border-primary p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-600/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          <span className="material-icons text-4xl text-primary mb-4">self_improvement</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Sacred Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            "We believe every living being deserves respect. Our Gaushala is not just a shelter; it is a spiritual sanctuary for abandoned, sick, and elderly cattle who have nowhere else to go. We serve them as we would serve the divine."
          </p>
        </div>
      </section>

      {/* Key Highlights / Services */}
      <section ref={cardsRef} className="py-16 bg-background-light relative">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Provide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Holistic Care for the Voiceless
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-icons text-3xl text-primary group-hover:text-white transition-colors">home</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lifelong Shelter</h3>
              <p className="text-gray-600 leading-relaxed">
                A safe, clean, and spacious environment where cows can roam freely and live out their natural lives in peace and security.
              </p>
            </div>

            <div className="feature-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30">
              <div className="w-16 h-16 bg-green-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <span className="material-icons text-3xl text-green-600 group-hover:text-white transition-colors">medical_services</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock veterinary support, regular checkups, and specialized treatments for injured or sick animals rescued from distress.
              </p>
            </div>

            <div className="feature-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-icons text-3xl text-primary group-hover:text-white transition-colors">grass</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Nutritious Food</h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure a balanced diet of fresh green fodder, dry fodder, and essential minerals to keep our herd healthy and strong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section ref={statsRef} className="py-16 bg-green-700 relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-overlay filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="stat-card p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-green-100 font-medium">Cows Sheltered</div>
            </div>
            <div className="stat-card p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">1200+</div>
              <div className="text-green-100 font-medium">Daily Meals</div>
            </div>
            <div className="stat-card p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-green-100 font-medium">Care & Security</div>
            </div>
            <div className="stat-card p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-green-100 font-medium">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content / Story Section with Image */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 scale-100 z-0"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwIRYdCH0JVNKGYUs0wddu57bJWn5p53AdYS1MIkTW1pn877NTbftepWIYXxYSDcx7SjfyynV4KDec3yLd-poEfk_p4yowgjrekNrPctjwvlMWLd52TfwRejhxPa3cI4DJuLo62wNvAVIPkvI1_apJMBUk07BkSpo2J2VeO0NMdy7zQsDM5rfFhCR1wLbUDunUJgc9vNbBMdTZPP2IKZkpLR2f__FJqqLgGOB2RDzbNNTn6at6kAo79dSYl3ZU4X6A1TxyAvxZc5gG"
                alt="Spiritual leader at sanctuary" 
                className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary max-w-xs hidden md:block">
                <p className="text-sm italic text-gray-600">"Service to animals is the highest form of worship."</p>
                <p className="text-xs font-bold text-primary mt-2">- Ancient Wisdom</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Restoring Dignity to Every Life
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Akhand Bharat Parishad Akhada Peeth, we witness the transformation daily. Cows that arrive weak, injured, and fearful soon find solace in our care.
                </p>
                <p>
                  We follow the ancient traditions of 'Gau Seva' (service to cows), integrating modern veterinary science with traditional care methods. Your support helps us expand our sheds, buy medicines, and ensure no cow in our region goes hungry.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-icons text-sm">nature</span>
                  </span>
                  <span className="font-medium text-gray-700">Eco-friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-icons text-sm">temple_hindu</span>
                  </span>
                  <span className="font-medium text-gray-700">Spiritual Growth</span>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/about" className="text-primary font-bold hover:text-primary-dark inline-flex items-center gap-2 group">
                  Learn more about our methods
                  <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Make a Difference Today
            </h2>
            <p className="text-lg text-gray-600">
              Your contribution directly impacts the lives of innocent animals. Choose a cause close to your heart.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-primary rounded-full hover:bg-primary-dark shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105"
            >
              <span>Donate Now</span>
              <span className="material-icons ml-3 text-2xl">volunteer_activism</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-gray-700 bg-gray-100 border-2 border-gray-200 rounded-full hover:bg-gray-200 transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Find Your Way to Us</h3>
            <p className="text-gray-500 mt-2">Come and experience the serenity of our Gaushala.</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-96 w-full relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4977891719217!2d77.63341137550071!3d27.552169976282893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973720befbb9921%3A0x406242738cadbe3f!2sSankat%20Mochan%20Hanuman%20Dham!5e0!3m2!1sen!2sus!4v1707931200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-medium text-gray-600">
              <a
                className="hover:text-primary flex items-center gap-1"
                href="https://maps.app.goo.gl/aUta7c5Q3MUd7Ld5A?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
              >
                View larger map <span className="material-icons text-xs">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

