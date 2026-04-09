import momsData from "@/mock/moms.json";
import Link from "next/link";

export default function MOMPage() {
  const moms = momsData;

  return (
    <main className="pt-20 bg-surface min-h-screen">
      {/* MOM HEADER */}
      <header className="bg-primary text-white pt-32 pb-24 relative overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full aqueous-gradient opacity-20 rounded-bl-[10rem] blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-surface/5 rounded-tr-[15rem] blur-2xl"></div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-black tracking-[0.3em] uppercase font-headline border border-white/10">
              Intelligence Feed
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter font-headline uppercase leading-none italic">Echo Protocol</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-body font-medium italic">Autonomous meeting transcription and action token extraction system.</p>
          </div>
          
          <Link href="/mom/new" className="group relative bg-white text-primary font-black px-12 py-6 rounded-2xl uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:translate-y-[-4px] active:translate-y-0 transition-all overflow-hidden flex items-center gap-4">
            <span className="relative z-10 flex items-center gap-3">Initialize New Sequence <span className="material-symbols-outlined text-lg">mic</span></span>
            <div className="absolute inset-0 aqueous-gradient opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </Link>
        </div>
      </header>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto space-y-12">
          
          {/* Productivity Analytics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: 'Total Sequences', val: moms.length, icon: 'history', color: 'text-primary' },
              { label: 'Pending Tokens', val: '12', icon: 'pending_actions', color: 'text-error' },
              { label: 'Temporal Gain', val: '4.5H', icon: 'auto_awesome', color: 'text-green-500' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/30 fluid-shadow flex items-center gap-8 group hover:bg-surface-container-lowest transition-all">
                <div className="w-16 h-16 rounded-[1.5rem] bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                </div>
                <div className="space-y-1">
                  <p className={`text-4xl font-black font-headline tracking-tighter leading-none italic uppercase ${stat.color}`}>{stat.val}</p>
                  <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-[.4em] opacity-40 italic">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sequence Manifest */}
          <div className="bg-surface-container-low rounded-[3.5rem] border border-outline-variant/30 fluid-shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest border-b border-primary/5">
                    <th className="py-10 px-10 text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] leading-none italic">Session ID / Context</th>
                    <th className="py-10 px-10 text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] leading-none italic">Temporal Frame</th>
                    <th className="py-10 px-10 text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] leading-none italic">Origin Node</th>
                    <th className="py-10 px-10 text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] leading-none italic text-right">Synchronization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {moms.map((mom: any, idx: number) => (
                    <tr key={idx} className="hover:bg-surface-container-lowest transition-all group cursor-pointer">
                      <td className="py-8 px-10">
                        <Link href={`/mom/${mom.id}`} className="block space-y-2">
                          <p className="text-2xl font-black text-primary font-headline tracking-tighter group-hover:text-primary-container transition-colors uppercase italic">{mom.title}</p>
                          <p className="text-[10px] text-on-surface-variant font-medium italic opacity-50 max-w-sm truncate">"{mom.transcript_text}"</p>
                        </Link>
                      </td>
                      <td className="py-8 px-10 whitespace-nowrap">
                        <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest leading-none">{new Date(mom.meeting_date).toLocaleDateString('en-IN', {month: 'short', day: 'numeric', year: 'numeric'})}</p>
                      </td>
                      <td className="py-8 px-10 whitespace-nowrap">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] bg-primary/5 text-primary border border-primary/10">
                          {mom.club_id}
                        </span>
                      </td>
                      <td className="py-8 px-10 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-3">
                           <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-30 italic">Details Retrievable</span>
                           <span className="material-symbols-outlined text-primary opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all">arrow_forward</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
