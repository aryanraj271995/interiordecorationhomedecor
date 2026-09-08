
"use client";
import React, { useState } from 'react';
import { faqs, contactInfo } from '@/data/content';
import { ChevronDown, Phone, MessageCircle, MapPin } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-gray-200 text-gray-500 text-xs font-bold tracking-widest uppercase py-1 px-3 mb-8 inline-block">[ DEMO / PLACEHOLDER TESTIMONIAL ]</span>
          <div className="flex justify-center text-[#D4AF37] mb-8">
            {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-xl">★</span>)}
          </div>
          <p className="text-3xl md:text-5xl font-serif text-gray-900 leading-relaxed mb-10 italic">
            "Beautiful work and excellent attention to detail. The team completely transformed our space into something beyond our expectations."
          </p>
          <div>
            <p className="font-semibold text-gray-900 tracking-widest uppercase text-sm mb-1">Customer Name</p>
            <p className="text-gray-500 text-sm">Home Décor Client</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border-b border-gray-200">
              <button
                className="w-full py-6 text-left flex justify-between items-center font-medium text-gray-900 hover:text-graapes-purple transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-xl font-serif">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-500 ${openIndex === i ? 'rotate-180 text-graapes-purple' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 font-light leading-relaxed text-lg">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">Let’s Create Your Space</h2>

            <div className="space-y-12 mt-12">
              <div>
                <h3 className="font-serif text-2xl text-gray-900 mb-2 uppercase tracking-wider">INTERIOR DECORATION</h3>
                <p className="text-gray-600 font-light leading-relaxed max-w-sm mb-6">
                  {contactInfo.address}
                </p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-graapes-purple hover:text-gray-900 transition-colors">
                  <MapPin size={16} /> Get Directions
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-3">Phone</p>
                <p className="text-3xl font-serif text-gray-900 mb-6">{contactInfo.phone}</p>
                <div className="flex gap-4">
                  <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-900 px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-colors">
                    <Phone size={16} /> Call Now
                  </a>
                  <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1DA851] px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-colors">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Looking For Something Specific?</h3>
            <p className="text-gray-500 font-light mb-8">Tell us what you are looking for and our team will help you find the right interior or décor solution.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Requirement</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors" required>
                  <option value="">Select Requirement</option>
                  <option>Interior Decoration</option>
                  <option>Wallpaper</option>
                  <option>Curtains</option>
                  <option>Furniture</option>
                  <option>Wall Décor</option>
                  <option>Lighting</option>
                  <option>Home Décor</option>
                  <option>Modular Interior</option>
                  <option>Wholesale</option>
                  <option>Retail</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 hover:bg-graapes-purple text-white py-4 text-sm font-semibold tracking-wider uppercase transition-colors">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-32 bg-[#0A0A0A] text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#0A0A0A]/50"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl mx-auto leading-tight">Your Space Deserves Better.</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Explore beautiful décor and thoughtful interior solutions for your next space.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#contact" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-200 px-10 py-5 text-sm font-semibold tracking-wider uppercase transition-colors shadow-2xl">
            Get Consultation
          </a>
          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-5 text-sm font-semibold tracking-wider uppercase transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
