import { ArrowRight, CheckCircle2, Star, ShieldCheck, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-honey-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587049352847-4d4b12734185?q=80&w=2070&auto=format&fit=crop" 
            alt="Golden raw honey dripping" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-honey-100 via-honey-100/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-honey-200 text-honey-900 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-honey-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-honey-600"></span>
              </span>
              Limited Harvest Batch Available
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Nature's Purest <span className="text-honey-600">Liquid Gold</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              100% pure, raw, and unfiltered honey. Harvested sustainably from wild forests. No additives, no processing—just as nature intended.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-honey-600 hover:bg-honey-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-honey-600/30">
                Shop Raw Honey <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full transition-all border border-gray-200">
                Discover Our Story
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> Organic
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> Unpasteurized
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> Cruelty-Free
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 bg-honey-50 rounded-full flex items-center justify-center text-honey-600 mb-2">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-gray-900">100% Organic</h3>
              <p className="text-sm text-gray-500">Certified organic forests</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 bg-honey-50 rounded-full flex items-center justify-center text-honey-600 mb-2">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-gray-900">Raw & Pure</h3>
              <p className="text-sm text-gray-500">Never heated or filtered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 bg-honey-50 rounded-full flex items-center justify-center text-honey-600 mb-2">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-gray-900">Health Boosting</h3>
              <p className="text-sm text-gray-500">Rich in antioxidants</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 bg-honey-50 rounded-full flex items-center justify-center text-honey-600 mb-2">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-gray-900">Premium Quality</h3>
              <p className="text-sm text-gray-500">Award-winning taste</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-honey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Bestselling Honey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the rich, complex flavors of our pure raw honey, harvested straight from the comb to your jar.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1587049352851-8d4e89134d4d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Raw Forest Honey" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  Bestseller
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">Raw Forest Honey</h3>
                  <span className="font-bold text-lg text-honey-700">$24.00</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">500g • Dark, rich, and robust flavor profile.</p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-honey-500 text-honey-500" />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">(128 reviews)</span>
                </div>
                <button className="w-full py-3 bg-gray-900 hover:bg-honey-600 text-white font-semibold rounded-xl transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1000&auto=format&fit=crop" 
                  alt="Wildflower Honey" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">Wildflower Honey</h3>
                  <span className="font-bold text-lg text-honey-700">$38.00</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">1kg • Light, floral, and delicately sweet.</p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-honey-500 text-honey-500" />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">(94 reviews)</span>
                </div>
                <button className="w-full py-3 bg-gray-900 hover:bg-honey-600 text-white font-semibold rounded-xl transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1615486171448-4af6122624df?q=80&w=1000&auto=format&fit=crop" 
                  alt="Organic Honeycomb" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-honey-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Limited
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">Organic Honeycomb</h3>
                  <span className="font-bold text-lg text-honey-700">$29.00</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">350g • Pure honeycomb straight from the hive.</p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-honey-500 text-honey-500" />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">(56 reviews)</span>
                </div>
                <button className="w-full py-3 bg-gray-900 hover:bg-honey-600 text-white font-semibold rounded-xl transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/shop" className="inline-flex items-center gap-2 text-honey-700 font-bold hover:text-honey-800 transition-colors">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Honey dripping from dipper" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 bg-honey-100 p-6 rounded-2xl shadow-lg hidden md:block">
                  <p className="font-serif text-2xl font-bold text-honey-800 mb-1">100%</p>
                  <p className="text-sm font-medium text-gray-700">Natural Sugar Alternative</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Why Choose Raw Honey?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Unlike commercial honey which is pasteurized and filtered, our raw honey retains all its natural enzymes, vitamins, and minerals.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-honey-100 rounded-full flex items-center justify-center text-honey-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Immunity Booster</h4>
                    <p className="text-gray-600">Packed with antioxidants and antibacterial properties that help strengthen your immune system naturally.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-honey-100 rounded-full flex items-center justify-center text-honey-600">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Soothes Digestion</h4>
                    <p className="text-gray-600">Contains beneficial prebiotics that nourish good bacteria in the gut, promoting healthy digestion.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-honey-100 rounded-full flex items-center justify-center text-honey-600">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Natural Energy</h4>
                    <p className="text-gray-600">A perfect blend of fructose and glucose provides a sustained energy boost without the sugar crash.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-honey-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Loved by Honey Enthusiasts</h2>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-honey-400 text-honey-400" />
              ))}
            </div>
            <p className="mt-4 text-honey-100">Over 10,000+ happy customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-honey-400 text-honey-400" />
                ))}
              </div>
              <p className="text-lg mb-6 font-medium leading-relaxed">"This is the best honey I've ever tasted. You can actually taste the floral notes. I use it every morning in my tea and oatmeal."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=32" alt="Sarah J." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Sarah J.</p>
                  <p className="text-sm text-honey-200">Verified Buyer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-honey-400 text-honey-400" />
                ))}
              </div>
              <p className="text-lg mb-6 font-medium leading-relaxed">"I bought the raw honeycomb and it was incredible. It's so hard to find real, unprocessed honey these days. Highly recommend!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Michael T." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Michael T.</p>
                  <p className="text-sm text-honey-200">Verified Buyer</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-honey-400 text-honey-400" />
                ))}
              </div>
              <p className="text-lg mb-6 font-medium leading-relaxed">"As a health coach, I only recommend the purest ingredients to my clients. Nectar & Hive is my go-to brand for natural sweeteners."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=44" alt="Emma W." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Emma W.</p>
                  <p className="text-sm text-honey-200">Nutritionist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-honey-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#hex-pattern)" />
            <defs>
              <pattern id="hex-pattern" width="20" height="34.64" patternUnits="userSpaceOnUse">
                <path d="M10,0 L20,5.77 L20,17.32 L10,23.09 L0,17.32 L0,5.77 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M10,34.64 L20,28.87 L20,17.32 L10,23.09 L0,17.32 L0,28.87 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Taste the Pure Difference Today</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of health-conscious customers who have switched to our 100% pure, raw honey.
          </p>
          <Link to="/shop" className="inline-flex justify-center items-center gap-2 px-10 py-5 bg-honey-600 hover:bg-honey-700 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-honey-600/30">
            Shop Now & Get 10% Off Your First Order
          </Link>
          <p className="mt-6 text-sm text-gray-500 font-medium">Free shipping on orders over $50. 100% satisfaction guarantee.</p>
        </div>
      </section>
    </div>
  );
}
