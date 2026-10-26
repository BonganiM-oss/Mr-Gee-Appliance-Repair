import React from 'react';
import { Screen, TransitionType } from '../types';
import { Wrench, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { MrGeeLogo } from './MrGeeLogo';

interface FooterProps {
  onNavigate: (screen: Screen, transition?: TransitionType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#040C1A] border-t border-blue-900/60 text-slate-300 relative overflow-hidden">
      {/* Trust banner above footer columns */}
      <div className="border-b border-blue-950 bg-[#07152B] py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">6-Month Guarantee</h4>
              <p className="text-xs text-slate-400">All parts & labor backed by written warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Same-Day Callouts</h4>
              <p className="text-xs text-slate-400">Mobile vans across Johannesburg & Pretoria</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Transparent Pricing</h4>
              <p className="text-xs text-slate-400">R350 callout credited directly to repair</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">15+ Years Experience</h4>
              <p className="text-xs text-slate-400">Certified technician for all major brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns - Clean 3-column layout without quick nav or repetitive coverage list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MrGeeLogo size="md" />
              <div>
                <span className="text-xl font-black text-white font-heading block">
                  MR Gee <span className="text-cyan-400">Appliance Repair</span>
                </span>
                <span className="text-xs text-slate-400">
                  Specialist Mobile Repair Technician
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Professional, on-site diagnostics and repairs for domestic and commercial appliances across Gauteng. Fully insured, honest diagnostic rates, and factory-standard replacement parts.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-cyan-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Diagnostic callout credited 100% upon repair approval</span>
            </div>
          </div>

          {/* Appliances Repaired */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2.5">
              Appliances Repaired On-Site
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Fridges & Freezers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Washing Machines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Tumble Dryers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Smart TVs & LED Panels</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Stoves, Hobs & Ovens</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Microwaves</span>
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Commercial Cold Rooms & Chillers</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-cyan-400 pl-2.5">
              Direct Contact & Working Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-300 shrink-0" />
                <a href="tel:+27623510025" className="text-white hover:text-cyan-300 transition-colors font-bold">
                  062 351 0025
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20need%20appliance%20repair%20service" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#25D366] hover:underline font-semibold"
                >
                  WhatsApp Chat Direct
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-300 shrink-0" />
                <a href="mailto:Mrgeeappliancesthobela@gmail.com" className="text-slate-300 hover:text-white transition-colors text-xs truncate">
                  Mrgeeappliancesthobela@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Mon – Sat: 07:30 – 18:30 | Sun: Priority Callouts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Pages Navigation Links (SEO Crawlable Hub) */}
        <div className="mt-8 pt-6 border-t border-blue-900/50">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-3">
            Specialized Service & Area Guides:
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300">
            <button 
              onClick={() => onNavigate('tv-repair-johannesburg', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              TV Repair Johannesburg
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('samsung-tv-repair-johannesburg', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Samsung TV Repair Johannesburg
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('lg-tv-repair-johannesburg', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              LG TV Repair Johannesburg
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('hisense-tv-repair-johannesburg', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Hisense TV Repair Johannesburg
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('appliance-repair-johannesburg', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Appliance Repair Johannesburg
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('appliance-repair-roodepoort', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Appliance Repair Roodepoort
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('appliance-repair-krugersdorp', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Appliance Repair Krugersdorp
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('fridge-repair-johannesburg', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Fridge Repair Johannesburg
            </button>
            <span className="text-blue-800">|</span>
            <button 
              onClick={() => onNavigate('washing-machine-repair-johannesburg', 'push')}
              className="hover:text-cyan-300 transition-colors underline cursor-pointer"
            >
              Washing Machine Repair Johannesburg
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MR Gee Appliance Repair. All rights reserved.</p>
          <p className="text-slate-400">
            Prompt on-site service across Johannesburg, Roodepoort, Randburg, Pretoria, Centurion & Kagiso
          </p>
        </div>
      </div>
    </footer>
  );
};
