import { useState } from "react";
import { CheckCircle, Calendar, Clock, User } from "lucide-react";
import Navbar from "../components/Navbar";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      doctor: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Book Your Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred doctor and schedule a visit at your
              convenience
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Doctors List - 3 columns */}
            <div className="lg:col-span-3">
              <Doctors showFilter={true} />
            </div>

            {/* Booking Form - 2 columns */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="bg-white rounded-3xl shadow-2xl p-8 animate-scale-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <Calendar className="text-primary-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Appointment Form
                    </h2>
                  </div>

                  {success && (
                    <div className="bg-accent-50 border border-accent-200 text-accent-800 px-6 py-4 rounded-2xl mb-6 flex items-center gap-3 animate-slide-down">
                      <CheckCircle size={24} />
                      <span className="font-semibold">
                        Appointment booked successfully!
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700 flex items-center gap-2">
                        <User size={16} /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="input"
                        placeholder="+1 (234) 567-8900"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700 flex items-center gap-2">
                          <Calendar size={16} /> Date *
                        </label>
                        <input
                          type="date"
                          required
                          className="input"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700 flex items-center gap-2">
                          <Clock size={16} /> Time *
                        </label>
                        <input
                          type="time"
                          required
                          className="input"
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Select Doctor *
                      </label>
                      <select
                        required
                        className="input"
                        value={formData.doctor}
                        onChange={(e) =>
                          setFormData({ ...formData, doctor: e.target.value })
                        }
                      >
                        <option value="">Choose your doctor</option>
                        <option>Dr. Sarah Johnson - Cardiology</option>
                        <option>Dr. Michael Chen - Pediatrics</option>
                        <option>Dr. Emily Williams - Neurology</option>
                        <option>Dr. James Rodriguez - Orthopedics</option>
                        <option>Dr. Lisa Thompson - Dermatology</option>
                        <option>Dr. David Johnson - Cardiology</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        rows="3"
                        className="input resize-none"
                        placeholder="Tell us about your symptoms or concerns..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="btn-primary w-full mt-6"
                    >
                      Book Appointment Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Appointment;
