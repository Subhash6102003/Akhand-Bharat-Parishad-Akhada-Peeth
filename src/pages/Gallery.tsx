import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gallery = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll('.gallery-item'),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, []);

  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDpb12IZBgddSk77nIPC8tMoLZgIHv3EmqukFjDCGl1PTuVQynHmyHC7WL2Il9W7x5u8_qrIZvrjScpmkrVRPe5TWsq9aLkyrW6RCFkF0Lt7pxpmPYzZ8gkuRHykCPU2Ixx0J5eJIzkqxPrdVJAbwQF-Y0vbzi_Ct7f-hsC7oLkjw5zMFo8_yxPckdQMOTvvcuSEMchng4fjz3hh06N9MiBRwlb-VwsFF9i2MO24fGJo7RrdfPZimaShxMVhEa6qDU4rZujNJWaHHgx',
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Glimpses of life at our Gaushala and the beautiful souls we serve
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item relative overflow-hidden rounded-xl shadow-xl h-72 group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-semibold">
                  Gau Seva at Akhand Bharat Parishad
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Visit Our Gaushala
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Experience the divine atmosphere and participate in Gau Seva
          </p>
          <a
            href="tel:9536713444"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-colors"
          >
            <span className="material-icons mr-2">call</span>
            <span>Call to Schedule Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
