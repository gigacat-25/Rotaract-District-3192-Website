export default function AdminCampaignsPage() {
  return (
    <div className="space-y-12 h-full flex flex-col">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-on-surface">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none">Campaign Assets</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">District-wide initiative resource management.</p>
        </div>
        <button className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-8 py-4 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <span className="material-symbols-outlined text-base">rocket_launch</span>
          Initialize Campaign
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] text-center">
         <div className="w-32 h-32 bg-surface-container-low rounded-[2.5rem] border border-outline/5 shadow-2xl flex items-center justify-center text-primary/10 mb-8 overflow-hidden group relative">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="material-symbols-outlined text-6xl group-hover:scale-110 transition-transform duration-700">payments</span>
         </div>
         <div className="space-y-2 max-w-sm">
            <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight leading-none">Treasury Static</h2>
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest opacity-40 leading-relaxed">No active external crowdfunding initiatives are currently indexed in the district hub.</p>
         </div>
         <button className="mt-12 group flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all">
           View Archived Operations
           <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
         </button>
      </div>
    </div>
  );
}
