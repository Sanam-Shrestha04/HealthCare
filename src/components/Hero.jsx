import { useState } from "react";
import { Calendar, Award, Users, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl animate-float animation-delay-400"></div>

        <div className="container-custom py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-block">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
                  ✨ Welcome to HealthCare+
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Health,
                <br />
                Our <span className="gradient-text">Priority</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class healthcare with our team of expert
                doctors and state-of-the-art facilities. Your wellness journey
                starts here.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="btn-secondary"
                >
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
                  <Users className="text-primary-500 mx-auto mb-2" size={32} />
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-gray-600 text-sm">Expert Doctors</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in animation-delay-200">
                  <Award className="text-accent-500 mx-auto mb-2" size={32} />
                  <div className="text-3xl font-bold text-accent-600">10k+</div>
                  <div className="text-gray-600 text-sm">Happy Patients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in animation-delay-400">
                  <Heart className="text-purple-500 mx-auto mb-2" size={32} />
                  <div className="text-3xl font-bold text-purple-600">25+</div>
                  <div className="text-gray-600 text-sm">Specialties</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&h=700&fit=crop"
                  alt="Healthcare Professional"
                  className="rounded-3xl shadow-2xl object-cover w-full h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl animate-float animation-delay-600 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💚</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">24/7 Support</div>
                    <div className="text-gray-600 text-sm">
                      Always here for you
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Hero;
