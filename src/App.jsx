import React, { useState } from 'react';
import {
  Instagram, Facebook, Linkedin, Twitter, MessageCircle,
  Apple, ArrowUpRight, Send, ShieldCheck, Mail, Phone, ChevronDown, ChevronUp,
  CheckCircle2, Loader2, UserPlus
} from 'lucide-react';

export default function App() {
  // Dropdown is already open by default
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/xwlewlwp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleSaveContact = () => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      // Direct Android system intent: opens the phone's native Contacts app with prefilled info (No download required)
      const intentUrl =
        'intent:#Intent;' +
        'action=android.intent.action.INSERT;' +
        'type=vnd.android.cursor.dir/contact;' +
        'S.name=' + encodeURIComponent('Dr. Harikrishna Osuru') + ';' +
        'S.phone=' + encodeURIComponent('+17329868131') + ';' +
        'S.email=' + encodeURIComponent('support@atidinricare.com') + ';' +
        'S.company=' + encodeURIComponent('AtidiNRI Care') + ';' +
        'S.job_title=' + encodeURIComponent('Founder & CEO') + ';' +
        'S.notes=' + encodeURIComponent('https://atidinricare.com') + ';' +
        'end';

      window.location.href = intentUrl;
      return;
    }

    // For iOS / Desktop: triggers direct contact card addition
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Osuru;Harikrishna;;Dr.;
FN:Dr. Harikrishna Osuru
ORG:AtidiNRI Care
TITLE:Founder & CEO
TEL;TYPE=CELL,VOICE:+17329868131
EMAIL;TYPE=WORK:support@atidinricare.com
URL:https://atidinricare.com
NOTE:Founder & CEO at AtidiNRI Care - Premium Cross-Border Healthcare & Dental Care Services for NRIs
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dr_Harikrishna_Osuru.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full bg-[#FFF9F5] font-sans text-slate-700 flex flex-col relative selection:bg-[#FF4500] selection:text-white overflow-x-hidden scroll-smooth">

      {/* Clean Ambient Radial Glows (Background dots completely removed) */}
      <div
        className="fixed -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 bg-[radial-gradient(circle,#FF4500_0%,transparent_70%)] will-change-transform"
      />
      <div
        className="fixed -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none z-0 opacity-15 bg-[radial-gradient(circle,#2563EB_0%,transparent_70%)] will-change-transform"
      />

      {/* --- NAVBAR --- */}
      <header className="relative z-10 w-full px-4 sm:px-6 py-4 flex items-center bg-white/95 border-b border-orange-100/80 shadow-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Increased Logo Container Size */}
          <div className="h-16 sm:h-20 flex items-center justify-center p-1">
            <img
              src="/aditi logo png.png"
              alt="AtidiNRI Care Logo"
              className="h-full w-auto object-contain scale-125"
              loading="eager"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="w-px h-12 bg-orange-200 hidden sm:block"></div>
          <div>
            <span className="font-black text-slate-900 block leading-tight text-lg sm:text-xl tracking-tight">
              Atidi NRI Care
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold text-[#FF4500] uppercase tracking-wider block mt-0.5">
              PREMIUM DENTAL CARE SERVICES
            </span>
          </div>
        </div>
      </header>

      {/* --- MAIN DASHBOARD GRID --- */}
      <main className="relative z-10 flex-grow w-full max-w-[1500px] mx-auto p-3 sm:p-6 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

         {/* COLUMN 1: PROFILE */}
          <div className="bg-white rounded-[2rem] border border-orange-100/80 p-5 sm:p-8 flex flex-col relative shadow-[0_4px_20px_rgba(255,69,0,0.04)] transform-gpu">

            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5 mb-6">
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-tr from-[#FF4500] via-[#FF8000] to-[#2563EB] p-1.5 flex-shrink-0 shadow-xl shadow-[#FF4500]/15 transition-transform hover:scale-105 duration-300">
                <img
                  src="/profile.jpeg"
                  alt="Dr. Harikrishna Osuru"
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                  loading="eager"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"; }}
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Dr. Harikrishna <span className="text-[#FF4500]">Osuru</span>
                </h1>
                <p className="text-[#2563EB] font-bold text-base sm:text-lg mt-1">Founder & CEO</p>
                <p className="text-slate-400 text-xs font-extrabold uppercase tracking-widest mt-0.5">AtidiNRI Care</p>
              </div>
            </div>

            {/* Collapsible About Text (Open by default) */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setIsBioOpen(!isBioOpen)}
                className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border-l-4 border-l-[#FF4500] border-y border-r border-orange-100/80 text-[11px] font-bold text-slate-800 uppercase tracking-wider hover:bg-orange-100/60 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF4500]" />
                  About 
                </span>
                <div className="flex items-center gap-1 text-[10px] text-[#FF4500] font-semibold lowercase">
                  <span>{isBioOpen ? 'hide' : 'read bio'}</span>
                  {isBioOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>
              </button>

              {isBioOpen && (
                <div className="text-slate-600 text-sm leading-relaxed pr-1">
                  <p>
                    As Founder & CEO of AtidiNRI Care, I lead our mission to simplify cross-border healthcare for NRIs. We bridge the geographical gap by connecting patients with verified, top-tier dental hospitals in India—combining transparent pricing, 24/7 dedicated care coordination, and seamless post-treatment follow-ups with partner clinics across the USA.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Actions Area */}
            <div className="mt-auto pt-4 border-t border-orange-100/60">
              {/* Save to Contacts Button */}
              <button
                type="button"
                onClick={handleSaveContact}
                className="w-full py-3.5 px-4 mb-3 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] hover:opacity-95 active:scale-[0.99] text-white font-bold rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FF4500]/20 transition-all cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                Add to Contacts
              </button>

              {/* Quick Actions (Call, WhatsApp, Email) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <a
                  href="tel:+17329868131"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl border border-orange-100/80 bg-[#FFF9F5] hover:border-[#FF4500] transition-colors group shadow-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#FF4500] group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Call</span>
                </a>

                <a
                  href="https://wa.me/17329868131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl border border-orange-100/80 bg-[#FFF9F5] hover:border-green-500 transition-colors group shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-green-600 group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">WhatsApp</span>
                </a>

                <a
                  href="mailto:support@atidinricare.com"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl border border-orange-100/80 bg-[#FFF9F5] hover:border-[#FF4500] transition-colors group shadow-sm"
                >
                  <Mail className="w-4 h-4 text-[#FF4500] group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: APPS & SOCIALS */}
          <div className="flex flex-col gap-4 sm:gap-6">

            {/* Mobile Applications */}
            <div className="bg-white rounded-[2rem] border border-orange-100/80 p-5 sm:p-6 flex flex-col shadow-[0_4px_20px_rgba(255,69,0,0.04)] transform-gpu">
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Mobile Applications</h2>
              <div className="space-y-3">
                <a
                  href="https://apps.apple.com/us/app/atidi-customer/id6759445324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#FFF9F5] rounded-2xl border border-orange-100/60 hover:border-[#FF4500] transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                      <Apple className="w-4 h-4 fill-current" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">iOS App</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-orange-100 text-slate-400 group-hover:bg-[#FF4500] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.atidi_patient.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#FFF9F5] rounded-2xl border border-orange-100/60 hover:border-[#FF4500] transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 text-slate-800 flex items-center justify-center shadow-sm text-base">
                      🤖
                    </div>
                    <span className="font-bold text-slate-800 text-sm">Android App</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-orange-100 text-slate-400 group-hover:bg-[#FF4500] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-[2rem] border border-orange-100/80 p-5 sm:p-6 flex flex-col shadow-[0_4px_20px_rgba(255,69,0,0.04)] transform-gpu">
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Find Me On</h2>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.instagram.com/atidinricare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FFF9F5] rounded-2xl border border-orange-100/60 hover:border-pink-500 transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs truncate">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-pink-500 flex-shrink-0" />
                </a>

                <a
                  href="https://www.facebook.com/atidinricare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FFF9F5] rounded-2xl border border-orange-100/60 hover:border-[#1877F2] transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Facebook className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs truncate">Facebook</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#1877F2] flex-shrink-0" />
                </a>

                <a
                  href="https://www.linkedin.com/company/atidinricare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FFF9F5] rounded-2xl border border-orange-100/60 hover:border-[#0A66C2] transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Linkedin className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs truncate">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#0A66C2] flex-shrink-0" />
                </a>

                <a
                  href="https://x.com/atidinricare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FFF9F5] rounded-2xl border border-orange-100/60 hover:border-slate-900 transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Twitter className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs truncate">X Platform</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-slate-900 flex-shrink-0" />
                </a>
              </div>
            </div>

          </div>

          {/* COLUMN 3: CONTACT FORM */}
          <div className="bg-white rounded-[2rem] border border-orange-100/80 p-5 sm:p-8 flex flex-col shadow-[0_4px_20px_rgba(255,69,0,0.04)] transform-gpu">
            <div className="mb-4">
              <h3 className="text-xl font-extrabold text-slate-900">Let's Connect</h3>
              <p className="text-slate-500 text-xs mt-0.5 font-medium">Send an inquiry directly to the executive office.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-6 bg-[#FFF9F5] rounded-2xl border border-orange-100">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Inquiry Received!</h4>
                <p className="text-xs text-slate-600 mb-5 max-w-xs">
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} action="https://formspree.io/f/xwlewlwp" method="POST" className="flex flex-col flex-grow justify-between gap-3">
                {formStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
                    Something went wrong sending your message. Please try again or reach out directly via email.
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      required
                      className="w-full bg-[#FFF9F5] border border-orange-100/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#FF4500] focus:bg-white outline-none transition-colors shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="w-full bg-[#FFF9F5] border border-orange-100/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#FF4500] focus:bg-white outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#FFF9F5] border border-orange-100/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#FF4500] focus:bg-white outline-none transition-colors shadow-sm"
                  />
                </div>

                <div className="flex-grow flex flex-col relative">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="How can we assist you?"
                    required
                    className="w-full h-28 sm:h-full min-h-[100px] bg-[#FFF9F5] border border-orange-100/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#FF4500] focus:bg-white outline-none resize-none transition-colors shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 mt-1 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-4 text-center border-t border-orange-100 bg-white/80">
        <p className="text-xs text-slate-500 font-medium">
          © 2026 AtidiNRI Care. All rights reserved.
        </p>
      </footer>
    </div>
  );
}