import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        doctor: "",
      });
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative animate-scale-in shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:bg-gray-100 p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {success ? (
          <div className="text-center py-12 animate-scale-in">
            <CheckCircle className="text-accent-500 mx-auto mb-6" size={80} />
            <h3 className="text-3xl font-bold mb-3 text-gray-900">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600">
              We'll contact you shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">
                Book Appointment
              </h2>
              <p className="text-gray-600">
                Fill in your details to schedule a visit
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="input"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="input"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  required
                  className="input"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
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

              <select
                required
                className="input"
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({ ...formData, doctor: e.target.value })
                }
              >
                <option value="">Select Doctor</option>
                <option>Dr. Sarah Johnson - Cardiology</option>
                <option>Dr. Michael Chen - Pediatrics</option>
                <option>Dr. Emily Williams - Neurology</option>
                <option>Dr. James Rodriguez - Orthopedics</option>
                <option>Dr. Lisa Thompson - Dermatology</option>%
                <option>Dr. David Johnson - Cardiology</option>
              </select>

              <button
                onClick={handleSubmit}
                className="btn-primary w-full mt-6"
              >
                Confirm Booking
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
