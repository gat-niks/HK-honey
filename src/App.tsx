import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Droplet } from 'lucide-react';
import { useState } from 'react';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-honey-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Droplet className="h-8 w-8 text-honey-600 fill-honey-500" />
              <span className="font-serif text-2xl font-bold text-gray-900">Nectar & Hive</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-honey-700 font-medium transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-honey-700 font-medium transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-honey-700 font-medium transition-colors">Our Story</Link>
            <Link to="/blog" className="text-gray-600 hover:text-honey-700 font-medium transition-colors">Journal</Link>
            <Link to="/contact" className="text-gray-600 hover:text-honey-700 font-medium transition-colors">Contact</Link>
            <button className="relative p-2 text-gray-600 hover:text-honey-700 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-honey-600 rounded-full">3</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button className="relative p-2 text-gray-600">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-honey-600 rounded-full">3</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-honey-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-honey-700 hover:bg-honey-50 rounded-md">Home</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-honey-700 hover:bg-honey-50 rounded-md">Shop</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-honey-700 hover:bg-honey-50 rounded-md">Our Story</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-honey-700 hover:bg-honey-50 rounded-md">Journal</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-honey-700 hover:bg-honey-50 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-honey-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Droplet className="h-8 w-8 text-honey-500 fill-honey-500" />
              <span className="font-serif text-2xl font-bold text-white">Nectar & Hive</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              100% pure raw honey harvested naturally with no additives, no sugar, and no processing. From our sustainable hives to your table.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-honey-400">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-honey-400 transition-colors">Raw Forest Honey</Link></li>
              <li><Link to="/shop" className="hover:text-honey-400 transition-colors">Wildflower Honey</Link></li>
              <li><Link to="/shop" className="hover:text-honey-400 transition-colors">Organic Honeycomb</Link></li>
              <li><Link to="/shop" className="hover:text-honey-400 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-honey-400">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-honey-400 transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="hover:text-honey-400 transition-colors">Health Benefits</Link></li>
              <li><Link to="/blog" className="hover:text-honey-400 transition-colors">Recipes</Link></li>
              <li><Link to="/contact" className="hover:text-honey-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-honey-400">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-honey-500"
              />
              <button 
                type="button"
                className="bg-honey-600 hover:bg-honey-500 text-gray-900 font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nectar & Hive. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-honey-50 text-gray-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
