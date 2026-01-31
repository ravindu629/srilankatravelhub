import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Destinations", href: "/destinations" },
      { name: "Blog", href: "/blog" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    categories: [
      { name: "Culture", href: "/category/culture" },
      { name: "Food", href: "/category/food" },
      { name: "Adventure", href: "/category/adventure" },
      { name: "Wildlife", href: "/category/wildlife" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Sri Lanka Travel Hub
            </h3>
            <p className="text-neutral-400 mb-4">
              Your ultimate guide to discovering the pearl of the Indian Ocean.
              Explore stunning destinations, rich culture, and unforgettable
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585913333335"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/srilankatravelhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.youtube.com/@SriLankaTravelHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Legal</h4>
            <ul className="space-y-2 mb-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div className="pt-4 border-t border-neutral-800">
              <h5 className="font-semibold mb-2">Contact Us</h5>
              <a
                href="mailto:ravinduwjerathne@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors text-sm"
              >
                ravinduwjerathne@gmail.com
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} Sri Lanka Travel Hub. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm">
            Made with ❤️ for travelers exploring Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
