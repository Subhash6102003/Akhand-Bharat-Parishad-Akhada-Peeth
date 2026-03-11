import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Donate = () => {
  const [amount, setAmount] = useState(500);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll('.form-element'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, []);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !phone) {
      alert('Please fill in all details');
      return;
    }

    if (amount < 100) {
      alert('Minimum donation amount is ₹100');
      return;
    }

    setLoading(true);

    // Razorpay options
    const options = {
      key: 'rzp_test_YourTestKeyHere', // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Akhand Bharat Parishad',
      description: 'Gaushala Donation',
      image: '/logo/NGO\'s_logo.svg',
      handler: function (response: any) {
        // Payment successful
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // Here you can send payment details to your backend
        console.log('Payment Response:', response);
        setLoading(false);
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setAmount(500);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        purpose: 'Gaushala Donation',
      },
      theme: {
        color: '#ee8c2b',
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    
    rzp.on('payment.failed', function (response: any) {
      alert('Payment Failed: ' + response.error.description);
      setLoading(false);
    });

    rzp.open();
  };

  return (
    <div className="bg-background-light min-h-screen pt-20">
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="form-element relative overflow-hidden rounded-xl shadow-xl h-64 lg:h-80 group">
              <img
                alt="Close up of a gentle cow"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpb12IZBgddSk77nIPC8tMoLZgIHv3EmqukFjDCGl1PTuVQynHmyHC7WL2Il9W7x5u8_qrIZvrjScpmkrVRPe5TWsq9aLkyrW6RCFkF0Lt7pxpmPYzZ8gkuRHykCPU2Ixx0J5eJIzkqxPrdVJAbwQF-Y0vbzi_Ct7f-hsC7oLkjw5zMFo8_yxPckdQMOTvvcuSEMchng4fjz3hh06N9MiBRwlb-VwsFF9i2MO24fGJo7RrdfPZimaShxMVhEa6qDU4rZujNJWaHHgx"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2">
                    Daily Seva
                  </span>
                  <h2 className="text-white text-2xl font-bold">
                    "Gau Seva is the highest Dharma."
                  </h2>
                </div>
              </div>
            </div>

            <div className="form-element bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <span className="material-icons text-primary">volunteer_activism</span>
                Why Support Us?
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Your contribution directly supports the nutrition, shelter, and medical
                care of over 500 cows rescued from slaughter and abandonment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-600 text-sm mt-1">
                    check_circle
                  </span>
                  <span className="text-sm text-gray-700">
                    Provides green fodder and essential minerals daily.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-600 text-sm mt-1">
                    check_circle
                  </span>
                  <span className="text-sm text-gray-700">
                    Funds emergency veterinary surgeries and medicines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-600 text-sm mt-1">
                    check_circle
                  </span>
                  <span className="text-sm text-gray-700">
                    Maintains clean, airy shelters for old and infirm cattle.
                  </span>
                </li>
              </ul>
            </div>

            <div className="form-element bg-primary/5 p-6 rounded-xl border border-primary/20 flex flex-col items-center text-center">
              <span className="material-icons text-primary text-4xl mb-2">
                verified_user
              </span>
              <h4 className="font-bold text-gray-900 mb-1">
                Tax Benefits Available
              </h4>
              <p className="text-xs text-gray-600">
                All donations are eligible for 50% tax exemption under Section 80G.
              </p>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div ref={formRef} className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-primary to-orange-400"></div>
              <div className="p-6 sm:p-8">
                <div className="form-element mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Secure Donation
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Complete the form below to support the Gaushala.
                  </p>
                </div>

                <form className="space-y-8" onSubmit={handlePayment}>
                  <div className="form-element">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Choose Donation Amount
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[500, 1000, 2500].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => setAmount(amt)}
                          className={`py-3 px-2 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${
                            amount === amt
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
                          }`}
                          type="button"
                        >
                          <span className={`font-bold text-lg ${amount === amt ? 'text-primary' : 'text-gray-600'}`}>
                            ₹{amt}
                          </span>
                        </button>
                      ))}
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          ₹
                        </span>
                        <input
                          className="w-full h-full pl-7 pr-2 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-sm font-semibold"
                          placeholder="Custom"
                          type="number"
                          onChange={(e) => setAmount(Number(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <span className="material-icons text-base">info</span>
                      <span className="font-medium">
                        ₹500 helps feed a cow green fodder for 3 days.
                      </span>
                    </div>
                  </div>

                  <div className="form-element">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                          Full Name
                        </label>
                        <input
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                          placeholder="e.g. Rahul Sharma"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                          Email Address
                        </label>
                        <input
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                          placeholder="rahul@example.com"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                          Phone Number
                        </label>
                        <input
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                          placeholder="9536713444"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-element pt-2">
                    <button
                      className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/30 transform transition hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span>Processing...</span>
                          <span className="material-icons animate-spin">refresh</span>
                        </>
                      ) : (
                        <>
                          <span>Donate ₹{amount} Securely</span>
                          <span className="material-icons">lock</span>
                        </>
                      )}
                    </button>
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                      <span className="material-icons text-sm">verified_user</span>
                      <span>Powered by Razorpay - Secure Payment Gateway</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;

