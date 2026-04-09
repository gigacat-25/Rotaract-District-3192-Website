import clubsData from "@/mock/clubs.json";
import membersData from "@/mock/members.json";

export default function AdminDashboardPage() {
  const activeClubs = clubsData.filter(c => c.status === 'active');
  const allMembers = membersData;

  const metrics = {
    totalClubs: activeClubs.length,
    totalMembers: allMembers.length,
    totalDues: "₹1,45,000",
    activeEvents: 14
  };

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface uppercase tracking-tight leading-none">Intelligence Metrics</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">Real-time data synchronization active</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-on-surface-variant border border-outline/10 font-bold text-xs px-6 py-3 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">search</span>
            Quick Search
          </button>
          <button className="bg-primary text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            <span className="material-symbols-outlined">download</span>
            Export Log
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Registered Clubs', val: metrics.totalClubs, icon: 'hub', color: 'text-primary' },
          { label: 'Active Members', val: metrics.totalMembers, icon: 'groups', color: 'text-secondary' },
          { label: 'Total Revenue', val: metrics.totalDues, icon: 'payments', color: 'text-on-surface' },
          { label: 'Pending Signals', val: metrics.activeEvents, icon: 'sensors', color: 'text-primary' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-surface-container-lowest p-8 rounded-[2.5rem] border border-white shadow-xl hover:shadow-2xl transition-all duration-500 space-y-6 group">
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center ${stat.color} transition-transform group-hover:scale-110`}>
                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
              </div>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+4%</span>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-on-surface tracking-tighter leading-none">{stat.val}</p>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60 leading-none">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Recent Clubs Table */}
        <div className="xl:col-span-2 bg-white/70 backdrop-blur-xl rounded-[3rem] border border-white shadow-2xl overflow-hidden shadow-primary/5">
          <div className="px-10 py-8 border-b border-outline/5 flex justify-between items-center bg-surface-container-lowest">
            <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Recent Node Ingress</h2>
            <a href="/admin/clubs" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">View All <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="py-5 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Origin Node</th>
                  <th className="py-5 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Location</th>
                  <th className="py-5 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline/5">
                {activeClubs.slice(0, 5).map((club, idx) => (
                  <tr key={idx} className="hover:bg-primary/5 transition-all group">
                    <td className="py-6 px-10">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl overflow-hidden border border-outline/10 shadow-sm bg-white p-1">
                           <img src={club.logo_url} className="w-full h-full object-contain" alt={club.name} />
                         </div>
                         <p className="text-base font-black text-on-surface tracking-tight uppercase">{club.name}</p>
                      </div>
                    </td>
                    <td className="py-6 px-10 text-xs font-bold text-on-surface-variant lowercase italic tracking-wide">{club.city}</td>
                    <td className="py-6 px-10 text-right">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest bg-green-50 text-green-700 border border-green-200">ACTIVE</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="xl:col-span-1 space-y-8">
          <div className="bg-surface-container-lowest rounded-[3rem] p-10 border border-white shadow-xl space-y-8">
            <h2 className="text-xl font-black text-on-surface uppercase tracking-tight leading-none">Quick Functions</h2>
            <div className="space-y-4">
              <button className="w-full group bg-primary text-white p-6 rounded-[2rem] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-left flex items-center justify-between">
                <div className="space-y-1">
                   <p className="text-xs font-bold uppercase tracking-widest leading-none">Review Signals</p>
                   <p className="text-[9px] text-white/60 uppercase tracking-widest">3 Pending Auth</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">03</div>
              </button>
              
              <button className="w-full group bg-surface-container-low text-on-surface p-6 rounded-[2rem] border border-white hover:bg-white transition-all text-left flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest leading-none">System Audit</p>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-widest">Generate Insight</p>
                </div>
                <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">security</span>
              </button>

              <button className="w-full group bg-surface-container-low text-on-surface p-6 rounded-[2rem] border border-white hover:bg-white transition-all text-left flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest leading-none">Issue Credentials</p>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-widest">Member Cards</p>
                </div>
                <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">badge</span>
              </button>
            </div>
          </div>

          {/* Decorative Alert Card */}
          <div className="bg-gradient-to-br from-primary to-secondary p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-4">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              <h3 className="text-xl font-black uppercase tracking-tight">Expand Network</h3>
              <p className="text-xs font-medium text-white/80 leading-relaxed italic">You have 12 membership applications in the buffer waiting for synchronization.</p>
              <button className="bg-white text-primary font-bold text-[10px] px-8 py-3 rounded-xl uppercase tracking-widest shadow-lg hover:scale-105 transition-all">Go to Buffer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
