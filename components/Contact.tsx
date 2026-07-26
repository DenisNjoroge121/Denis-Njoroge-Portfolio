'use client';

import { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Form submission logic goes here (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-teal-400 text-sm font-mono">
            <Mail className="w-4 h-4" />
            <span>04. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Have a project in mind, a question about my work, or an opportunity to discuss? Send me a message and I'll get back to you promptly.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-slate-100">Contact Details</h3>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors p-2 rounded-lg bg-slate-950/50 border border-slate-800/60"
                >
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="truncate">hello@example.com</span>
                </a>

                <div className="flex items-center gap-3 text-slate-300 p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs font-mono text-slate-400 mb-3">CONNECT ELSEWHERE</p>
                <div className="flex items-center gap-3">
                  {/* Fixed GitHub SVG Icon */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  {/* Fixed LinkedIn SVG Icon */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Inputs (Name, Email, Message) - Unchanged */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">YOUR NAME</label>
                <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Doe" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/80 transition-all text-sm"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">YOUR EMAIL</label>
                <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@example.com" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/80 transition-all text-sm"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">MESSAGE</label>
                <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project or inquiry..." className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/80 transition-all text-sm resize-none"/>
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={status === 'submitting'} className="w-full py-3 px-6 rounded-lg bg-teal-400 text-slate-950 font-semibold text-sm hover:bg-teal-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10">
                {status === 'submitting' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
                ) : (
                  <><span className="font-semibold">Send Message</span><Send className="w-4 h-4" /></>
                )}
              </button>

              {/* Status Feedback Alerts */}
              {status === 'success' && (
                <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Message sent successfully! I'll be in touch soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Something went wrong. Please try emailing directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}