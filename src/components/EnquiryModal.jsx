import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    guests: '2 Guests',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Reset form state after delay
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0b1a2c]">
              Enquiry Submitted!
            </h3>
            <p className="text-slate-600 text-sm max-w-xs mx-auto">
              Thank you for contacting Ceylon One Villas. Our concierge team will reach out to you within 2 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[#c6a258] text-xs font-bold uppercase tracking-widest block">
                Bespoke Concierge
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#0b1a2c]">
                Plan Your Luxury Stay
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Fill in your details below to reserve your private beachfront villa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c6a258] focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c6a258] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="tel" 
                      required 
                      placeholder="+94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c6a258] focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Check-in Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="date" 
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c6a258] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Guests</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c6a258] focus:border-transparent text-sm bg-white"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5+ VIP Suite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Special Requests / Notes</label>
                <textarea 
                  rows="3"
                  placeholder="Tell us about special arrangements, airport transfers, or dietary preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c6a258] focus:border-transparent text-sm"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0b1a2c] text-[#c6a258] hover:bg-[#c6a258] hover:text-[#0b1a2c] text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md mt-2 cursor-pointer"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
