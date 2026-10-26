import React from 'react';
import { Screen, TransitionType } from '../types';
import { SEO_PAGES, SeoPageData } from '../data/seoLandingPages';
import { 
  Wrench, ShieldCheck, Phone, MessageSquare, ArrowRight, 
  MapPin, CheckCircle2, ChevronRight, HelpCircle, 
  Sparkles, Calendar, ArrowLeft, Calculator, Check
} from 'lucide-react';

interface LandingPageScreenProps {
  pageId: string;
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
}

export const LandingPageScreen: React.FC<LandingPageScreenProps> = ({ pageId, onNavigate }) => {
  const data: SeoPageData = SEO_PAGES[pageId] || SEO_PAGES['tv-repair-johannesburg'];

  // All 9 specialized target pages for natural internal cross-linking
  const allLandingKeys: { id: Screen; label: string; area: string; description: string }[] = [
    { 
      id: 'tv-repair-johannesburg', 
      label: 'TV Repair Johannesburg', 
      area: 'Joburg & Sandton',
      description: 'Backlight arrays, power boards & HDMI ports for all Smart TV screens.'
    },
    { 
      id: 'samsung-tv-repair-johannesburg', 
      label: 'Samsung TV Repair Johannesburg', 
      area: 'Gauteng Wide',
      description: 'Crystal UHD, QLED, clicking red standby lights & black screen repair.'
    },
    { 
      id: 'lg-tv-repair-johannesburg', 
      label: 'LG TV Repair Johannesburg', 
      area: 'Gauteng Wide',
      description: 'Fixing purple/blue screen tints, webOS boot issues & power boards.'
    },
    { 
      id: 'hisense-tv-repair-johannesburg', 
      label: 'Hisense TV Repair Johannesburg', 
      area: 'Gauteng Wide',
      description: 'Resolving VIDAA boot loops, red light flashing & backlight failure.'
    },
    { 
      id: 'appliance-repair-johannesburg', 
      label: 'Appliance Repair Johannesburg', 
      area: 'Sandton & Joburg',
      description: 'Complete home appliance repair for fridges, washing machines & stoves.'
    },
    { 
      id: 'appliance-repair-roodepoort', 
      label: 'Appliance Repair Roodepoort', 
      area: 'West Rand Suburbs',
      description: 'Florida, Constantia Kloof, Helderkruin & Little Falls mobile call-outs.'
    },
    { 
      id: 'appliance-repair-krugersdorp', 
      label: 'Appliance Repair Krugersdorp', 
      area: 'Mogale City & West Rand',
      description: 'Monument, Kenmare, Noordheuwel & Rangeview on-site repairs.'
    },
    { 
      id: 'fridge-repair-johannesburg', 
      label: 'Fridge Repair Johannesburg', 
      area: 'Refrigeration Specialist',
      description: 'Defrost heaters, compressors, nitrogen leak detection & certified regassing.'
    },
    { 
      id: 'washing-machine-repair-johannesburg', 
      label: 'Washing Machine Repair Johannesburg', 
      area: 'Laundry Specialist',
      description: 'Drum bearings, drain pumps, motor brushes & leak repair on all top brands.'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Breadcrumb Navigation */}
      <nav className="bg-[#051124] border-b border-blue-900/60 py-3 px-4 sm:px-6 lg:px-8 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <button 
            onClick={() => onNavigate('home', 'none')} 
            className="hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
          <button 
            onClick={() => onNavigate('services', 'none')} 
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Services</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-cyan-300 font-medium truncate">{data.title.split('|')[0].trim()}</span>
        </div>
      </nav>

      {/* Hero Header for this targeted service/location */}
      <section className="bg-gradient-to-b from-[#071933] via-[#0D284C] to-[#123666] text-white py-12 sm:py-16 border-b border-blue-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{data.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white drop-shadow-sm">
              {data.h1}
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal">
              {data.subtitle}
            </p>

            {/* Quick trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-cyan-200 font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                6 Months Written Warranty
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                R350 Call-Out Credited to Repair
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-blue-300" />
                Repairs Performed On-Site
              </span>
            </div>

            {/* Direct Booking, Quote & Call Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('book-appointment', 'push');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Repair</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+27623510025"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call Now: 062 351 0025</span>
              </a>

              <a
                href={`https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20need%20assistance%20with%20${encodeURIComponent(data.h1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Technician</span>
              </a>

              <button
                onClick={() => onNavigate('pricing-enquiry', 'push')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-blue-950/70 hover:bg-blue-900 border border-blue-400/40 text-blue-100 hover:text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-cyan-300" />
                <span>Get Free Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Detail Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  About Our {data.h1}
                </h2>
                {data.intro.map((p, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
                    {p}
                  </p>
                ))}
              </div>

              {/* Technical Diagnostics / Common Symptoms */}
              <div className="pt-4 space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    {data.diagnosticsTitle}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    {data.diagnosticsDesc}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {data.symptoms.map((sym, sIdx) => (
                    <div 
                      key={sIdx}
                      className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors"
                    >
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-1.5 font-heading">
                        <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{sym.name}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 mb-3">
                        <strong className="text-slate-900">Symptoms:</strong> {sym.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-3 rounded-lg border border-slate-200">
                        <div>
                          <span className="font-bold text-slate-900 block mb-0.5">Root Cause:</span>
                          <span className="text-slate-600">{sym.likelyCause}</span>
                        </div>
                        <div>
                          <span className="font-bold text-blue-700 block mb-0.5">Repair Solution:</span>
                          <span className="text-slate-600">{sym.repairApproach}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-Depth Technical Deep Dive Sections (1,000+ words guarantee) */}
              {data.technicalDeepDive && data.technicalDeepDive.length > 0 && (
                <div className="pt-6 space-y-6">
                  {data.technicalDeepDive.map((section, secIdx) => (
                    <div key={secIdx} className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 sm:p-7 space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 font-heading border-b border-blue-200/70 pb-3">
                        {section.title}
                      </h3>
                      {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {para}
                        </p>
                      ))}
                      {section.bulletPoints && section.bulletPoints.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {section.bulletPoints.map((point, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Genuine Suburbs Coverage */}
              <div className="pt-6">
                <div className="border-l-4 border-cyan-500 pl-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    {data.suburbsTitle}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Our mobile repair van dispatches to residential homes, apartments, and businesses across:
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {data.suburbsList.map((suburb, subIdx) => (
                    <span 
                      key={subIdx}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                      <span>{suburb}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Brands Handled if provided */}
              {data.brandsHandled && data.brandsHandled.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                    Brands Serviced
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.brandsHandled.map((brand, bIdx) => (
                      <span 
                        key={bIdx}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Frequently Asked Questions */}
              <div className="pt-8 space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Common questions regarding our {data.h1.toLowerCase()} services:
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {data.faqs.map((faq, fIdx) => (
                    <div 
                      key={fIdx}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                    >
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2 mb-2 font-heading">
                        <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6 font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column: Transparent Pricing & Direct Booking Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-[#071933] to-[#0D284C] text-white p-6 rounded-2xl shadow-xl border border-blue-900/60 sticky top-24 space-y-6">
                <div className="border-b border-blue-800/80 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Transparent Estimate
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-heading mt-1">
                    Repair Pricing Guide
                  </h3>
                  <p className="text-xs text-blue-200 mt-1">
                    No hidden extras. Honest assessments before any repairs begin.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {data.costBreakdown.map((item, cIdx) => (
                    <div key={cIdx} className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/60 space-y-1">
                      <span className="font-bold text-cyan-300 block">{item.title}</span>
                      <span className="text-blue-100 text-xs leading-relaxed block">{item.detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 space-y-3">
                  <a
                    href="#book"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('book-appointment', 'push');
                    }}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center text-white bg-blue-600 hover:bg-blue-500 shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] block cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Repair Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="tel:+27623510025"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-center text-blue-900 bg-white hover:bg-blue-50 flex items-center justify-center gap-2 transition-colors block"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                    <span>Call Now: 062 351 0025</span>
                  </a>

                  <a
                    href={`https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20need%20a%20repair%20quote%20for%20${encodeURIComponent(data.h1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-center text-white bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center gap-2 transition-colors block"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Technician</span>
                  </a>

                  <button
                    onClick={() => onNavigate('pricing-enquiry', 'push')}
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-center text-blue-200 bg-blue-900/60 hover:bg-blue-800 hover:text-white border border-blue-700/60 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Get Free Price Estimate</span>
                  </button>
                </div>

                <div className="pt-2 border-t border-blue-800/80 text-[11px] text-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>6-Month Written Warranty on Parts & Labor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>R350 Call-Out Credited to Accepted Quotes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Hub across all 9 specialized pages */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Explore More Repair Services & Locations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Connect to our specialized service pages for detailed diagnostics, error codes, and local pricing across Gauteng:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {allLandingKeys.map((link) => {
              const isCurrent = link.id === pageId;
              return (
                <button
                  key={link.id}
                  disabled={isCurrent}
                  onClick={() => onNavigate(link.id, 'push')}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                    isCurrent 
                      ? 'bg-blue-600 text-white border-blue-700 shadow-sm opacity-90' 
                      : 'bg-white hover:bg-blue-50 text-slate-800 border-slate-200 hover:border-blue-300 shadow-2xs'
                  }`}
                >
                  <div className="pr-2">
                    <span className={`text-xs sm:text-sm font-bold block ${isCurrent ? 'text-white' : 'text-slate-900 group-hover:text-blue-700'}`}>
                      {link.label}
                    </span>
                    <span className={`text-[11px] block mt-0.5 ${isCurrent ? 'text-blue-100' : 'text-slate-500'}`}>
                      {link.description}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${isCurrent ? 'text-white' : 'text-blue-600'}`} />
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('home', 'none')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to MR Gee Homepage</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
