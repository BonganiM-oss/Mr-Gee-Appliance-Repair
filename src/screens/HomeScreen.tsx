import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Screen, TransitionType } from '../types';
import { 
  Wrench, ShieldCheck, Clock, CheckCircle2, ArrowRight, 
  Sparkles, Phone, MessageSquare, Snowflake, Tv, Flame,
  Calculator, Calendar, MapPin, ChevronDown, ChevronUp, 
  HelpCircle, Check, Info, AlertTriangle, Cpu
} from 'lucide-react';
import heroTechnicianBg from '../assets/images/hero_technician_bg_1790254131062.jpg';

interface HomeScreenProps {
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
}

const HERO_PARTICLES = [
  { size: 4, left: 10, delay: 0, duration: 8.5, color: 'bg-cyan-400' },
  { size: 5, left: 24, delay: 2.2, duration: 11, color: 'bg-blue-400' },
  { size: 3, left: 42, delay: 1.0, duration: 7.5, color: 'bg-sky-300' },
  { size: 6, left: 58, delay: 3.5, duration: 12, color: 'bg-amber-300' },
  { size: 4, left: 74, delay: 0.5, duration: 9.5, color: 'bg-cyan-300' },
  { size: 5, left: 86, delay: 4.0, duration: 11.5, color: 'bg-blue-300' },
  { size: 3, left: 93, delay: 1.8, duration: 8.8, color: 'bg-sky-400' },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Homepage Keywords Statement Banner */}
      <section className="bg-gradient-to-r from-[#071933] via-[#0D284C] to-[#071933] border-b border-blue-900/50 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">
              Gauteng Mobile Specialist
            </span>
          </div>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
            <strong className="text-cyan-300 font-semibold">MR Gee</strong> provides professional{' '}
            <span className="text-white font-medium">TV repair</span>,{' '}
            <span className="text-white font-medium">appliance repair</span>,{' '}
            <span className="text-white font-medium">fridge repair</span>,{' '}
            <span className="text-white font-medium">washing machine repair</span>,{' '}
            <span className="text-white font-medium">microwave repair</span> and{' '}
            <span className="text-white font-medium">stove repair</span> services throughout{' '}
            <span className="text-cyan-200 font-medium">Johannesburg, Roodepoort, Randburg, Sandton, Midrand, Krugersdorp, Pretoria, Centurion, East Rand, West Rand & Gauteng</span>.
          </p>
          <div className="shrink-0 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 bg-blue-950/70 px-3 py-1 rounded-lg border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Fast Mobile Van Dispatch
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section with Animated Technician Background */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-blue-900/40 overflow-hidden bg-gradient-to-b from-[#071933] via-[#0D284C] to-[#123666]">
        {/* Background Image Layer with atmospheric movement & glow animations */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.55, 0.3],
              x: [0, 35, 0],
              y: [0, -25, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-blue-500/25 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 0.9, 1.1],
              opacity: [0.25, 0.5, 0.25],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
          />

          <motion.img 
            src={heroTechnicianBg} 
            alt="MR Gee Expert Technician Background" 
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
            {HERO_PARTICLES.map((p, i) => (
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
                  ease: "linear" 
                }}
                className={`absolute rounded-full blur-[0.5px] shadow-sm ${p.color}`}
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  left: `${p.left}%`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#071933] via-[#071933]/90 to-blue-950/75 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123666] via-transparent to-[#071933]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left text column: Clearly Describes MR Gee & Services */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Clean Status & Trust Signal */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>Active Today Across Gauteng · Same-Day Mobile Dispatch</span>
              </div>

              {/* Exact H1 Required by Prompt */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading drop-shadow-sm">
                TV Repair, Fridge Repair &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-300">
                  Appliance Repair in Gauteng
                </span>
              </h1>

              {/* Informative, keyword-grounded description */}
              <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-sm">
                MR Gee delivers prompt, honest on-site diagnostics and repairs for smart TVs, fridges, washing machines, microwaves, stoves, and cold rooms. Providing specialist <strong className="text-white font-semibold">TV repair Johannesburg</strong>, <strong className="text-white font-semibold">Samsung TV repair</strong>, <strong className="text-white font-semibold">LG TV repair</strong>, <strong className="text-white font-semibold">Hisense TV repair</strong>, <strong className="text-white font-semibold">fridge repair</strong>, and <strong className="text-white font-semibold">appliance repair Roodepoort</strong>, <strong className="text-white font-semibold">Krugersdorp</strong>, <strong className="text-white font-semibold">Randburg</strong>, <strong className="text-white font-semibold">Sandton</strong>, <strong className="text-white font-semibold">Midrand</strong>, and <strong className="text-white font-semibold">Pretoria</strong> with our 6-month written warranty and R350 diagnostic call-out credited to your invoice.
              </p>

              {/* Clean meta highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-blue-100 font-medium">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  6 Months Warranty
                </span>
                <span className="text-blue-400">·</span>
                <span className="flex items-center gap-1.5 text-blue-200">
                  <Wrench className="w-4 h-4 text-blue-300" />
                  Repairs Done On-Site
                </span>
                <span className="text-blue-400">·</span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  R350 Call-Out Credited to Repair
                </span>
              </div>

              {/* Primary Navigation Buttons to other tabs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                {/* xpath: //main//a[contains(., 'Book a Service')] */}
                <a
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('book-appointment', 'push');
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book a Service</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* xpath: //main//a[contains(., 'Get Free Price Estimate')] */}
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing-enquiry', 'push');
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-base text-white bg-blue-950/70 hover:bg-blue-900 border border-blue-400/40 shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
                >
                  <Calculator className="w-5 h-5 text-cyan-300" />
                  <span>Get Free Price Estimate</span>
                </a>
              </div>

              {/* Direct Voice & WhatsApp Quick Line for Elderly & Fast Calls */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-300" />
                  Call Now: <a href="tel:+27623510025" className="text-white hover:underline font-bold">062 351 0025</a>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp Technician: <a href="https://wa.me/27623510025" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-semibold">062 351 0025</a>
                </span>
              </div>
            </div>

            {/* Right column: Clean Quick Dispatch & Navigation Hub */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-blue-950/90 to-[#0A2246]/90 border border-blue-400/30 p-6 sm:p-7 rounded-2xl shadow-2xl backdrop-blur-md relative space-y-5 text-white">
                <div className="flex items-center justify-between border-b border-blue-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-cyan-300">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-heading">
                        Mobile Diagnostic Dispatch
                      </h3>
                      <p className="text-xs text-cyan-300 font-medium">Johannesburg, West Rand, East Rand, Pretoria</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available Today
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-blue-100">
                  <div className="flex items-start gap-3 bg-blue-900/40 p-3 rounded-xl border border-blue-800/50">
                    <MapPin className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Gauteng Coverage Areas:</span>
                      <span className="text-xs text-blue-100">Johannesburg, Roodepoort, Krugersdorp, Randburg, Sandton, Midrand, Pretoria, Centurion, West Rand & East Rand</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-900/40 p-3 rounded-xl border border-blue-800/50">
                    <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">R350 Call-Out Guarantee:</span>
                      <span className="text-xs text-blue-100">The inspection fee is 100% credited against your repair when you proceed.</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Hub with the required xpath */}
                <div className="space-y-2.5 pt-1">
                  {/* xpath: //main//a[@id='estimator-cta'] */}
                  <a
                    href="#book-appointment"
                    id="estimator-cta"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('book-appointment', 'push');
                    }}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center text-white bg-blue-600 hover:bg-blue-500 shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] block cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Repair Appointment Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onNavigate('pricing-enquiry', 'push')}
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-center text-blue-100 bg-blue-900/60 hover:bg-blue-800 hover:text-white border border-blue-700/60 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-cyan-300" />
                    <span>View Pricing Guide & Estimator</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Search Keywords & 9 Dedicated Service Landing Pages Hub */}
      <section className="py-10 bg-gradient-to-r from-blue-950 via-[#0A2246] to-blue-950 text-white border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Dedicated Service Pages
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                Explore Focused Repair Guides by Brand & Location
              </h2>
            </div>
            <p className="text-xs text-blue-200 max-w-md">
              Looking for specialized troubleshooting in your suburb? Select from our dedicated Gauteng repair directories below:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { id: 'tv-repair-johannesburg' as Screen, title: 'TV Repair Johannesburg', desc: 'LED backlights, power boards & HDMI ports in Sandton & Joburg' },
              { id: 'samsung-tv-repair-johannesburg' as Screen, title: 'Samsung TV Repair Johannesburg', desc: 'Crystal UHD, QLED, clicking red light & black screen repair' },
              { id: 'lg-tv-repair-johannesburg' as Screen, title: 'LG TV Repair Johannesburg', desc: 'Blue/purple screen tint fixes, webOS diagnostics & backlights' },
              { id: 'hisense-tv-repair-johannesburg' as Screen, title: 'Hisense TV Repair Johannesburg', desc: 'VIDAA boot loops, red light flashing, backlights & surge fixes' },
              { id: 'appliance-repair-johannesburg' as Screen, title: 'Appliance Repair Johannesburg', desc: 'Fridges, washing machines, ovens & stoves in Joburg & Sandton' },
              { id: 'appliance-repair-roodepoort' as Screen, title: 'Appliance Repair Roodepoort', desc: 'Florida, Constantia Kloof, Helderkruin & Little Falls mobile call-outs' },
              { id: 'appliance-repair-krugersdorp' as Screen, title: 'Appliance Repair Krugersdorp', desc: 'Monument, Kenmare, Noordheuwel, Rangeview & Mogale City repairs' },
              { id: 'fridge-repair-johannesburg' as Screen, title: 'Fridge Repair Johannesburg', desc: 'Defrost heaters, compressors, nitrogen leak detection & regassing' },
              { id: 'washing-machine-repair-johannesburg' as Screen, title: 'Washing Machine Repair Johannesburg', desc: 'Drum bearings, drain pumps, motor carbon brushes & water leaks' },
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(link.id, 'push')}
                className="p-4 rounded-xl bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 hover:border-cyan-400/60 text-left transition-all duration-150 flex flex-col justify-between group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                    {link.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-blue-200">
                  {link.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* What MR Gee Does Section - Harmonized Light Blue/White Theme */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#F0F6FF] via-[#F8FAFC] to-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
                <Wrench className="w-3.5 h-3.5 text-blue-600" />
                <span>What MR Gee Does</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                All Appliance Repair Services Offered
              </h2>
              <p className="text-slate-700 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed font-normal">
                MR Gee specializes in domestic and commercial electrical appliance troubleshooting, certified spare parts replacement, and lasting precision repairs on-site at your premises.
              </p>
            </div>

            {/* xpath: //main//a[@data-path='services' and contains(., 'Explore All')] */}
            <a
              href="#services"
              data-path="services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('services', 'push');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md transition-all hover:scale-[1.02] group shrink-0 cursor-pointer"
            >
              <span>Explore All Services & Pricing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 6 Appliance Categories Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Snowflake,
                title: 'Fridge Repair Johannesburg & Gauteng',
                desc: 'Defrost heating issues, gas refills, regassing, compressor repairs, thermostat replacements, and seal fixes.',
                price: 'From R550',
                id: 'fridge-repair-johannesburg' as Screen
              },
              {
                icon: Wrench,
                title: 'Washing Machine Repair Johannesburg',
                desc: 'Not draining, spin cycle failures, noisy bearings, door lock errors, and water valve replacements on Defy, Bosch, LG & Samsung.',
                price: 'From R450',
                id: 'washing-machine-repair-johannesburg' as Screen
              },
              {
                icon: Tv,
                title: 'Smart TV & LED Screen Repairs',
                desc: 'Sound but no picture, black screen backlight replacements, power supply board repairs, and HDMI issues on Samsung, LG & Hisense.',
                price: 'From R650',
                id: 'tv-repair-johannesburg' as Screen
              },
              {
                icon: Flame,
                title: 'Stove, Hob & Oven Repairs',
                desc: 'Bake elements, thermofan motors, selector switches, burner regulators, and heat sensor troubleshooting.',
                price: 'From R450',
                id: 'appliance-repair-johannesburg' as Screen
              },
              {
                icon: Sparkles,
                title: 'Microwave Oven Repairs',
                desc: 'No heat issues, sparking, high-voltage diode and magnetron replacements, and keypad repairs.',
                price: 'From R350',
                id: 'appliance-repair-johannesburg' as Screen
              },
              {
                icon: Snowflake,
                title: 'Commercial Cold Rooms & Chillers',
                desc: 'Walk-in freezers, commercial butchery chillers, compressor overhauls, and commercial temperature control.',
                price: 'From R950',
                id: 'appliance-repair-johannesburg' as Screen
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-blue-200/90 hover:border-blue-600 rounded-2xl p-6 transition-all duration-200 shadow-md hover:shadow-xl flex flex-col justify-between group text-slate-900"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                        {item.price}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-700 font-semibold">6 Months Warranty</span>
                    <button
                      onClick={() => onNavigate(item.id, 'push')}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>See Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Technical Appliance & TV Repair Knowledge Base (1,500+ Words SEO Content) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Technical Knowledge & Repair Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-3">
              Reliable Appliance Repair Near Me in Johannesburg & Across Gauteng
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-3 leading-relaxed">
              When an essential household machine fails, searching for <strong className="text-slate-900 font-semibold">“TV repair Johannesburg”</strong>, <strong className="text-slate-900 font-semibold">“appliance repair near me”</strong>, or <strong className="text-slate-900 font-semibold">“fridge repair Johannesburg”</strong> connects you with dozens of generic directory listings. However, domestic electronics and refrigeration require certified technical diagnostic skills, genuine manufacturer-approved components, and calibrated testing instruments. MR Gee Appliance Repair brings over 15 years of specialized field experience directly to your doorstep in <strong className="text-slate-900 font-semibold">Johannesburg, Roodepoort, Krugersdorp, Randburg, Sandton, Midrand, Pretoria, Centurion, East Rand, West Rand, and throughout Gauteng</strong>.
            </p>
          </div>

          {/* 4 Technical Pillar Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pillar 1: TV Repair (Samsung, LG, Hisense & Smart TV) */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                TV Repair Johannesburg: Samsung, LG, Hisense & Smart TV Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Modern smart televisions are intricate solid-state devices combining switch-mode power supplies (SMPS), high-density digital logic motherboards, timing controllers (T-Con), and series LED backlight arrays. The single most prevalent failure across Gauteng is <strong className="text-slate-900 font-semibold">sound working while the display remains completely black</strong>. In over 90% of cases, this symptom is caused by burned-out LED backlight strips.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We provide precision on-site servicing for <strong className="text-blue-900 font-semibold">Samsung TV repair Johannesburg</strong> (solving clicking relay noises, 2-blink red standby light codes, and Crystal UHD black screens), <strong className="text-blue-900 font-semibold">LG TV repair Johannesburg</strong> (remedying purple or blue screen tint degradation and webOS boot issues), and <strong className="text-blue-900 font-semibold">Hisense TV repair Johannesburg</strong> (clearing VIDAA OS boot loops and power supply failures).
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('tv-repair-johannesburg', 'push')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore TV Repair in Johannesburg & Gauteng</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 2: Fridge & Refrigeration */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Fridge Repair Johannesburg: Defrost, Regassing & Compressor Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A sudden refrigerator breakdown leads to rapid food spoilage and costly grocery losses. Common refrigerator faults include a freezer that freezes solid while the bottom fresh-food compartment stays warm (caused by failed defrost heaters, bimetal thermostats, or blocked airflow dampers), and compressor motor failure where the compressor clicks every 3 minutes without running.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Our mobile refrigeration technicians perform certified on-site nitrogen pressure leak testing, vacuum evacuation, and factory-standard <strong className="text-cyan-900 font-semibold">R134a and R600a regassing</strong>. We replace failed defrost timers, evaporator fan motors, and heavy-duty PTC compressor start relays across Defy, Samsung, LG, KIC, Bosch, and Whirlpool refrigerators.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('fridge-repair-johannesburg', 'push')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Fridge Repair Johannesburg & Regassing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 3: Washing Machines & Dryers */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Washing Machine Repair Johannesburg: Bearings, Pumps & Spin Cycles
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Front-loader and top-loader washing machines endure rigorous mechanical vibration, water friction, and detergent buildup. Typical issues include water failing to drain at the end of the wash cycle (often caused by coin or hairpin obstructions inside the drain pump impeller), digital error codes (OE, E20, 5E), or a deafening grinding roar during the final high-speed spin cycle indicating worn tub bearings.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                MR Gee performs precision drum bearing rebuilds using premium German SKF sealed bearings and double-lip water seals, replacing worn motor carbon brushes, drive belts, door interlock latches, and drain pump assemblies across Defy, Bosch, Samsung, LG, and Whirlpool washing machines on-site.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('washing-machine-repair-johannesburg', 'push')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Washing Machine Repair Johannesburg</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 4: Stoves, Ovens & Microwaves */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Stove, Oven & Microwave Repair Across Gauteng
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Cooking appliances demand strict electrical safety compliance. For domestic electric stoves and ovens, we replace burnt bottom bake elements, thermofan circular elements, faulty safety thermostats, and worn multi-position rotary selector switches. We ensure elements heat evenly and ovens reach calibrated baking temperatures.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                For countertop and built-in microwave ovens that run but fail to heat food, our technicians safely discharge high-voltage capacitors, testing the high-voltage diode, magnetron tube, and ceramic safety fuses for instant restoration.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('appliance-repair-johannesburg', 'push')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Stove & Microwave Repair Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Deep Technical Analysis: Load Shedding & Power Surge Resilience */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-blue-900/60 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Safeguarding Appliances Against Load Shedding Surges in Gauteng
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Technical advice from MR Gee to protect your television, refrigerator, and laundry appliances
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
                <h4 className="text-cyan-300 font-bold text-sm">Switch-Mode Power Spikes</h4>
                <p>
                  When grid electricity returns after scheduled power outages, inductive switching surges can exceed 3,000 volts for microseconds. This destroys varistors and primary rectification diodes in television power supplies and refrigerator control boards.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
                <h4 className="text-cyan-300 font-bold text-sm">Compressor Head Pressure</h4>
                <p>
                  If power blinks off and instantly returns within 10 seconds, the refrigerator compressor tries to start against high residual head pressure, triggering the thermal overload relay and risking motor winding burnout.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
                <h4 className="text-cyan-300 font-bold text-sm">Recommended Surge Protection</h4>
                <p>
                  We recommend installing high-joule surge protectors with built-in 4-minute restart delay timers for fridges and TVs, and unplugging sensitive electronics during extended electrical grid shedding.
                </p>
              </div>
            </div>
          </div>

          {/* Genuine Service Area Breakdown */}
          <div className="bg-blue-50/60 border-2 border-blue-200 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Where MR Gee Delivers Genuine On-Site Appliance & TV Service</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  We operate mobile repair vans across these verified Gauteng municipal districts:
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs">
                <span>R350 Call-Out Credited Upon Repair</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs">
                <strong className="text-blue-900 font-bold block mb-1">Johannesburg & Sandton</strong>
                <p className="text-xs text-slate-600">
                  Sandton, Rosebank, Randburg, Bryanston, Fourways, Northcliff, Melville, Linden, Hyde Park, Morningside, Midrand & Johannesburg South.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs">
                <strong className="text-blue-900 font-bold block mb-1">Roodepoort & West Rand</strong>
                <p className="text-xs text-slate-600">
                  Florida, Constantia Kloof, Helderkruin, Weltevredenpark, Wilgeheuwel, Little Falls, Ruimsig, Horizon View & Discovery.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs">
                <strong className="text-blue-900 font-bold block mb-1">Krugersdorp & Mogale City</strong>
                <p className="text-xs text-slate-600">
                  Monument, Kenmare, Noordheuwel, Rangeview, Kagiso, Chamdor, Krugersdorp West, Silverfields & Chancliff.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs">
                <strong className="text-blue-900 font-bold block mb-1">Pretoria, Centurion & East Rand</strong>
                <p className="text-xs text-slate-600">
                  Centurion, Pretoria East, Menlyn, Brooklyn, Hatfield, Faerie Glen, Bedfordview, Edenvale, Alberton & Kempton Park.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided 3-Step Roadmap: Senior & User-Friendly Navigation */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-white via-blue-50/50 to-blue-50/70 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
              Simple 3-Step Experience
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-3">
              How MR Gee Works — Simple for Everyone
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2 font-normal">
              Designed so anyone, including elderly family members, can get their appliance fixed with total ease and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Services & Upfront Quotes */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 sm:p-7 shadow-md hover:border-blue-500 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-blue-900 bg-blue-100 px-2.5 py-1 rounded-full border border-blue-200">Step 1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                  1. See Services & Real Quotes
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                  Browse clear prices for Fridges, Washing Machines, TVs, Stoves, and Microwaves. No surprise fees — the R350 callout is credited to your repair.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services', 'push')}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View Services & Prices</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 2: Book Date & Time */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 sm:p-7 shadow-md hover:border-emerald-500 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">Step 2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                  2. Pick a Convenient Slot
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                  Select morning, afternoon, or urgent same-day call-out. We give you an instant quote range on the booking screen before you submit.
                </p>
              </div>
              <button
                onClick={() => onNavigate('book-appointment', 'push')}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 3: Elderly / Phone Direct */}
            <div className="bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-700 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between group border border-blue-400/30">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-cyan-200 bg-blue-950/70 px-2.5 py-1 rounded-full border border-blue-400/40">Super Easy</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  3. Prefer Direct Phone Chat?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-4">
                  Elderly folks or anyone who prefers talking to a real human can simply call us directly. We answer with a smile and handle everything over the phone.
                </p>
              </div>
              <a
                href="tel:+27623510025"
                className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-blue-900 bg-white hover:bg-blue-50 shadow-md flex items-center justify-center gap-2 transition-colors uppercase tracking-wider text-center"
              >
                <Phone className="w-4 h-4 text-blue-800" />
                <span>Call MR Gee Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Required Searcher Questions & Answers (6 Exact Mandatory FAQs) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Common Questions Before Booking a Repair
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Clear, transparent answers about pricing, same-day scheduling, TV repairs, and service areas across Gauteng.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How much does TV repair cost?',
                answer: 'TV repair costs typically range from R550 to R1,450 depending on screen size, the specific fault (such as LED backlights, power supply capacitors, or mainboard firmware), and replacement parts required. At MR Gee, our R350 diagnostic call-out fee is 100% credited against your final repair bill upon quote approval, guaranteeing no surprise charges.'
              },
              {
                question: 'Do you repair Samsung TVs?',
                answer: 'Yes! MR Gee specializes in Samsung Smart, Crystal UHD, QLED, and LED television repairs across Johannesburg and Gauteng. We resolve typical Samsung issues such as sound with a pitch-black picture (burned out LED backlights), clicking relay noises accompanied by blinking red standby lights (power supply board failure), boot looping on the "Samsung Smart TV" logo, and faulty HDMI ports. If the screen glass is intact and the fault is electronic or backlight-related, we repair it on-site.'
              },
              {
                question: 'Do you repair LG TVs?',
                answer: 'Yes! We repair LG webOS Smart TVs, NanoCell, UHD 4K, and OLED screens throughout Gauteng. We frequently fix the common purple/blue screen tint issue caused by phosphor degradation by replacing the entire backlight strip array with brand-new pure white aluminum LED strips. We also repair LG power supplies, main video logic boards, and internal WiFi/Magic Remote modules.'
              },
              {
                question: 'Do you repair Hisense TVs?',
                answer: 'Yes! We have extensive diagnostic experience with Hisense VIDAA OS, Android Smart TV, and ULED televisions. We repair common Hisense issues including boot loops where the TV is stuck on the Hisense logo, black screens with functioning audio, rapid blinking red standby error codes, and power supply surge damage.'
              },
              {
                question: 'Do you offer same-day repair?',
                answer: 'Yes, same-day repair is available across Gauteng when appointments are booked earlier in the day and when technician routes have open dispatch slots in your sector. Availability depends on current technician call volume, traffic conditions across Johannesburg and Pretoria highways, and whether your repair requires common stocked components versus rare proprietary parts.'
              },
              {
                question: 'What areas do you service?',
                answer: 'MR Gee Appliance Repair operates mobile service units throughout Johannesburg (Sandton, Rosebank, Randburg, Fourways, Bryanston, Northcliff, Linden, Midrand, Glenvista), Roodepoort (Florida, Constantia Kloof, Helderkruin, Weltevredenpark, Little Falls, Ruimsig), Krugersdorp (Monument, Kenmare, Noordheuwel, Rangeview, Kagiso, Chamdor), Pretoria (Pretoria East, Menlyn, Centurion, Brooklyn, Montana), East Rand, West Rand, and surrounding Gauteng suburbs.'
              }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border-2 border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-blue-50/50 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 font-heading flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-600 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white border-t border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Count On MR Gee */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Gauteng's Trusted Appliance Specialist
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Why Gauteng Residents & Businesses Count On MR Gee
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2 font-normal">
              Fast mobile diagnostics, genuine parts, and honest pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-blue-200 shadow-xs hover:border-blue-400 transition-all text-slate-900">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 border border-blue-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">6 Months Warranty</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Every repair is backed by a 6-month written warranty on both installed replacement components and labor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-blue-200 shadow-xs hover:border-blue-400 transition-all text-slate-900">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 border border-blue-200">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Same-Day Priority</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Mobile teams operating across Johannesburg, Pretoria, West Rand & East Rand ensure fast turnaround times.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-blue-200 shadow-xs hover:border-blue-400 transition-all text-slate-900">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 border border-amber-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No Hidden Fees</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Clear quotes provided upfront. If you accept the repair quote, the R350 call-out inspection fee is 100% credited.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-blue-200 shadow-xs hover:border-blue-400 transition-all text-slate-900">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Genuine OEM Parts</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                We only fit factory-certified parts for Defy, Samsung, LG, Hisense, Whirlpool, and Bosch appliances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call-out CTA Banner - Harmonious Deep Royal Blue */}
      <section className="py-12 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white border-t border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Appliance emergency anywhere in Gauteng?
            </h3>
            <p className="text-sm text-blue-100">
              Speak directly with MR Gee for immediate troubleshooting advice or same-day dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+27623510025"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-extrabold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call MR Gee Directly: 062 351 0025</span>
            </a>
            <a
              href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20need%20appliance%20repair%20in%20Gauteng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
