import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Croissant,
  Star,
  Heart,
  Sparkles,
  HandHeart,
  Coffee,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-md bg-transparent text-white">
        <div className="text-xl font-bold">Crossaint</div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="hover:text-blue-600 active:text-blue-800 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-600 active:text-blue-800 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-blue-600 active:text-blue-800 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                size={24}
                className="transition-transform duration-300 ease-in-out"
              />
            ) : (
              <Menu
                size={24}
                className="transition-transform duration-300 ease-in-out"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`
          absolute top-16 left-0 w-full z-40 bg-black/80 backdrop-blur-sm
          px-6 py-4 space-y-2 md:hidden
          overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <a
          href="#"
          className="block text-white hover:text-blue-600 active:text-blue-800 transition-colors duration-200 py-2"
        >
          Home
        </a>
        <a
          href="#"
          className="block text-white hover:text-blue-600 active:text-blue-800 transition-colors duration-200 py-2"
        >
          About
        </a>
        <a
          href="#"
          className="block text-white hover:text-blue-600 active:text-blue-800 transition-colors duration-200 py-2"
        >
          Contact
        </a>
      </div>

      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('./image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Baked Fresh Every Morning
            </h1>
            <p className="text-lg mb-8">
              Discover the flakiest, butteriest croissants in town. Made with
              love and tradition.
            </p>
            <a
              href="#"
              className="bg-blue-600 px-6 py-3 text-xl rounded-lg hover:bg-blue-700 transition"
            >
              Browse Menu
            </a>
          </div>
        </div>
      </section>
      {/* features section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">
            Discover why our croissants have become a local favorite.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Croissant className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Freshly Baked Daily</h3>
            <p className="text-gray-600">
              Every croissant is baked fresh every morning using traditional
              French techniques.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Ingredients</h3>
            <p className="text-gray-600">
              We use only the finest butter and organic flour for unmatched
              flavor and texture.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Heart className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Locally Loved</h3>
            <p className="text-gray-600">
              Trusted by our community and praised by loyal customers for years.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Star className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unique Flavors</h3>
            <p className="text-gray-600">
              From classic butter to chocolate almond, our rotating menu keeps
              things delicious.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <HandHeart className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Handcrafted with Care
            </h3>
            <p className="text-gray-600">
              Every pastry is shaped and folded by hand by skilled bakers.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Coffee className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Warm and Welcoming</h3>
            <p className="text-gray-600">
              Enjoy your croissant in a cozy setting with friendly service and
              great coffee.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-yellow-50 text-gray-800 py-12 px-4 md:px-8 border-t border-yellow-200">
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h4 className="text-2xl font-bold text-yellow-900 mb-4">
              🥐 Croissant
            </h4>
            <p className="text-sm text-yellow-800">
              Baked fresh every morning with love and butter. Taste the flakiest
              croissants in town.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-900 mb-4">Menu</h5>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Bakery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-900 mb-4">
              Customer Care
            </h5>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-900 mb-4">
              Stay in the Loop
            </h5>
            <form className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-white placeholder-gray-500 text-gray-800 border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-yellow-700">
          &copy; 2025 Croissant Bakery. Made with 🧈 and ❤️ in Bonjour city.
        </div>
      </footer>
    </>
  );
}

export default App;
