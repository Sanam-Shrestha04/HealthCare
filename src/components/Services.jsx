import {
  Stethoscope,
  Activity,
  Users,
  Shield,
  Heart,
  Clock,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Checkup",
      desc: "Comprehensive health examinations and preventive care",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Activity,
      title: "Cardiology",
      desc: "Advanced heart and cardiovascular care",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Pediatrics",
      desc: "Specialized healthcare for children",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Emergency Care",
      desc: "24/7 emergency medical services",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Heart,
      title: "Mental Health",
      desc: "Psychological counseling and therapy",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Clock,
      title: "Telemedicine",
      desc: "Online consultations from anywhere",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive healthcare services tailored to meet your every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card group animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.desc}
              </p>
              <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors flex items-center gap-2 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
