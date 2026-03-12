import { Heart, Leaf, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-honey-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1587049352847-4d4b12734185?q=80&w=2070&auto=format&fit=crop" 
            alt="Beekeeper" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl text-honey-100 leading-relaxed">
            A family tradition of sustainable beekeeping, dedicated to bringing you the purest raw honey nature has to offer.
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1587049352851-8d4e89134d4d?q=80&w=1000&auto=format&fit=crop" 
                alt="Beekeeper inspecting hive" 
                className="rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Who Produces The Honey?</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Nectar & Hive was founded by three generations of passionate beekeepers. We believe that the best honey comes from happy bees foraging in pristine environments.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Unlike commercial operations, we don't feed our bees sugar water or use harsh chemicals in our hives. We let the bees do what they do best, naturally.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-honey-500 pl-4">
                  <p className="text-3xl font-bold text-gray-900 mb-1">40+</p>
                  <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                </div>
                <div className="border-l-4 border-honey-500 pl-4">
                  <p className="text-3xl font-bold text-gray-900 mb-1">100%</p>
                  <p className="text-sm text-gray-500 font-medium">Family Owned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-honey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We never compromise on the purity of our honey or the welfare of our bees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center text-honey-600 mx-auto mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Sustainable Harvesting</h3>
              <p className="text-gray-600">
                We only harvest surplus honey, ensuring the bees have plenty of their own food to survive the winter. Our practices support local ecosystems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center text-honey-600 mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Unprocessed & Raw</h3>
              <p className="text-gray-600">
                Our honey is never heated above hive temperature and is only coarsely strained to retain natural pollen, propolis, and enzymes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center text-honey-600 mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                We partner with local farmers to place our hives on organic lands, promoting pollination and supporting sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-honey-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Where Our Bees Roam</h2>
              <p className="text-honey-100 mb-6 text-lg leading-relaxed">
                Our hives are located deep within protected, pesticide-free wildflower meadows and ancient forests. 
              </p>
              <p className="text-honey-100 text-lg leading-relaxed">
                This pristine environment ensures our bees gather nectar from the cleanest sources, resulting in honey that is truly organic and free from agricultural chemicals.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop" 
                alt="Wildflower meadow" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
