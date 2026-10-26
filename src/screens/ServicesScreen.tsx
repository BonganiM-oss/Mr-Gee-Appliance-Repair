import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, TransitionType } from '../types';
import { 
  Wrench, ShieldCheck, Clock, CheckCircle2, AlertCircle, ArrowRight,
  Snowflake, Tv, Flame, Zap, Check, Search, Filter, PhoneCall, MessageSquare,
  Phone, Calendar
} from 'lucide-react';
import { SERVICES_DATA, POPULAR_BRANDS } from '../data/repairData';
import servicesBg from '../assets/images/services_repair_bg_1790255590819.jpg';

interface ServicesScreenProps {
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
}

const SERVICES_PARTICLES = [
  { size: 4, left: 12, delay: 0, duration: 8, color: 'bg-cyan-400' },
  { size: 5, left: 28, delay: 2.5, duration: 11, color: 'bg-blue-400' },
  { size: 3, left: 45, delay: 1.2, duration: 7, color: 'bg-sky-300' },
  { size: 5, left: 62, delay: 3.8, duration: 12, color: 'bg-indigo-300' },
  { size: 4, left: 78, delay: 0.8, duration: 9, color: 'bg-cyan-300' },
  { size: 5, left: 91, delay: 4.2, duration: 10, color: 'bg-blue-300' },
];

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Refrigeration', 'Laundry', 'Cooking', 'Electronics', 'Commercial'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.commonIssues.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.brands.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Services & Repairs Hero Header with Animated Workshop Background */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-blue-900/40 overflow-hidden bg-gradient-to-b from-[#071933] via-[#0D284C] to-[#123666]">
        {/* Animated Background Image & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Ambient Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.55, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-16 right-1/4 w-96 h-96 rounded-full bg-blue-500/25 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 0.9, 1.1],
              opacity: [0.2, 0.45, 0.2],
              x: [0, -25, 0],
              y: [0, 25, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
          />

          {/* Animated Zoom and Pan on Services & Repairing Image */}
          <motion.img 
            src={servicesBg} 
            alt="MR Gee Services & Repairs Workshop" 
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

          {/* Floating Subtle Electric / Repair Spark Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {SERVICES_PARTICLES.map((p, i) => (
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
                className={`absolute bottom-0 w-1.5 h-1.5 rounded-full ${p.color} blur-[0.5px] pointer-events-none shadow-sm shadow-cyan-400`}
                style={{ left: `${p.left}%` }}
              />
            ))}
          </div>

          {/* Vignette Overlays that blend seamlessly into the blue */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071933] via-[#071933]/85 to-[#071933]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123666] via-transparent to-[#071933]/60" />
        </div>

        {/* Services Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-cyan-200 text-xs sm:text-sm font-semibold mb-5 backdrop-blur-md shadow-lg shadow-blue-950/50">
            <Wrench className="w-3.5 h-3.5 text-cyan-300" />
            <span className="uppercase tracking-wider">Services, Repair Costs & Upfront Quotes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Professional Appliance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-300">
              Services & Upfront Quotes
            </span>{' '}
            Across Gauteng
          </h1>

          <p className="text-blue-100 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            From single-door bar fridges to commercial walk-in cold rooms and digital inverter washing machines. Every repair is performed on-site with transparent pricing and our iron-clad 6-month warranty.
          </p>

          {/* Quick Action Links matching spec */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* xpath: //main//a[contains(., 'Schedule Diagnosis')] */}
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('book-appointment', 'push');
              }}
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/40 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <Clock className="w-4 h-4" />
              <span>Schedule Diagnosis</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            {/* xpath: //main//a[contains(., 'Book Online')] */}
            <a
              href="#book-online"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('book-appointment', 'push');
              }}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-950/70 hover:bg-blue-900 border border-blue-400/40 backdrop-blur-md shadow-sm transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <Wrench className="w-4 h-4 text-cyan-300" />
              <span>Book Online</span>
            </a>
          </div>

          {/* Value Pillars */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-400/30 backdrop-blur-md text-white">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs mb-0.5">
                <ShieldCheck className="w-4 h-4" />
                <span>6 Months</span>
              </div>
              <p className="text-[11px] text-blue-100">Written warranty on parts & labor</p>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-400/30 backdrop-blur-md text-white">
              <div className="flex items-center gap-2 text-blue-300 font-semibold text-xs mb-0.5">
                <Wrench className="w-4 h-4" />
                <span>On-Site Fix</span>
              </div>
              <p className="text-[11px] text-blue-100">Done at your home or shop</p>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-400/30 backdrop-blur-md text-white">
              <div className="flex items-center gap-2 text-sky-300 font-semibold text-xs mb-0.5">
                <Clock className="w-4 h-4" />
                <span>Same-Day</span>
              </div>
              <p className="text-[11px] text-blue-100">Rapid Gauteng dispatch</p>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-400/30 backdrop-blur-md text-white">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs mb-0.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>R350 Credited</span>
              </div>
              <p className="text-[11px] text-blue-100">Call-out fee credited to repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar - Harmonious Light Blue/White Bar */}
      {/* Filter and Search Bar - Harmonious Light Blue/White Bar */}
      <section className="py-4 bg-white/95 backdrop-blur-md border-b-2 border-blue-100 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs with Animated Indicator */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none bg-blue-50/80 p-1.5 rounded-xl border-2 border-blue-200 relative">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors select-none cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-blue-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="servicesActiveCatPill"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-blue-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fault, part or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border-2 border-slate-300 rounded-xl text-xs text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Friendly Senior & Instant Quote Assistance Banner - Single Purposeful Phone Action */}
      <section className="py-5 bg-gradient-to-r from-blue-50/80 via-slate-50 to-blue-50/80 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 rounded-2xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-blue-400/30">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white font-heading">
                  Prefer a fast quote or phone guidance?
                </h4>
                <p className="text-xs sm:text-sm text-blue-100">
                  Speak directly with MR Gee. We explain the problem and estimated price in simple, friendly terms for anyone, including elderly family members.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="tel:+27623510025"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-800" />
                <span>Call MR Gee Directly</span>
              </a>
              <a
                href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20need%20a%20repair%20quote%20for%20my%20appliance"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed List with Quotes & Transparent Prices - Dedicated Light Background */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Upfront Prices & Repair Quotes
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium mt-2">
              All prices include diagnostic testing, labor, and a 6-month written warranty. The R350 call-out fee is 100% credited against your repair!
            </p>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -12 }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                    className="bg-white border-2 border-blue-200/90 hover:border-blue-600 rounded-2xl p-6 sm:p-7 transition-all duration-200 shadow-md hover:shadow-xl flex flex-col justify-between group text-slate-900"
                  >
                    <div className="space-y-4">
                      {/* Header: Icon, Title & Category */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            {service.iconName === 'Refrigerator' && <Snowflake className="w-6 h-6" />}
                            {service.iconName === 'WashingMachine' && <Wrench className="w-6 h-6" />}
                            {service.iconName === 'Flame' && <Flame className="w-6 h-6" />}
                            {service.iconName === 'Tv' && <Tv className="w-6 h-6" />}
                            {service.iconName === 'Zap' && <Zap className="w-6 h-6" />}
                            {service.iconName === 'Snowflake' && <Snowflake className="w-6 h-6" />}
                          </div>
                          <div>
                            <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-blue-700 transition-colors">
                              {service.title}
                            </h3>
                            <span className="text-xs text-blue-800 font-bold">
                              {service.tagline}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-50 text-blue-900 border-2 border-blue-200 shrink-0">
                          {service.category}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* Common Symptoms List */}
                      <div className="border-t border-slate-200 pt-3">
                        <span className="text-xs font-black text-slate-900 block mb-2">
                          Common Symptoms We Resolve On-Site:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {service.commonIssues.map((issue, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-800 font-medium bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 stroke-[2.5]" />
                              <span className="truncate">{issue}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Brands Serviced */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-slate-700">
                        <span className="font-bold text-slate-900">Major Brands:</span>
                        {service.brands.map((brand, bIdx) => (
                          <span key={bIdx} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-800 rounded border border-slate-200 font-semibold">
                            {brand}
                          </span>
                        ))}
                      </div>

                      {/* Explicit Quote & Price Box */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800">Estimated Repair Quote:</span>
                          <span className="text-xl sm:text-2xl font-black text-blue-900 font-heading">{service.priceRange}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-700 font-medium">
                          <span>Turnaround: <strong className="text-slate-900">{service.estTime}</strong></span>
                          <span className="text-emerald-900 font-bold bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">R350 Call-out credited</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Clear Actions - NO EMAILS */}
                    <div className="pt-4 mt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-xs text-slate-700 font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span>6 Months Warranty on parts & labor</span>
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onNavigate('book-appointment', 'push', { appliance: service.id })}
                          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book This Repair</span>
                        </button>

                        <a
                          href={`https://wa.me/27623510025?text=${encodeURIComponent(`Hi MR Gee, I need a quote and repair for my ${service.title} in Gauteng.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors shadow-xs"
                          title="Chat on WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>

                        <a
                          href="tel:+27623510025"
                          className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 transition-colors border-2 border-blue-200 shadow-xs"
                          title="Call MR Gee"
                        >
                          <Phone className="w-4 h-4 text-blue-800" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Cross-Link Hub to Pricing & Booking - Light Blue Background */}
      <section className="py-12 bg-blue-50/80 border-t-2 border-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-2">
            Want to see detailed pricing or book directly?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 font-medium mb-6 max-w-xl mx-auto">
            Each page has dedicated tools. Check our transparent price calculator or choose your exact date and time slot for a technician visit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('pricing-enquiry', 'push')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-white hover:bg-slate-100 border-2 border-slate-300 shadow-xs flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>View Price Guide & Calculator</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </button>
            <button
              onClick={() => onNavigate('book-appointment', 'push')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-xs flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Go to Booking Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Certified Brands We Support */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-6">
            Certified Repair Expertise Across All Major Household Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {POPULAR_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-700 transition-colors shadow-xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
