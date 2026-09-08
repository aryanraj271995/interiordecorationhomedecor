"use client";
import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Globe, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/content';

export function FeaturedShowcase() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/3] bg-gray-100 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" alt="Luxury Interior" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-6 block">DESIGNED FOR YOUR SPACE</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-gray-900">Details That Make Every Space Feel Special</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
              From statement walls and premium furnishings to thoughtfully selected furniture, lighting, and décor, every element we offer can transform the character of your space and reflect your unique style.
            </p>
            <a href="#contact" className="inline-flex items-center gap-4 bg-gray-900 text-white hover:bg-graapes-purple px-10 py-5 text-sm tracking-wider uppercase font-medium transition-all shadow-xl">
              Talk To Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const images = [
    { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80", title: "Modern Living Space" },
    { src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80", title: "Elegant Bedroom" },
    { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80", title: "Contemporary Office" },
    { src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80", title: "Statement Wall" },
    { src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80", title: "Luxury Décor" },
    { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80", title: "Modern Workspace" }
  ];
  return (
    <section id="our-work" className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-16 text-center">Explore Our Work</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Living Room', 'Bedroom', 'Office', 'Wall Décor', 'Furniture', 'Commercial'].map((cat, i) => (
            <button key={cat} className={`px-6 py-2 text-sm tracking-wider uppercase ${i === 0 ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-500 hover:text-gray-900 border border-gray-200'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, i) => (
            <div key={i} className="group relative aspect-[4/3] bg-gray-200 overflow-hidden cursor-pointer">
              <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                <span className="font-serif text-2xl mb-4 text-center px-4">{item.title}</span>
                <span className="flex items-center gap-2 text-sm tracking-widest uppercase font-semibold border-b border-white pb-1">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    { num: "01", title: "Thoughtful Design" },
    { num: "02", title: "Quality Décor" },
    { num: "03", title: "Complete Solutions" },
    { num: "04", title: "Personalized Service" },
  ];
  return (
    <section id="why-us" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-20 text-center">Why Choose Interior Decoration?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="text-center group">
              <span className="text-6xl font-serif text-gray-100 block mb-6 transition-colors duration-500 group-hover:text-graapes-purple/20">{r.num}</span>
              <h3 className="text-xl font-serif text-gray-900">{r.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OnlinePresence() {
  return (
    <section className="py-24 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h3 className="text-3xl font-serif mb-12">Connect With Us</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Google', icon: Globe },
            { name: 'Instagram', icon: Instagram },
            { name: 'Facebook', icon: Facebook },
            { name: 'WhatsApp', icon: MessageCircle }
          ].map(platform => (
            <div key={platform.name} className="bg-white/5 border border-white/10 px-8 py-5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
              <platform.icon size={24} className="text-[#D4AF37]" />
              <span className="tracking-widest uppercase text-sm">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
