export default function BrandCentrePage() {
  return (
    <main className="lg:ml-64 p-6 md:p-12 min-h-screen relative overflow-visible ">
      {/* Abstract Background Ornaments */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] -z-10"></div>

      <header className="mb-16">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Identity Framework</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">Brand Centre</h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">Official guidelines and assets for Rotaract District 3192, maintaining visual integrity across all signals.</p>
        </div>
      </header>

      {/* LOGOS SECTION */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-on-surface flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            District Logos
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo variant: Master */}
          <div className="-container-low/50 rounded-[2.5rem] p-10 border border-white/20 shadow-sm group hover:bg-white transition-all">
            <div className="aspect-video bg-white rounded-3xl mb-10 flex flex-col items-center justify-center border border-outline/5 transition-transform group-hover:scale-95 duration-500">
               <div className="text-center">
                <span className="block font-black text-3xl tracking-tighter text-primary font-headline uppercase leading-none">Rotaract</span>
                <span className="block text-[8px] uppercase tracking-[0.5em] text-on-surface-variant font-black mt-1">District 3192</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-on-surface">Master Mark</h3>
                <p className="text-xs font-medium text-on-surface-variant leading-relaxed">Primary visual identifier for light-mode environments and physical media.</p>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all">PNG</button>
                <button className="flex-1 -container-high text-primary text-[10px] font-bold uppercase tracking-widest py-4 rounded-2xl hover:bg-primary hover:text-white transition-all">SVG</button>
              </div>
            </div>
          </div>

          {/* Logo variant: Negative */}
          <div className="bg-primary rounded-[2.5rem] p-10 shadow-xl group hover:-translate-y-2 transition-all">
            <div className="aspect-video bg-white/10 backdrop-blur-md rounded-3xl mb-10 flex flex-col items-center justify-center border border-white/10 transition-transform group-hover:scale-95 duration-500">
              <div className="text-center">
                <span className="block font-black text-3xl tracking-tighter text-white font-headline uppercase leading-none">Rotaract</span>
                <span className="block text-[8px] uppercase tracking-[0.5em] text-white/50 font-black mt-1">District 3192</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Negative Mark</h3>
                <p className="text-xs font-medium text-white/70 leading-relaxed">Optimized for dark backgrounds and night-mode digital interfaces.</p>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-white text-primary text-[10px] font-bold uppercase tracking-widest py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all">PNG</button>
                <button className="flex-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-primary transition-all">SVG</button>
              </div>
            </div>
          </div>

          {/* Logo variant: Tonal */}
          <div className="-container-low/50 rounded-[2.5rem] p-10 border border-white/20 shadow-sm group hover:bg-white transition-all">
            <div className="aspect-video bg-secondary-container/5 backdrop-blur-md rounded-3xl mb-10 flex flex-col items-center justify-center border border-secondary-container/10 transition-transform group-hover:scale-95 duration-500">
              <div className="text-center">
                <span className="block font-black text-3xl tracking-tighter text-secondary font-headline uppercase leading-none">Rotaract</span>
                <span className="block text-[8px] uppercase tracking-[0.5em] text-secondary/40 font-black mt-1">District 3192</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-on-surface">Secondary Mark</h3>
                <p className="text-xs font-medium text-on-surface-variant leading-relaxed">Alternative mark for specific aesthetic applications and sub-brands.</p>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all">PNG</button>
                <button className="flex-1 -container-high text-primary text-[10px] font-bold uppercase tracking-widest py-4 rounded-2xl hover:bg-primary hover:text-white transition-all">SVG</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PALETTE & TYPE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Colour Palette */}
        <div className="lg:col-span-7 space-y-12">
          <h3 className="text-2xl font-black text-on-surface flex items-center gap-3">
            <span className="w-1.5 h-6 bg-secondary-container rounded-full"></span>
            Tonal Spectrum
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="h-48 bg-primary rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-10 left-10 text-white">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Primary Token</p>
                   <p className="text-2xl font-black tracking-tight italic">Deep Purple</p>
                </div>
              </div>
              <div className="px-4 flex justify-between items-center text-[10px] font-bold text-primary uppercase tracking-widest opacity-60">
                <span>CSS: --primary</span>
                <span>HEX: #5300B9</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-48 bg-secondary-container rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                <div className="absolute bottom-10 left-10 text-white">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Secondary Token</p>
                   <p className="text-2xl font-black tracking-tight italic">Pulse Blue</p>
                </div>
              </div>
              <div className="px-4 flex justify-between items-center text-[10px] font-bold text-secondary-container uppercase tracking-widest opacity-60">
                <span>CSS: --secondary-container</span>
                <span>HEX: #316BF3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="lg:col-span-5 space-y-12">
          <h3 className="text-2xl font-black text-on-surface flex items-center gap-3">
            <span className="w-1.5 h-6 bg-tertiary-container rounded-full"></span>
            Typography GUIDES
          </h3>
          
          <div className="-container-low/50 rounded-[2.5rem] p-10 border border-white/20 space-y-12 shadow-sm">
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">System Font</p>
              <h3 className="text-4xl font-black text-primary tracking-tight uppercase leading-none">Inter Variable</h3>
              <p className="text-primary font-bold text-base tracking-[0.3em] overflow-hidden whitespace-nowrap">ABCDEFGHIJKLMNOPQRSTUVWXY&</p>
            </div>
            
            <div className="space-y-4 pt-10 border-t border-outline/5 leading-relaxed">
              <p className="text-on-surface-variant font-medium text-sm italic opacity-70">
                A modern, high-legibility sans-serif optimized for deep readability and geometric clarity across the digital horizon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
