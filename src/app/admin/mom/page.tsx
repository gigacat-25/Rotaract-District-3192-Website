import momsData from "@/mock/moms.json";

export default function AdminMomPage() {
  const moms = momsData;

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none">Meeting Records</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">Official Minutes of Meetings Repository</p>
        </div>
        <button className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-8 py-4 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <span className="material-symbols-outlined text-base">add_circle</span>
          Record New Session
        </button>
      </header>

      {/* MOM Upload/AI Section */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <div className="xl:col-span-7 bg-surface-container-lowest rounded-[3rem] p-10 border border-white shadow-2xl space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>
          <div className="relative z-10 space-y-2">
            <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight">Upload Session Media</h2>
            <p className="text-xs text-on-surface-variant font-medium opacity-60 leading-relaxed italic">Convert physical nodes or audio captures into structured district ledger entries.</p>
          </div>
          
          <div className="border-2 border-dashed border-outline/10 rounded-[2rem] p-16 flex flex-col items-center justify-center bg-surface-container-low/30 hover:bg-primary/5 transition-all cursor-pointer group/upload">
            <div className="w-20 h-20 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-primary mb-6 group-hover/upload:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-4xl">cloud_upload</span>
            </div>
            <p className="text-sm font-black text-on-surface uppercase tracking-tight">Synchronize Local Files</p>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-2 opacity-40">MP3, WAV, PDF, PNG (MAX 50MB)</p>
            
            <div className="mt-10 flex gap-4">
               <button className="px-6 py-3 bg-white text-primary rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm hover:shadow-lg transition-all flex items-center gap-2">
                 <span className="material-symbols-outlined text-base">mic</span>
                 Record Audio
               </button>
               <button className="px-6 py-3 bg-white text-primary rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm hover:shadow-lg transition-all flex items-center gap-2">
                 <span className="material-symbols-outlined text-base">description</span>
                 Upload Text
               </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
               <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60 italic">AI Intelligence Enabled</span>
             </div>
             <button className="px-10 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
               Dispatch to Ledger
             </button>
          </div>
        </div>

        <div className="xl:col-span-5 flex flex-col gap-8">
           <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 border border-white shadow-2xl h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Live Transcript Preview</h3>
                 <span className="material-symbols-outlined text-primary/40 animate-spin-slow">auto_awesome</span>
              </div>
              <div className="space-y-6 flex-1">
                 {[1,2,3].map((i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-surface-container-low flex-shrink-0 flex items-center justify-center text-[10px] font-black text-primary border border-outline/5 uppercase">P{i}</div>
                       <div className="flex-grow space-y-2 pt-2">
                          <div className="h-2 bg-on-surface border border-outline/5 rounded-full w-[90%] opacity-[0.03]"></div>
                          <div className="h-2 bg-on-surface border border-outline/5 rounded-full w-[70%] opacity-[0.02]"></div>
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-12 p-6 bg-surface-container-low/50 rounded-2xl border border-white/40 text-[10px] text-on-surface-variant font-bold leading-relaxed italic uppercase tracking-wider opacity-60">
                 * Analysis in progress. Cluster identification and action mapping will be available post-synchronization.
              </div>
           </div>
        </div>
      </section>

      {/* Records Archive */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
           <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight">Archived Record sets</h2>
           <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                 <span className="material-symbols-outlined text-xl">filter_list</span>
              </button>
              <button className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                 <span className="material-symbols-outlined text-xl">sort</span>
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {moms.map((mom, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col group h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-surface-container-low text-primary rounded-2xl transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-xl">history_edu</span>
                </div>
                <button className="text-outline/40 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
              <h4 className="text-lg font-black text-on-surface uppercase tracking-tight mb-2 group-hover:text-primary transition-colors leading-tight">{mom.title}</h4>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest flex items-center gap-2 opacity-60 mb-6 italic">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                {new Date(mom.meeting_date).toLocaleDateString()}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                 <span className="px-3 py-1 bg-surface-container-low rounded-lg text-[8px] font-black uppercase tracking-widest text-on-surface-variant/60">{mom.club_name.split(' ').pop()}</span>
                 <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest 
                   ${mom.status === 'transcribed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                   {mom.status}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
