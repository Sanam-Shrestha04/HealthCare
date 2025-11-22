import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false); // Close mobile menu

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
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-xl" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Heart
                className="text-primary-500 group-hover:scale-110 transition-transform duration-300"
                size={36}
              />
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:bg-primary-500/30 transition-all"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              HealthCare+
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Services
            </button>
            <a
              href="#doctors"
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Doctors
            </a>
            <Link to="/appointment" className="btn-primary">
              Book Appointment
            </Link>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <div className="space-y-2">
              <span
                className={`block w-7 h-0.5 bg-gray-700 transition-transform ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-gray-700 transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-gray-700 transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <div className="container-custom py-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 hover:text-primary-500 py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-primary-500 py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("doctors")}
              className="block w-full text-left text-gray-700 hover:text-primary-500 py-2"
            >
              Doctors
            </button>
            <Link
              to="/appointment"
              className="btn-primary block text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
            <button
              onClick={() => scrollToSection("footer")}
              className="block w-full text-left text-gray-700 hover:text-primary-500 py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
