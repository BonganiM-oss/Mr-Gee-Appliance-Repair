import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Screen, TransitionType, BookingFormData } from '../types';
import { 
  Calendar, Clock, MapPin, User, Phone, CheckCircle2, 
  Wrench, ShieldCheck, AlertCircle, ArrowRight, MessageSquare, 
  FileText, Check, Sparkles 
} from 'lucide-react';
import { COVERAGE_AREAS, POPULAR_BRANDS } from '../data/repairData';
import bookingBg from '../assets/images/booking_appointment_bg_1790255603679.jpg';

interface BookAppointmentScreenProps {
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
  initialState?: Partial<BookingFormData>;
}

const BOOKING_PARTICLES = [
  { size: 4, left: 14, delay: 0.2, duration: 8.5, color: 'bg-emerald-400' },
  { size: 5, left: 32, delay: 2.0, duration: 10.5, color: 'bg-blue-400' },
  { size: 3, left: 52, delay: 1.5, duration: 7.8, color: 'bg-cyan-300' },
  { size: 6, left: 68, delay: 3.2, duration: 11.2, color: 'bg-teal-300' },
  { size: 4, left: 84, delay: 0.9, duration: 9.0, color: 'bg-sky-300' },
];

export const BookAppointmentScreen: React.FC<BookAppointmentScreenProps> = ({ 
  onNavigate, 
  initialState 
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    appliance: initialState?.appliance || 'Fridge / Freezer (Double Door / Side-by-Side)',
    brand: initialState?.brand || 'Defy',
    model: '',
    issueDescription: '',
    symptoms: [],
    serviceDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'Morning (08:00 – 12:00)',
    isUrgent: initialState?.isUrgent || false,
    fullName: '',
    phone: '',
    streetAddress: '',
    suburb: initialState?.suburb || COVERAGE_AREAS[0],
    notes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const commonSymptomList = [
    'Not turning on / No power',
    'Tripping DB main breaker',
    'Not cooling or freezing',
    'Water pooling or leaking',
    'Loud banging or squeaking',
    'Not spinning or draining',
    'Error code on digital screen',
    'Gas smell or clicking'
  ];

  const toggleSymptom = (sym: string) => {
    if (formData.symptoms.includes(sym)) {
      setFormData({
        ...formData,
        symptoms: formData.symptoms.filter((s) => s !== sym)
      });
    } else {
      setFormData({
        ...formData,
        symptoms: [...formData.symptoms, sym]
      });
    }
  };

  const getApplianceQuote = (applianceName: string) => {
    const lower = applianceName.toLowerCase();
    if (lower.includes('fridge') || lower.includes('freezer')) {
      return {
        range: 'R550 – R1,150',
        parts: 'Refrigerant gas, defrost thermostat, compressor relay or fan motor',
        time: '1 to 2 hours'
      };
    }
    if (lower.includes('washing') || lower.includes('dryer')) {
      return {
        range: 'R450 – R980',
        parts: 'Drain pump, drive belt, shock absorbers, carbon brushes or door seal',
        time: '45 to 90 mins'
      };
    }
    if (lower.includes('tv')) {
      return {
        range: 'R650 – R1,400',
        parts: 'LED backlight array strips, power IC board or T-Con logic board',
        time: 'Same-day service'
      };
    }
    if (lower.includes('oven') || lower.includes('stove') || lower.includes('hob')) {
      return {
        range: 'R450 – R850',
        parts: 'Bake heating element, selector switch or thermostat',
        time: '1 hour'
      };
    }
    if (lower.includes('microwave')) {
      return {
        range: 'R350 – R650',
        parts: 'Magnetron, high-voltage diode, capacitor or door microswitch',
        time: '30 to 45 mins'
      };
    }
    if (lower.includes('cold room') || lower.includes('chiller')) {
      return {
        range: 'R950 – R2,200',
        parts: 'Commercial expansion valve, fan motor, contactor or solenoid',
        time: '2 to 3 hours'
      };
    }
    return {
      range: 'R450 – R950',
      parts: 'Genuine manufacturer OEM replacement components',
      time: '1 to 2 hours'
    };
  };

  const currentQuote = getApplianceQuote(formData.appliance);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `MRG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setBookingReference(refCode);
    setBookingConfirmed(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Book Appointment Hero Header with Animated Scheduling Background */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#071933] via-[#0D284C] to-[#123666] border-b border-blue-900/40">
        {/* Animated Background Image & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Ambient Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.5, 0.25],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-16 right-1/4 w-96 h-96 rounded-full bg-blue-500/25 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 0.95, 1.1],
              opacity: [0.2, 0.45, 0.2],
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl"
          />

          {/* Animated Zoom and Pan on Booking Appointment Background */}
          <motion.img 
            src={bookingBg} 
            alt="MR Gee Book Appointment Technician Dispatch" 
            referrerPolicy="no-referrer"
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -6, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full object-cover object-center lg:object-right opacity-30 sm:opacity-40 filter contrast-110 select-none"
          />

          {/* Floating Subtle Scheduling Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {BOOKING_PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: '105%', 
                  opacity: 0, 
                  scale: 0.8 
                }}
                animate={{ 
                  y: '-10%', 
                  opacity: [0, 0.85, 0.85, 0], 
                  scale: [0.8, 1.3, 0.7] 
                }}
                transition={{ 
                  duration: p.duration, 
                  repeat: Infinity, 
                  delay: p.delay, 
                  ease: "easeInOut" 
                }}
                className={`absolute bottom-0 w-1.5 h-1.5 rounded-full ${p.color} blur-[0.5px] pointer-events-none shadow-sm shadow-emerald-400`}
                style={{ left: `${p.left}%` }}
              />
            ))}
          </div>

          {/* Vignette Overlays that blend seamlessly into the blue */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071933] via-[#071933]/85 to-[#071933]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123666] via-transparent to-[#071933]/60" />
        </div>

        {/* Header content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-cyan-200 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md shadow-lg shadow-blue-950/50">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span className="uppercase tracking-wider">Book On-Site Technician</span>
            <span className="text-blue-300">•</span>
            <span className="text-emerald-300">Upfront Price Estimates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Schedule an{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-300">
              Appliance Diagnostic & Repair
            </span>
          </h1>

          <p className="text-blue-100 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Book a trusted repair technician to your home or shop in Kagiso, Johannesburg, Pretoria, West Rand & East Rand. R350 call-out fee is 100% credited towards the repair upon quote approval.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 backdrop-blur-md shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Same-day slots available
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
              6-month warranty included
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 backdrop-blur-md shadow-sm">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Prompt on-time arrival
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area - White and Blue Blending Gracefully */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {bookingConfirmed ? (
          /* Confirmation Success Card */
          <div className="bg-white border-2 border-blue-200 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200 text-slate-900">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                Booking Registered Successfully
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-1">
                Your Appointment is Confirmed!
              </h2>
              <div className="mt-3 inline-block bg-blue-100 border-2 border-blue-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono text-blue-900 font-bold">
                Reference Code: <span className="font-black text-blue-950">{bookingReference}</span>
              </div>
            </div>

            <div className="max-w-xl mx-auto bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 text-left space-y-3 text-xs sm:text-sm text-slate-800">
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-600 font-semibold">Customer Name:</span>
                <span className="text-slate-900 font-bold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-600 font-semibold">Contact Number:</span>
                <span className="text-slate-900 font-bold">{formData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-600 font-semibold">Appliance:</span>
                <span className="text-blue-900 font-bold">{formData.brand} - {formData.appliance}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-600 font-semibold">Appointment Date & Slot:</span>
                <span className="text-slate-900 font-bold">{formData.serviceDate} ({formData.timeSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 font-semibold">Service Address:</span>
                <span className="text-slate-900 font-bold text-right">{formData.streetAddress}, {formData.suburb}</span>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-xs text-slate-800 max-w-xl mx-auto space-y-1.5 text-left">
              <p className="font-bold flex items-center gap-1.5 text-blue-900">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Technician Dispatch Alert Generated:</span>
              </p>
              <p className="text-slate-700 font-medium">
                MR Gee has received your service booking for phone <strong>{formData.phone}</strong>.
              </p>
              <p className="text-slate-700 font-medium">
                ⚡ MR Gee will contact you via WhatsApp or phone call 30 minutes prior to arrival to confirm gate access and directions.
              </p>
            </div>

            {/* Strictly WhatsApp or Call only - NO emails */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/27623510025?text=${encodeURIComponent(`Hi MR Gee, I just booked appointment ${bookingReference} for my ${formData.brand} ${formData.appliance} on ${formData.serviceDate} (${formData.timeSlot}). Customer: ${formData.fullName} - Phone: ${formData.phone} at ${formData.streetAddress}, ${formData.suburb}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp With MR Gee</span>
              </a>

              <a
                href="tel:+27623510025"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call MR Gee Directly</span>
              </a>

              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  onNavigate('home', 'push');
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border-2 border-slate-300 font-bold text-sm shadow-xs transition-colors cursor-pointer"
              >
                Return Home
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Section Booking Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Friendly Senior & Direct Phone Assistance Bar */}
            <div className="lg:col-span-12 bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-blue-400/30">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white font-heading">
                    Prefer booking by phone or WhatsApp? Anyone can just call us!
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Elderly folks or anyone who prefers talking to a real technician can call MR Gee directly. We schedule your slot immediately.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href="tel:+27623510025"
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-800" />
                  <span>Call MR Gee</span>
                </a>
                <a
                  href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20would%20like%20to%20book%20an%20appliance%20repair%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            
            {/* Left Form (8 Cols) - Solid Pristine White Card with High-Contrast Typography */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-8 bg-white border-2 border-blue-200/90 rounded-3xl p-6 sm:p-10 shadow-xl text-slate-900">
              
              {/* Section 1: Appliance & Fault */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b-2 border-slate-200 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    1
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                    Appliance & Fault Information
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                        Appliance Type *
                      </label>
                      <select
                        required
                        value={formData.appliance}
                        onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                        className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                      >
                        <option>Fridge / Freezer (Double Door / Side-by-Side)</option>
                        <option>Washing Machine (Front Loader)</option>
                        <option>Washing Machine (Top Loader)</option>
                        <option>Tumble Dryer</option>
                        <option>LED / QLED / Smart TV</option>
                        <option>Thermo-fan Oven / Stove / Hob</option>
                        <option>Microwave Oven</option>
                        <option>Commercial Cold Room / Chiller</option>
                        <option>Dishwasher</option>
                        <option>Other Domestic Appliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                        Brand *
                      </label>
                      <select
                        required
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                      >
                        {POPULAR_BRANDS.map((brand, idx) => (
                          <option key={idx} value={brand}>{brand}</option>
                        ))}
                        <option value="Other">Other Brand</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Instant Price & Quote Box right in Booking */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200 pb-3">
                      <div>
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                          Instant Estimated Quote for {formData.appliance.split('(')[0].trim()}:
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-blue-900 font-heading">
                          {currentQuote.range}
                        </span>
                      </div>
                      <div className="text-xs sm:text-right">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                          R350 Call-Out 100% Credited to Repair
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 pt-1 font-medium">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Includes labor, diagnostic testing & warranty</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Typical turnaround: <strong className="text-slate-900">{currentQuote.time}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>6-Month written invoice guarantee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
                        <span>Pay on completion (Card, Cash or Instant EFT)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                      Model / Serial Number (Optional if known)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Defy DAD238 or Samsung WW80TA"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  {/* Common symptoms quick tags */}
                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2.5">
                      Select Symptoms that apply:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {commonSymptomList.map((sym, idx) => {
                        const isSelected = formData.symptoms.includes(sym);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => toggleSymptom(sym)}
                            className={`text-xs px-3.5 py-2 rounded-xl border-2 transition-all cursor-pointer font-semibold ${
                              isSelected
                                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                : 'bg-white border-slate-200 text-slate-800 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50'
                            }`}
                          >
                            {sym}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                      Problem Details / Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe anything helpful (e.g. started making loud buzzing after power came back on)"
                      value={formData.issueDescription}
                      onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                      className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Date & Preferred Time */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b-2 border-slate-200 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    2
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                    Preferred Date & Time Window
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                      Service Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.serviceDate}
                      onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
                      className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                      Time Slot *
                    </label>
                    <select
                      required
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                    >
                      <option>Morning (08:00 – 12:00)</option>
                      <option>Afternoon (12:00 – 16:00)</option>
                      <option>Late Afternoon (16:00 – 18:30)</option>
                      <option>Urgent / Emergency First Available Slot</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2.5 p-3.5 bg-amber-50 border-2 border-amber-200 rounded-xl text-xs text-amber-950">
                  <input
                    type="checkbox"
                    id="urgentCheck"
                    checked={formData.isUrgent}
                    onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                    className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
                  />
                  <label htmlFor="urgentCheck" className="cursor-pointer font-bold">
                    Priority Same-Day Urgent Callout <span className="font-normal text-amber-900">(Fridge contents spoiling or commercial breakdown)</span>
                  </label>
                </div>
              </div>

              {/* Section 3: Location & Contact - NO EMAIL FIELD */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b-2 border-slate-200 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    3
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                    Service Address & Contact Details
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lerato Ndlovu"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 062 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                        Street Address / House No. *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 1422 Moshoeshoe St / Stand 408"
                        value={formData.streetAddress}
                        onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                        className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                        Gauteng Suburb / Area *
                      </label>
                      <select
                        required
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                      >
                        {COVERAGE_AREAS.map((area, idx) => (
                          <option key={idx} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                      Gate code / Complex name / Directions (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Complex / Street name, gate code, security buzzer"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl font-bold text-base text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 transform active:scale-[0.99] cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Confirm & Book Diagnostic Appointment</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-600 font-semibold pt-1">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                  R350 Credited upon repair
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  6 Months Warranty
                </span>
              </div>
            </form>

            {/* Right Side: Trust & Direct Help (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Call & WhatsApp Card - Clean, no email */}
              <div className="bg-gradient-to-br from-[#0B2545] to-[#123666] text-white rounded-3xl p-6 shadow-lg space-y-4 border border-blue-400/30">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg font-heading">
                    Prefer Booking by Phone?
                  </h4>
                  <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                    Speak directly with MR Gee to describe the fault or get instant arrival timings.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href="tel:+27623510025"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors block text-center shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-blue-700" />
                    <span>Call Technician Directly</span>
                  </a>

                  <a
                    href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20would%20like%20to%20book%20a%20technician"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors block text-center shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>

              {/* Guarantees list */}
              <div className="bg-white border-2 border-blue-200 rounded-3xl p-6 space-y-4 shadow-md text-slate-900">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                  Our Service Promise
                </h4>
                
                <div className="space-y-3.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">No surprise quotes:</strong> Upfront diagnostic price before work commences.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">6 Months Warranty:</strong> We guarantee both replacement components and workmanship.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Payment convenience:</strong> Card machine on van, Instant EFT, or Cash upon job completion.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
        </div>
      </section>
    </main>
  );
};
