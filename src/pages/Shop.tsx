import { Star, Filter, ChevronDown, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Raw Forest Honey',
    price: 24.00,
    weight: '500g',
    rating: 5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89134d4d?q=80&w=1000&auto=format&fit=crop',
    description: 'Dark, rich, and robust flavor profile. Harvested from deep within protected organic forests.',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Wildflower Honey',
    price: 38.00,
    weight: '1kg',
    rating: 5,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1000&auto=format&fit=crop',
    description: 'Light, floral, and delicately sweet. A perfect everyday honey for tea and baking.',
    badge: null
  },
  {
    id: 3,
    name: 'Organic Honeycomb',
    price: 29.00,
    weight: '350g',
    rating: 5,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1615486171448-4af6122624df?q=80&w=1000&auto=format&fit=crop',
    description: 'Pure honeycomb straight from the hive. The most natural way to consume honey.',
    badge: 'Limited'
  },
  {
    id: 4,
    name: 'Acacia Honey',
    price: 22.00,
    weight: '500g',
    rating: 4,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?q=80&w=1000&auto=format&fit=crop',
    description: 'Very light color and mild taste. Stays liquid longer than other varieties.',
    badge: null
  },
  {
    id: 5,
    name: 'Manuka Blend',
    price: 45.00,
    weight: '250g',
    rating: 5,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1587049352847-4d4b12734185?q=80&w=1000&auto=format&fit=crop',
    description: 'Premium blend with high antibacterial properties. Perfect for wellness routines.',
    badge: 'Premium'
  },
  {
    id: 6,
    name: 'Honey Gift Set',
    price: 65.00,
    weight: '3 x 250g',
    rating: 5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89134d4d?q=80&w=1000&auto=format&fit=crop',
    description: 'A beautiful tasting set featuring our top three raw honey varieties.',
    badge: 'Gift Idea'
  }
];

export default function Shop() {
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="bg-honey-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Shop Pure Honey</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of 100% raw, unfiltered honey. Buy honey online direct from sustainable beekeepers.
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200 gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by:</span>
            <select className="bg-transparent border-none focus:ring-0 text-gray-900 font-semibold cursor-pointer">
              <option>All Products</option>
              <option>Raw Honey</option>
              <option>Honeycomb</option>
              <option>Gift Sets</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span className="font-medium">Sort by:</span>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-honey-500 focus:border-honey-500 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                    product.badge === 'Limited' ? 'bg-red-500 text-white' : 
                    product.badge === 'Premium' ? 'bg-gray-900 text-honey-400' :
                    'bg-honey-500 text-gray-900'
                  }`}>
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="font-bold text-xl text-honey-700">${product.price.toFixed(2)}</span>
                </div>
                
                <p className="text-sm text-gray-500 font-medium mb-3">{product.weight}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'fill-honey-500 text-honey-500' : 'fill-gray-200 text-gray-200'}`} 
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 flex-grow">{product.description}</p>
                
                <button className="w-full py-3 bg-gray-900 hover:bg-honey-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 mt-auto">
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
