import { useState } from "react";
import { Star, Calendar } from "lucide-react";

const Doctors = ({ showFilter = false }) => {
  const [filter, setFilter] = useState("All");

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      exp: "15 years",
      rating: 4.9,
      patients: "2000+",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatrics",
      exp: "12 years",
      rating: 4.8,
      patients: "1800+",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Neurology",
      exp: "18 years",
      rating: 5.0,
      patients: "2500+",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    },
    {
      name: "Dr. James Rodriguez",
      specialty: "Orthopedics",
      exp: "10 years",
      rating: 4.7,
      patients: "1500+",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Dermatology",
      exp: "14 years",
      rating: 4.9,
      patients: "2200+",
      img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400",
    },
    {
      name: "Dr. David Johnson",
      specialty: "Cardiology",
      exp: "20 years",
      rating: 5.0,
      patients: "3000+",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    },
  ];

  const specialties = ["All", ...new Set(doctors.map((d) => d.specialty))];
  const filtered =
    filter === "All" ? doctors : doctors.filter((d) => d.specialty === filter);

  return (
    <section id="doctors" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Meet Our Expert Doctors</h2>
          <p className="section-subtitle">
            Highly qualified professionals dedicated to your health and
            wellbeing
          </p>
        </div>

        {showFilter && (
          <div className="flex justify-center mb-12 gap-3 flex-wrap animate-fade-in">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setFilter(spec)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === spec
                    ? "bg-primary-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((doctor, idx) => (
            <div
              key={idx}
              className="card text-center group animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="font-bold text-sm">{doctor.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {doctor.name}
              </h3>
              <p className="text-primary-500 font-semibold mb-1">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                {doctor.exp} experience
              </p>
              <p className="text-gray-500 text-xs mb-6">
                {doctor.patients} patients treated
              </p>

              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Calendar size={18} />
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
