import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Top Destinations in Sri Lanka",
  description:
    "Discover the best places to visit in Sri Lanka - from ancient cities to pristine beaches, tea plantations to wildlife sanctuaries",
};

const destinations = [
  {
    name: "Sigiriya",
    description:
      "Ancient rock fortress and UNESCO World Heritage Site with stunning frescoes and panoramic views",
    image:
      "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Cultural Triangle",
    highlights: ["Lion Rock", "Ancient Palace", "Mirror Wall", "Water Gardens"],
  },
  {
    name: "Ella",
    description:
      "Picturesque hill country town famous for hiking trails, tea plantations, and the Nine Arch Bridge",
    image:
      "https://images.unsplash.com/photo-1550679193-d8ec2f2c3a25?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Hill Country",
    highlights: [
      "Little Adams Peak",
      "Nine Arch Bridge",
      "Ella Rock",
      "Tea Plantations",
    ],
  },
  {
    name: "Galle",
    description:
      "Historic coastal city with a well-preserved Dutch fort, cobblestone streets, and colonial architecture",
    image:
      "https://images.unsplash.com/photo-1566838345788-db81125cef85?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Southern Coast",
    highlights: ["Galle Fort", "Lighthouse", "Dutch Museums", "Beach Cafes"],
  },
  {
    name: "Kandy",
    description:
      "Sacred city home to the Temple of the Tooth Relic, cultural capital surrounded by misty mountains",
    image:
      "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Central Province",
    highlights: [
      "Temple of Tooth",
      "Royal Botanical Gardens",
      "Kandy Lake",
      "Cultural Shows",
    ],
  },
  {
    name: "Yala National Park",
    description:
      "Premier wildlife destination with the highest leopard density in the world and diverse wildlife",
    image:
      "https://images.unsplash.com/photo-1621847473222-d85c022cbf07?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Southern Province",
    highlights: ["Leopard Safari", "Elephants", "Sloth Bears", "Bird Watching"],
  },
  {
    name: "Mirissa",
    description:
      "Stunning beach town perfect for whale watching, surfing, and enjoying pristine coastal beauty",
    image:
      "https://images.unsplash.com/photo-1653959699604-1eb000740b57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Southern Coast",
    highlights: ["Whale Watching", "Beach Paradise", "Surfing", "Coconut Hill"],
  },
  {
    name: "Anuradhapura",
    description:
      "Ancient capital with massive dagobas, sacred Bodhi tree, and remarkable archaeological ruins",
    image:
      "https://images.unsplash.com/photo-1663403766626-f4c961f66d39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "North Central",
    highlights: [
      "Sacred Bodhi Tree",
      "Ruwanwelisaya",
      "Jetavanaramaya",
      "Ancient Ruins",
    ],
  },
  {
    name: "Nuwara Eliya",
    description:
      'Cool climate hill station known as "Little England" with tea estates and colonial architecture',
    image:
      "https://images.unsplash.com/photo-1656497107000-d0859a4017ee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Hill Country",
    highlights: [
      "Tea Estates",
      "Gregory Lake",
      "Victoria Park",
      "Horton Plains",
    ],
  },
  {
    name: "Polonnaruwa",
    description:
      "Medieval capital showcasing well-preserved ruins, intricate stone carvings, and ancient temples",
    image:
      "https://images.unsplash.com/photo-1653151106731-734392b98b24?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "North Central",
    highlights: ["Gal Vihara", "Royal Palace", "Parakrama Samudra", "Vatadage"],
  },
  {
    name: "Arugam Bay",
    description:
      "World-renowned surfing destination with laid-back vibes and beautiful beaches",
    image:
      "https://images.unsplash.com/photo-1503384861219-7f20f2f111cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Eastern Coast",
    highlights: [
      "Surfing Waves",
      "Beach Culture",
      "Wildlife Safari",
      "Sunset Views",
    ],
  },
  {
    name: "Dambulla",
    description:
      "Magnificent cave temple complex with ancient Buddha statues and vibrant frescoes",
    image:
      "https://images.unsplash.com/photo-1586846288010-25744d79a132?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Cultural Triangle",
    highlights: [
      "Cave Temples",
      "Golden Temple",
      "Buddha Statues",
      "Ancient Frescoes",
    ],
  },
  {
    name: "Trincomalee",
    description:
      "Pristine beaches, natural harbor, and excellent snorkeling and diving opportunities",
    image:
      "https://images.unsplash.com/photo-1694869248420-4eb6d96a3bf2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Eastern Coast",
    highlights: [
      "Nilaveli Beach",
      "Pigeon Island",
      "Koneswaram Temple",
      "Whale Watching",
    ],
  },
];

export default function DestinationsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1613693699413-7dde0260f437?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sri Lanka Destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Explore Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover the island's most breathtaking destinations
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
            Top Destinations in Sri Lanka
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl">
            From ancient wonders to tropical paradises, Sri Lanka offers diverse
            experiences for every traveler. Explore our curated list of
            must-visit destinations across the island.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {destination.region}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                    <FiMapPin size={16} className="text-primary-600" />
                    Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link to search */}
                <Link
                  href={`/blog?search=${destination.name.toLowerCase()}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Read Articles
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Plan Your Perfect Sri Lankan Adventure
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Need help planning your itinerary? Check out our comprehensive
            travel guides and tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-primary-600 hover:bg-neutral-100 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse All Articles
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/30"
            >
              Get Travel Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
