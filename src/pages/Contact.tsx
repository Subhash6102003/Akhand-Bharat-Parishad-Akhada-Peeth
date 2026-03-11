import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll('.contact-element'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="bg-background-light min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any queries or support
          </p>
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="contact-element bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Phone
                  </h3>
                  <p className="text-gray-600">9536713444</p>
                </div>
              </div>
            </div>

            <div className="contact-element bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary">email</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    dharmpeetha@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-element bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary">home</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Akhada Peeth Ashram,
                    <br />
                    Mathura Vrindavan, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-element bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <span className="material-icons">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Find Your Way to Us</h3>
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
      </div>
    </div>
  );
};

export default Contact;

