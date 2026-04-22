"use client";

import Link from "next/link";

export default function NewMOMPage() {
  return (
    <main className="min-h-screen pt-20">
      <header className="bg-primary text-white pt-24 pb-20 relative overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full aqueous-gradient opacity-20 rounded-bl-[10rem] blur-3xl"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto relative z-10 flex items-center gap-10">
          <Link href="/mom" className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all group border border-white/10 shrink-0">
            <span className="material-symbols-outlined text-2xl group-hover:translate-x-[-4px] transition-transform">arrow_back</span>
          </Link>
          <div className="space-y-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[8px] font-black tracking-[0.4em] uppercase border border-white/10">Active Capture</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-headline uppercase leading-none italic">Initialize Sequence</h1>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 lg:px-12 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          
          <div className="-container-low rounded-[4rem] border border-outline-variant/30 fluid-shadow overflow-hidden group">
            
            <div className="p-12 lg:p-16 border-b border-primary/5 -container-lowest">
              <div className="space-y-10">
                <input 
                  type="text" 
                  placeholder="Session Identifier (e.g. Tactical Board Sync)" 
                  className="w-full text-4xl lg:text-5xl font-black text-primary border-none p-0 focus:ring-0 placeholder-primary/10 bg-transparent font-headline tracking-tighter uppercase italic outline-none"
                />
                <div className="flex flex-wrap gap-6">
                  <div className="bg-primary/5 rounded-2xl px-6 py-4 border border-primary/10 flex items-center gap-4">
                     <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                     <input type="date" className="bg-transparent border-none text-xs font-black text-primary uppercase tracking-widest p-0 focus:ring-0 outline-none" />
                  </div>
                  <div className="bg-primary/5 rounded-2xl px-6 py-4 border border-primary/10 flex items-center gap-4">
                     <span className="material-symbols-outlined text-primary text-xl">layers</span>
                     <select className="bg-transparent border-none text-xs font-black text-primary uppercase tracking-[0.2em] p-0 focus:ring-0 italic outline-none">
                       <option>General Body Sequence</option>
                       <option>Strategic Board Sync</option>
                       <option>Tactical Committee Feed</option>
                       <option>Ad-hoc Transmission</option>
                     </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-16 lg:p-24 -container-low flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 aqueous-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-1000"></div>
              
              {/* Capture Node */}
              <div className="relative w-48 h-48 mb-12 flex items-center justify-center cursor-pointer">
                <div className="absolute inset-0 bg-error/10 rounded-full scale-125 animate-pulse"></div>
                <div className="absolute inset-0 bg-error/5 rounded-full scale-150 animate-ping opacity-30"></div>
                <div className="relative w-36 h-36 bg-error rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-95 active:scale-90 transition-all duration-300 border-8 border-white/20">
                   <span className="material-symbols-outlined text-5xl">mic</span>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-black text-primary font-headline tracking-tighter uppercase italic leading-none">Initialize Capture</h2>
                <p className="text-[11px] text-on-surface-variant font-medium max-w-sm text-center uppercase tracking-widest opacity-40 leading-relaxed italic">Intelligence engine will perform real-time extraction of action tokens and decision nodes during transmission.</p>
              </div>
              
              <div className="mt-20 flex flex-col sm:flex-row items-center gap-8 border-t border-primary/5 pt-12 w-full max-w-lg">
                <span className="text-[9px] font-black text-on-surface-variant/30 uppercase tracking-[0.4em] shrink-0">Protocol: External Feed</span>
                <button className="w-full bg-white border border-outline-variant/30 text-primary font-black py-4 rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-4 group/upload">
                  <span className="material-symbols-outlined text-lg opacity-40 group-hover/upload:opacity-100">cloud_upload</span>
                  Ingest Digital Audio (MP3/M4A)
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
