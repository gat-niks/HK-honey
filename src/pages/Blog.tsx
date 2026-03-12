import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: '10 Health Benefits of Raw Honey You Need to Know',
    excerpt: 'Discover why switching from processed sugar to raw honey can boost your immunity, soothe digestion, and improve your overall health.',
    image: 'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?q=80&w=1000&auto=format&fit=crop',
    date: 'Oct 12, 2023',
    author: 'Emma Woods',
    category: 'Health & Wellness'
  },
  {
    id: 2,
    title: 'Honey vs Sugar: Which is Healthier?',
    excerpt: 'A deep dive into the nutritional differences between natural raw honey and refined white sugar, and how your body processes them.',
    image: 'https://images.unsplash.com/photo-1587049352847-4d4b12734185?q=80&w=1000&auto=format&fit=crop',
    date: 'Sep 28, 2023',
    author: 'Dr. Sarah Jenkins',
    category: 'Nutrition'
  },
  {
    id: 3,
    title: 'How to Identify Pure Raw Honey from Fake Honey',
    excerpt: 'Don\'t be fooled by supermarket syrups. Learn the simple home tests to verify if your honey is 100% pure and unadulterated.',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89134d4d?q=80&w=1000&auto=format&fit=crop',
    date: 'Sep 15, 2023',
    author: 'Mark Beekeeper',
    category: 'Guides'
  },
  {
    id: 4,
    title: 'The Role of Bees in Our Ecosystem',
    excerpt: 'Why saving the bees is crucial for our food supply and how sustainable beekeeping practices make a difference.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
    date: 'Aug 30, 2023',
    author: 'Emma Woods',
    category: 'Sustainability'
  }
];

export default function Blog() {
  return (
    <div className="bg-honey-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">The Honey Journal</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights on health, sustainability, and everything you need to know about natural raw honey.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md mb-16 group cursor-pointer">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-72 lg:h-auto overflow-hidden">
              <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-honey-600 font-bold mb-4 uppercase tracking-wider">
                <span>{posts[0].category}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-honey-600 transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {posts[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {posts[0].date}
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-honey-600 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-honey-700 shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-honey-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </div>
                  <span className="text-honey-600 font-semibold group-hover:underline">Read more</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-honey-200 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">Get Honey Facts & Offers</h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">Subscribe to our newsletter for the latest articles on health, wellness, and exclusive discounts on our raw honey.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-honey-500 outline-none"
            />
            <button 
              type="button"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
