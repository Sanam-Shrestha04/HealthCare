import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <Heart className="text-primary-400" size={36} />
                <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl"></div>
              </div>
              <span className="text-2xl font-bold">HealthCare+</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted healthcare partner for a healthier tomorrow. Quality
              care, compassionate service.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all"></span>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all"></span>
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("doctors")}
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all"></span>
                  Doctors
                </button>
              </li>
              <li>
                <Link
                  to="/appointment"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all"></span>
                  Book Appointment
                </Link>
              </li>
              <li>
                <a
                  href="#footer"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <span
                    id="footer"
                    className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all"
                  ></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                "General Checkup",
                "Cardiology",
                "Pediatrics",
                "Emergency Care",
                "Telemedicine",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Samakhushi, Nepal
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-primary-400" />
                <a
                  href="tel:+977 12345678"
                  className="hover:text-primary-400 transition-colors"
                >
                  +977 12345678
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-primary-400" />
                <a
                  href="mailto:info@healthcare.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@healthcare.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-gray-500"
                />
                <button className="bg-primary-500 hover:bg-primary-600 p-2 rounded-lg transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2025 HealthCare+. All rights reserved. Made with ❤️ for
            better health.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-primary-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
