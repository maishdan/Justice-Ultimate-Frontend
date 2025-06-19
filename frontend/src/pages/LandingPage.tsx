// src/pages/LandingPage.tsx
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-950 to-black text-white">
      {/* Hero Section */}
      <motion.section
        className="text-center py-32 px-6 md:px-20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Drive Your </span>
          <span className="text-blue-400">Dream Today</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          🚗 Trusted globally, Justice Ultimate Automobiles offers world-class car rental, luxury vehicle buying, and easy appointment booking services to customers across all continents.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/register">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">Get Started</Button>
          </Link>
          <Link to="/vehicle-catalogue">
            <Button variant="outline" size="lg">Explore Cars</Button>
          </Link>
        </div>
      </motion.section>

      {/* Features Section with Hover Pop */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-yellow-400">Why Choose Us?</h3>
        <p className="max-w-3xl mx-auto text-gray-300 mb-12">
          We redefine excellence in the global automotive space by offering futuristic car leasing, intelligent recommendations, secure booking with biometric verification, and carbon-neutral delivery solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "🌍 Global Reach", desc: "Serving customers across Africa, Europe, Asia, and the Americas with seamless online booking." },
            { title: "🔐 Security First", desc: "Encrypted transactions, 2FA login, and verified vendor listings to keep your data and choices safe." },
            { title: "🚘 Premium Fleet", desc: "Access luxury cars, electric vehicles, commercial vans, and rare vintage collections all in one platform." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-800/60 p-6 rounded-xl shadow-lg transition-transform duration-300"
            >
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-t from-blue-950 to-blue-900 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Drive into the Future?</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-300">
          Join thousands globally who rely on Justice Ultimate Automobiles for reliability, luxury, and innovation.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-400">Join Now</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 md:px-20 bg-black text-white">
        <h3 className="text-3xl font-bold text-center mb-12">Explore Our Expertise</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[{
            icon: "🚗", title: "Luxury Car Rentals", desc: "Choose from our fleet of high-end cars for business or leisure travel."
          }, {
            icon: "🛠️", title: "Auto Servicing & Repair", desc: "Certified technicians offering routine maintenance and diagnostics."
          }, {
            icon: "📦", title: "Vehicle Delivery & Logistics", desc: "We handle global shipping and secure delivery of all vehicle types."
          }, {
            icon: "💼", title: "Corporate Fleet Management", desc: "Custom solutions for businesses needing efficient vehicle oversight."
          }, {
            icon: "📝", title: "Smart Car Booking", desc: "Use our intelligent booking system with real-time availability and support."
          }, {
            icon: "🔍", title: "Vehicle Inspection & History", desc: "Detailed reports and checks before every sale to ensure quality."
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl shadow-lg bg-blue-800/70 hover:ring-2 hover:ring-yellow-300 transition-all ${item.title.includes("Fleet") ? "border border-yellow-400" : ""}`}
            >
              <h4 className="text-xl font-bold mb-2">{item.icon} {item.title}</h4>
              <p className="text-sm text-gray-200">{item.desc}</p>
              <Link to="/services" className="inline-block mt-3 text-yellow-400 hover:underline">Learn More →</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-12 px-6 md:px-20 text-gray-400">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h5 className="font-semibold text-white mb-2">Justice Ultimate Automobiles</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Our Services</h5>
            <ul>
              <li>Vehicle Catalogue</li>
              <li>Car Booking</li>
              <li>Vehicle Insurance</li>
              <li>Auto Consultations</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Legal</h5>
            <ul>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Connect With Us</h5>
            <ul>
              <li>Email: info@justiceauto.com</li>
              <li>Phone: +254 712 345 678</li>
              <li>WhatsApp Support</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs mt-8">&copy; 2025 Justice Ultimate Automobiles. All rights reserved.</div>
      </footer>
    </div>
  );
}
