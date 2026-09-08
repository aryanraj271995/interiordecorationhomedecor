"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { contactInfo } from '@/data/content';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-wider uppercase ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
            INTERIOR DECORATION
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Products', 'Services', 'Our Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm tracking-widest uppercase hover:text-graapes-purple transition-colors ${isScrolled ? 'text-gray-800' : 'text-white/90 hover:text-white'}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg ${isScrolled ? 'bg-graapes-purple hover:bg-graapes-dark text-white shadow-graapes-purple/20' : 'bg-white text-gray-900 hover:bg-gray-100 shadow-black/10'}`}>
            Get Consultation
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} color={isScrolled ? '#111827' : '#ffffff'} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col px-6 border-t border-gray-100">
          {['Home', 'About', 'Products', 'Services', 'Our Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="py-4 text-gray-900 tracking-wider uppercase text-sm font-medium border-b border-gray-100 last:border-0" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#contact" className="mt-6 bg-graapes-purple text-white text-center py-4 rounded-md font-medium tracking-wide uppercase text-sm" onClick={() => setMobileMenuOpen(false)}>
            Get Consultation
          </a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div>
          <h3 className="text-2xl font-serif mb-2 tracking-wider">INTERIOR DECORATION</h3>
          <p className="text-graapes-light text-sm tracking-widest uppercase mb-6">Interior & Home Décor</p>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            {contactInfo.address}
          </p>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            {contactInfo.phone}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-6 tracking-wider uppercase text-gray-300">Navigation</h4>
          <ul className="space-y-3 text-gray-400">
            {['Home', 'About', 'Products', 'Services', 'Our Work', 'Contact'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-800 pt-8">
        <span>© {new Date().getFullYear()} Interior Decoration. All rights reserved.</span>
        <span className="mt-4 md:mt-0 opacity-50 hover:opacity-100 transition-opacity">Digital presence powered by Graapes.</span>
      </div>
    </footer>
  );
}
