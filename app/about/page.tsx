import { Metadata } from 'next';
import Image from 'next/image';
import { FiMail, FiMapPin } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Sri Lanka Travel Hub and our mission to showcase the beauty of this incredible island',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="About Explore Sri Lanka"
          fill
          className="object-cover"
        />
        <div className="gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Passionate about sharing the wonders of Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                Welcome to Sri Lanka Travel Hub, your ultimate guide to discovering the pearl of the Indian Ocean. 
                Born from a deep love for this beautiful island nation, our blog aims to inspire travelers from 
                around the world to experience the magic of Sri Lanka.
              </p>
              <p>
                What started as a personal travel journal has grown into a comprehensive resource for anyone 
                interested in exploring Sri Lanka's diverse landscapes, rich cultural heritage, delicious cuisine, 
                and warm hospitality. From the misty tea plantations of the hill country to the pristine beaches 
                of the southern coast, we've explored every corner of this incredible island.
              </p>
              <p>
                Our team consists of passionate travelers, local experts, and photographers who are dedicated 
                to providing authentic, detailed, and inspiring content. We believe that travel is about more 
                than just visiting places – it's about connecting with cultures, understanding histories, and 
                creating meaningful experiences.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-700">
                  To provide comprehensive, authentic, and inspiring travel content that helps visitors 
                  make the most of their Sri Lankan adventure while promoting sustainable and responsible tourism.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-700">
                  To become the most trusted and comprehensive resource for Sri Lankan travel, 
                  inspiring a million travelers to discover the beauty, culture, and warmth of this magnificent island.
                </p>
              </div>
            </div>
          </section>

          {/* What We Cover */}
          <section className="mb-16">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-8 text-center">
              What We Cover
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Destinations', description: 'Hidden gems and popular attractions across the island' },
                { title: 'Culture & Heritage', description: 'Ancient temples, traditions, and festivals' },
                { title: 'Food & Cuisine', description: 'Traditional recipes and local culinary experiences' },
                { title: 'Adventure', description: 'Hiking, surfing, and thrilling activities' },
                { title: 'Wildlife', description: 'Safaris, elephants, and natural wonders' },
                { title: 'Travel Tips', description: 'Practical advice for planning your journey' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Trust Us */}
          <section className="mb-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">
              Why Trust Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">✓ Local Expertise</h3>
                <p className="text-white/90">
                  Our team includes Sri Lankan locals who know the island inside out
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">✓ First-Hand Experience</h3>
                <p className="text-white/90">
                  Every destination we write about has been personally visited and explored
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">✓ Regular Updates</h3>
                <p className="text-white/90">
                  We continuously update our content to reflect the latest information
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">✓ Honest Reviews</h3>
                <p className="text-white/90">
                  We provide unbiased opinions and recommendations you can trust
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <FiMail />
                <span>Contact Us</span>
              </a>
              <a
                href="#"
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <FiMapPin />
                <span>Find Us</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
