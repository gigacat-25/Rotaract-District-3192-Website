import clubsData from "@/mock/clubs.json";

export default function AdminClubsPage() {
  const clubs = clubsData;

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none">Club Registry</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">District Node Hierarchy Management</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-8 py-4 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            <span className="material-symbols-outlined text-base">add</span>
            Charter New Node
          </button>
        </div>
      </header>

      <div className="bg-surface-container-low rounded-[3.5rem] border border-outline-variant/30 overflow-hidden shadow-xl">
        <div className="p-10 border-b border-primary/5 bg-surface-container-lowest">
          <h2 className="text-xl font-black text-primary tracking-tighter uppercase italic">Initialize Cluster</h2>
        </div>
        <div className="p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
               <label className="block text-[8px] font-black uppercase tracking-[0.3em] text-primary/40 ml-4 italic">Cluster Designation</label>
               <input type="text" placeholder="Club Name" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 font-bold text-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all" />
            </div>
            <div className="space-y-2">
               <label className="block text-[8px] font-black uppercase tracking-[0.3em] text-primary/40 ml-4 italic">Geography</label>
               <input type="text" placeholder="City" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 font-bold text-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all" />
            </div>
            <div className="space-y-2">
               <label className="block text-[8px] font-black uppercase tracking-[0.3em] text-primary/40 ml-4 italic">Charter Signal</label>
               <input type="date" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 font-bold text-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all" />
            </div>
            <div className="space-y-2">
               <label className="block text-[8px] font-black uppercase tracking-[0.3em] text-primary/40 ml-4 italic">Identity Tint</label>
               <input type="color" className="border border-outline-variant/20 rounded-2xl h-14 w-full cursor-pointer bg-surface-container-lowest p-2" defaultValue="#003F8A" />
            </div>
            <button className="md:col-span-2 bg-primary text-white font-black py-5 rounded-2xl uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:translate-y-[-2px] transition-all">Initialize Cluster</button>
          </form>
        </div>
      </div>

      {/* Node List */}
      <div className="bg-surface-container-low rounded-[3.5rem] border border-outline-variant/30 overflow-hidden shadow-xl">
        <div className="p-10 border-b border-primary/5 bg-surface-container-lowest">
          <h2 className="text-xl font-black text-primary tracking-tighter uppercase italic">Recognized Cluster Nodes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-primary/5">
                 <th className="py-6 px-10 text-[9px] font-black text-primary/40 uppercase tracking-[0.4em] italic">Active Cluster</th>
                 <th className="py-6 px-10 text-[9px] font-black text-primary/40 uppercase tracking-[0.4em] italic text-right">Synchronization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {clubs.map((c, idx) => (
                <tr key={idx} className="hover:bg-surface-container-lowest transition-all group">
                  <td className="py-6 px-10">
                     <div className="flex items-center gap-4">
                        <img src={c.logo_url} className="w-8 h-8 rounded-lg grayscale group-hover:grayscale-0 transition-all border border-primary/10" alt={c.name} />
                        <p className="text-base font-black text-primary uppercase leading-none tracking-tight">{c.name}</p>
                     </div>
                  </td>
                  <td className="py-6 px-10 text-right">
                     <button className="text-[9px] font-black text-primary uppercase tracking-[0.3em] hover:underline underline-offset-8 italic opacity-40 hover:opacity-100 transition-all">Modify Node</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
