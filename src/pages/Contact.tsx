import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-honey-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our raw honey, wholesale orders, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Our customer service team is available Monday through Friday, 9am to 5pm EST.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-honey-600 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Apiary</h3>
                  <p className="text-gray-600">123 Honeycomb Lane<br />Meadow Valley, OR 97001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-honey-600 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@nectarandhive.com<br />wholesale@nectarandhive.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-honey-600 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call or WhatsApp</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Proof / Trust */}
            <div className="bg-honey-100 p-6 rounded-2xl mt-10">
              <h3 className="font-serif font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-sm text-gray-700">If you're not completely satisfied with your honey, let us know within 30 days for a full refund.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Wholesale</option>
                    <option>Press/Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full py-4 bg-gray-900 hover:bg-honey-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
