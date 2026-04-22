import newslettersData from "@/mock/newsletters.json";

export default function NewsletterPage() {
  const newsletters = newslettersData;

  return (
    <main className="lg:ml-64 min-h-screen relative overflow-visible pb-24 ">
      {/* Background Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] -z-10"></div>

      <header className="p-8 md:p-12 mb-12">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">The Archive</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">The Golden Wheel</h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">Official monthly chronicles and impact reports of District 3192.</p>
        </div>
      </header>

      <section className="p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newsletters.map((nl, index) => (
            <div key={index} className="group flex flex-col gap-6">
              {/* Issue Cover */}
              <div className="relative -container-lowest rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 aspect-[3/4] border border-white/40 group-hover:-translate-y-2">
                <img src={nl.thumbnail_url} alt={nl.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                
                {/* Download Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-md p-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/20">
                    <span className="material-symbols-outlined text-white text-3xl">menu_book</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">Access Edition</p>
                    <p className="text-white/60 text-[10px] leading-relaxed italic">Download the monthly chronicle in PDF format.</p>
                  </div>
                  <a href={nl.file_url} className="bg-white text-primary font-bold px-8 py-3.5 rounded-xl uppercase tracking-widest text-[10px] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">download</span>
                    Retrieve PDF
                  </a>
                </div>
              </div>
              
              {/* Issue Info */}
              <div className="space-y-2 px-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                  <p className="text-[9px] font-bold text-primary uppercase tracking-widest leading-none">{nl.club_name}</p>
                </div>
                <h3 className="text-xl font-black text-on-surface uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">{nl.title}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-outline/5 leading-none">
                  <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
                    {new Date(nl.published_at).toLocaleDateString('en-IN', {month: 'long', year: 'numeric'})}
                  </p>
                  <span className="material-symbols-outlined text-outline/30 group-hover:text-primary transition-colors text-xl">arrow_right_alt</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
