// src/components/ContactSection.tsx

import React from 'react';
// ERROR FIX: Changed the import to a CDN URL to resolve the module.
import { useForm, ValidationError } from '@formspree/react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xrbyagyp");

  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-xl">
          {state.succeeded ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Thanks for your message!</h3>
              <p className="text-gray-600">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    id="name"
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                    required
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your@email.com"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
                 <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
              </div>
              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          <div className="mt-12 pt-12 border-t border-gray-200">
            <div className="flex justify-center gap-6">
              <a href="https://github.com/vibrush" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform border border-white/60">
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-fatih-alhakim-436683217" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform border border-white/60">
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://instagram.com/fatih_hakim.al" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform border border-white/60">
                <Instagram className="w-5 h-5" />
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

