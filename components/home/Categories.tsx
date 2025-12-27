import Link from 'next/link';
import { FiMapPin, FiCoffee, FiCamera, FiCompass } from 'react-icons/fi';
import { GiElephant, GiTempleGate } from 'react-icons/gi';

const categories = [
  {
    name: 'Destinations',
    slug: 'destinations',
    icon: FiMapPin,
    description: 'Beautiful places to visit',
  },
  {
    name: 'Culture',
    slug: 'culture',
    icon: GiTempleGate,
    description: 'Rich heritage & traditions',
  },
  {
    name: 'Food',
    slug: 'food',
    icon: FiCoffee,
    description: 'Delicious local cuisine',
  },
  {
    name: 'Adventure',
    slug: 'adventure',
    icon: FiCompass,
    description: 'Thrilling experiences',
  },
  {
    name: 'Wildlife',
    slug: 'wildlife',
    icon: GiElephant,
    description: 'Amazing fauna & flora',
  },
  {
    name: 'Photography',
    slug: 'photography',
    icon: FiCamera,
    description: 'Capture the beauty',
  },
];

// Helper function to get category colors
const getCategoryColor = (index: number) => {
  const colors = [
    'linear-gradient(135deg, #3b82f6, #06b6d4)', // Blue to Cyan
    'linear-gradient(135deg, #a855f7, #ec4899)', // Purple to Pink
    'linear-gradient(135deg, #f97316, #ef4444)', // Orange to Red
    'linear-gradient(135deg, #10b981, #059669)', // Green to Emerald
    'linear-gradient(135deg, #eab308, #f59e0b)', // Yellow to Amber
    'linear-gradient(135deg, #6366f1, #3b82f6)', // Indigo to Blue
  ];
  return colors[index % colors.length];
};

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover Sri Lanka through different perspectives and interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: getCategoryColor(index),
                }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90">{category.description}</p>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
