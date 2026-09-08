"use client";
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { categories, services } from '@/data/content';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Modern Indian Home Interior"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center md:text-left pt-20">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold tracking-widest mb-8 border border-white/20 uppercase shadow-xl">
          INTERIOR & HOME DÉCOR
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 max-w-4xl drop-shadow-lg">
          Beautiful Spaces,<br />
          <span className="text-[#D4AF37] font-serif italic">Designed Around You.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12 leading-relaxed font-light drop-shadow-md">
          Thoughtfully selected décor and interior solutions for homes, offices and commercial spaces.
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
          <a href="#our-work" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-xl text-center">
            Explore Our Work
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-graapes-purple hover:bg-graapes-dark text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-xl text-center">
            Get Consultation
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-300 tracking-widest uppercase font-medium">
          Wholesale & Retail • Interior Solutions • Home Décor
        </p>
      </div>

      <div className="hidden lg:flex absolute bottom-16 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl flex-col shadow-2xl">
        <p className="text-white text-sm font-semibold tracking-widest uppercase mb-2">INTERIOR</p>
        <p className="text-white text-sm font-semibold tracking-widest uppercase mb-2">HOME DÉCOR</p>
        <p className="text-white text-sm font-semibold tracking-widest uppercase">SOLUTIONS</p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" alt="Elegant interior" className="object-cover w-full h-full" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">Transforming Spaces Into Beautiful Experiences</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              At Interior Decoration, we bring together thoughtful interior solutions and beautiful home décor to help create spaces that feel comfortable, elegant and uniquely yours.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
              From high-quality products to design-focused solutions, we cater to both wholesale and retail needs with personalized customer service that ensures every detail is perfect.
            </p>
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              <div>
                <p className="text-3xl font-serif text-graapes-purple mb-2">10+</p>
                <p className="text-sm tracking-wider uppercase text-gray-500 font-medium">Décor Categories</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-graapes-purple mb-2">W&R</p>
                <p className="text-sm tracking-wider uppercase text-gray-500 font-medium">Wholesale & Retail</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-graapes-purple mb-2">360°</p>
                <p className="text-sm tracking-wider uppercase text-gray-500 font-medium">Complete Interior Solutions</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-graapes-purple mb-2">1-on-1</p>
                <p className="text-sm tracking-wider uppercase text-gray-500 font-medium">Personalized Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Everything Your Space Needs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className={`group relative overflow-hidden bg-gray-100 ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'}`}>
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-white mb-3">{cat.title}</h3>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 font-light leading-relaxed">{cat.desc}</p>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:bg-white hover:text-gray-900">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Complete Interior & Décor Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, i) => (
            <div key={i} className="bg-white p-10 hover:shadow-2xl transition-all duration-500 group border border-gray-100">
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center text-graapes-purple mb-8 group-hover:bg-graapes-purple group-hover:text-white transition-colors duration-500">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">{srv.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light mb-8">{srv.desc}</p>
              <a href="#contact" className="text-sm font-semibold tracking-wider uppercase text-graapes-purple group-hover:text-gray-900 transition-colors flex items-center gap-2">
                Enquire Now <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
