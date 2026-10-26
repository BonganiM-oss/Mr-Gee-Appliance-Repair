/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, TransitionType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { PricingScreen } from './screens/PricingScreen';
import { BookAppointmentScreen } from './screens/BookAppointmentScreen';
import { LandingPageScreen } from './screens/LandingPageScreen';
import { SEO_PAGES } from './data/seoLandingPages';

export default function App() {
  // Read initial path from URL if present
  const getInitialScreen = (): Screen => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const validScreens: Screen[] = [
      'home', 'services', 'pricing-enquiry', 'book-appointment',
      'tv-repair-johannesburg', 'samsung-tv-repair-johannesburg', 'lg-tv-repair-johannesburg',
      'hisense-tv-repair-johannesburg', 'appliance-repair-johannesburg',
      'appliance-repair-roodepoort', 'appliance-repair-krugersdorp',
      'fridge-repair-johannesburg', 'washing-machine-repair-johannesburg',
      'samsung-tv-repair', 'lg-tv-repair', 'hisense-tv-repair', 'smart-tv-repair',
      'appliance-repair-pretoria'
    ];
    if (path && validScreens.includes(path as Screen)) {
      return path as Screen;
    }
    if (window.location.hash) {
      const hash = window.location.hash.replace(/^#/, '');
      if (validScreens.includes(hash as Screen)) {
        return hash as Screen;
      }
    }
    return 'home';
  };

  const [currentScreen, setCurrentScreen] = useState<Screen>(getInitialScreen);
  const [transitionType, setTransitionType] = useState<TransitionType>('none');
  const [screenState, setScreenState] = useState<any>(null);

  const handleNavigate = (nextScreen: Screen, transition: TransitionType = 'none', state?: any) => {
    if (nextScreen === currentScreen && !state) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTransitionType(transition);
    if (state) {
      setScreenState(state);
    }

    // Sync browser URL history
    try {
      const newPath = nextScreen === 'home' ? '/' : `/${nextScreen}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState({ screen: nextScreen }, '', newPath);
      }
    } catch {
      // In constrained iframe environments, ignore pushState errors
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentScreen(nextScreen);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const initial = getInitialScreen();
      setCurrentScreen(initial);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title, canonical link, and meta description with current screen
  useEffect(() => {
    const titles: Record<string, string> = {
      'home': 'TV Repair Johannesburg | Samsung, LG, Hisense TV & Appliance Repair Gauteng | MR Gee',
      'services': 'Appliance & TV Repair Services Gauteng | MR Gee',
      'pricing-enquiry': 'Repair Pricing & Quotes | MR Gee Appliance Repair',
      'book-appointment': 'Book On-Site Repair Appointment | MR Gee Appliance Repair'
    };

    const descriptions: Record<string, string> = {
      'home': 'TV Repair Johannesburg, Appliance Repair Gauteng, Fridge Repair, Washing Machine Repair and same-day service across Gauteng. Call MR Gee today on 062 351 0025.',
      'services': 'Explore all domestic and commercial repair services across Gauteng. Fridges, washing machines, smart TVs, ovens, and cold rooms backed by a 6-month warranty.',
      'pricing-enquiry': 'Transparent pricing guide for appliance and television repair in Gauteng. R350 call-out inspection fee is 100% credited to your repair.',
      'book-appointment': 'Schedule a fast on-site repair appointment across Johannesburg, Roodepoort, Krugersdorp, and Pretoria with MR Gee.'
    };

    // Check if current screen is one of the 9 SEO targeted pages
    if (SEO_PAGES[currentScreen]) {
      const pageData = SEO_PAGES[currentScreen];
      document.title = pageData.title;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', pageData.metaDescription);
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://mr-geeappliancerepair.co.za/${pageData.slug}`);
      }
    } else {
      document.title = titles[currentScreen] || 'MR Gee Appliance Repair';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && descriptions[currentScreen]) {
        metaDesc.setAttribute('content', descriptions[currentScreen]);
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        const path = currentScreen === 'home' ? '' : currentScreen;
        canonical.setAttribute('href', `https://mr-geeappliancerepair.co.za/${path}`);
      }
    }
  }, [currentScreen]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Persistent App Header */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Screen container with animated page transitions */}
      <main className="flex-1 flex flex-col relative w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col w-full"
          >
            {currentScreen === 'home' && (
              <HomeScreen onNavigate={handleNavigate} />
            )}

            {currentScreen === 'services' && (
              <ServicesScreen onNavigate={handleNavigate} />
            )}

            {currentScreen === 'pricing-enquiry' && (
              <PricingScreen onNavigate={handleNavigate} />
            )}

            {currentScreen === 'book-appointment' && (
              <BookAppointmentScreen onNavigate={handleNavigate} initialState={screenState} />
            )}

            {/* Specialized 9 Targeted Service & Location Landing Pages */}
            {SEO_PAGES[currentScreen] && (
              <LandingPageScreen pageId={currentScreen} onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent App Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
