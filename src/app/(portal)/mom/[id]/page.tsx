import momsData from "@/mock/moms.json";
export const runtime = 'edge';
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return momsData.map((mom: any) => ({
    id: mom.id,
  }));
}

export default function MOMDetailPage({ params }: { params: { id: string } }) {
  const mom = momsData.find((m: any) => m.id === params.id);

  if (!mom) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* MOM HEADER */}
      <header className="bg-primary text-white pt-32 pb-24 relative overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full aqueous-gradient opacity-20 rounded-bl-[10rem] blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-surface/5 rounded-tr-[15rem] blur-2xl"></div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex items-center gap-10">
            <Link href="/mom" className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all group border border-white/10 shrink-0">
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-[-4px] transition-transform">arrow_back</span>
            </Link>
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[9px] font-black tracking-[.2em] uppercase border border-white/10">Protocol Archive</span>
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest italic">{new Date(mom.meeting_date).toLocaleDateString('en-IN', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</span>
               </div>
               <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter font-headline uppercase leading-none italic">{mom.title}</h1>
            </div>
          </div>
          
          <div className="flex gap-4 shrink-0">
            <button className="bg-white/5 backdrop-blur-xl text-white font-black px-8 py-4 rounded-2xl uppercase tracking-[0.2em] text-[10px] border border-white/10 hover:bg-white/10 transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">share</span>
              Broadcast
            </button>
            <button className="bg-white text-primary font-black px-10 py-5 rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:translate-y-[-4px] active:translate-y-0 transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">description</span>
              Extract PDF
            </button>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col xl:flex-row gap-20">
          
          {/* Document Stream */}
          <div className="xl:w-2/3 space-y-12">
            
            {/* AI Executive Abstract */}
            <div className="bg-primary/5 rounded-[3rem] p-10 lg:p-12 border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 left-10 -translate-y-1/2 bg-primary text-white text-[8px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full border border-primary/20 shadow-xl z-20">
                Intelligence Abstract
              </div>
              <div className="absolute inset-0 aqueous-gradient opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
              <p className="text-primary text-2xl font-black font-headline tracking-tighter uppercase italic leading-relaxed relative z-10">"{mom.transcript_text}"</p>
            </div>

            {/* The Minutes */}
            <div className="bg-surface-container-low rounded-[4rem] border border-outline-variant/30 fluid-shadow overflow-hidden">
              <div className="p-12 lg:p-16 border-b border-primary/5 bg-surface-container-lowest">
                <h2 className="text-3xl font-black text-primary font-headline tracking-tighter uppercase italic leading-none">Session Chronicles</h2>
              </div>
              <div className="p-12 lg:p-16 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                     <span className="text-4xl font-black text-primary/10 font-headline">01</span>
                     <h3 className="text-xl font-black text-primary uppercase tracking-widest font-headline italic">Establishment of Protocol</h3>
                  </div>
                  <p className="text-on-surface-variant font-medium text-lg leading-relaxed italic opacity-70 border-l-4 border-primary/10 pl-10">
                    The session was initialized by the Terminal Controller at 10:05 AM. Standard identification markers were verified according to district protocol.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                     <span className="text-4xl font-black text-primary/10 font-headline">02</span>
                     <h3 className="text-xl font-black text-primary uppercase tracking-widest font-headline italic">Chronicle Verification</h3>
                  </div>
                  <p className="text-on-surface-variant font-medium text-lg leading-relaxed italic opacity-70 border-l-4 border-primary/10 pl-10">
                     The previous session's chronicles were synchronized with current reality. Synchronization verified by Node Alpha and Node Beta without collision.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                     <span className="text-4xl font-black text-primary/10 font-headline">03</span>
                     <h3 className="text-xl font-black text-primary uppercase tracking-widest font-headline italic">Future Deployment Realities</h3>
                  </div>
                  <p className="text-on-surface-variant font-medium text-lg leading-relaxed italic opacity-70 border-l-4 border-primary/10 pl-10">
                     High-bandwidth discussion occurred regarding the Coastal Cleanup Signal. Resource allocation was optimized, diverting surplus from Administrative protocols to direct Community Impact channels for tactical deployment.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                     <span className="text-4xl font-black text-primary/10 font-headline">04</span>
                     <h3 className="text-xl font-black text-primary uppercase tracking-widest font-headline italic">Terminal Termination</h3>
                  </div>
                  <p className="text-on-surface-variant font-medium text-lg leading-relaxed italic opacity-70 border-l-4 border-primary/10 pl-10">
                     System shutdown initiated at 11:30 AM following successful intelligence synchronization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Tokens */}
          <div className="xl:w-1/3">
            <div className="bg-surface-container-low rounded-[3.5rem] border border-outline-variant/30 fluid-shadow sticky top-32 overflow-hidden">
              <div className="p-10 border-b border-primary/5 bg-primary text-white">
                <h3 className="text-2xl font-black font-headline tracking-tighter uppercase flex items-center gap-4 italic leading-none">
                  <span className="material-symbols-outlined text-white/50 text-3xl">token</span>
                  Action Tokens ({mom.action_items.length})
                </h3>
              </div>
              
              <div className="p-4 space-y-4">
                {mom.action_items.map((item: any, idx: number) => (
                  <div key={idx} className={`p-8 rounded-[2.5rem] border transition-all flex flex-col gap-6 relative group overflow-hidden
                    ${item.completed 
                      ? 'bg-surface/50 border-outline-variant/10 opacity-40 grayscale' 
                      : 'bg-white border-outline-variant/30 hover:bg-surface-container-lowest fluid-shadow'}`}>
                    
                    <div className="flex items-center justify-between relative z-10">
                       <span className={`text-[8px] font-black uppercase tracking-[.4em] px-3 py-1 rounded-full border
                          ${item.status === 'completed' ? 'bg-green-500/5 text-green-600 border-green-500/10' : 'bg-primary/5 text-primary border-primary/10'}`}>
                          {item.status === 'completed' ? 'Synchronized' : 'Pending Deployment'}
                       </span>
                       <button className={`w-10 h-10 rounded-2xl border-2 flex items-center justify-center transition-all
                          ${item.status === 'completed' ? 'bg-green-500 border-green-500 text-white' : 'border-outline-variant/50 hover:border-primary text-primary/20'}`}>
                          {item.status === 'completed' && <span className="material-symbols-outlined text-base">check</span>}
                       </button>
                    </div>
                    
                    <div className="space-y-4 relative z-10">
                      <p className={`text-xl font-black font-headline uppercase leading-tight tracking-tight ${item.status === 'completed' ? 'text-on-surface-variant/40 line-through italic' : 'text-primary'}`}>{item.content}</p>
                      <div className="flex items-center gap-3">
                         <span className="material-symbols-outlined text-primary/30 text-sm">person_pin</span>
                         <p className="text-[9px] font-black text-on-surface-variant/50 uppercase tracking-widest italic">Assigned to: <span className="text-primary italic">{item.assigned_to}</span></p>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 aqueous-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
