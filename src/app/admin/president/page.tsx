export default function PresidentialSuitePage() {
  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-on-surface">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Presidential Suite</h1>
          <p className="text-xs text-on-surface-variant font-black uppercase tracking-[0.2em] opacity-40">Elite Command Center</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Alex Rivera</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60 italic">District President</span>
           </div>
           <div className="w-12 h-12 rounded-2xl overflow-hidden border border-primary/20 shadow-xl">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFMPsETifRPXB3oKRVonH83qp6sebhkghJPo13pd1Mq528zHewp17jteO3IrRHi__cUvS18jqfj6CHqikasvYlkJD5Hs0YScFhJcau6lVReCZC3DaW3NrE2R7b8h3m5-L7s7uqs1b6tE80yCZL6vn5VZ1RJcQP7nNeY4RzVwM6Hp-xtxfYaiVhrPe7uvLD--tspCAT1CEdK40ccehLzH57H50ZTfCwpseD_hGQGaeeIfs2BM3pAEgmu96k5GRg_glWQ6HDMpcBcVqy" className="w-full h-full object-cover" alt="President" />
           </div>
        </div>
      </header>

      {/* Executive Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Network Engagement', val: '92%', icon: 'insights', color: 'from-primary to-blue-600' },
          { label: 'Strategic Projects', val: '12', icon: 'rocket_launch', color: 'from-secondary to-purple-600' },
          { label: 'Session Attendance', val: '86%', icon: 'how_to_reg', color: 'from-green-600 to-teal-600' },
          { label: 'Growth Vector', val: '+12.5%', icon: 'trending_up', color: 'from-orange-600 to-red-600' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-surface-container-lowest p-8 rounded-[2.5rem] border border-white shadow-xl hover:shadow-2xl transition-all duration-500 space-y-6 group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-[0.03] rounded-bl-full`}></div>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-on-surface tracking-tighter leading-none">{stat.val}</p>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-60 leading-none">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Quick Actions */}
        <div className="lg:col-span-8 space-y-12">
           <section>
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Executive Actions</h2>
                 <div className="h-[1px] flex-1 bg-outline/5 ml-8"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Manage Members', desc: 'Audit district identities and role allocations.', icon: 'manage_accounts' },
                  { title: 'Review Approvals', desc: 'Secure authorization for pending node requests.', icon: 'verified_user' },
                  { title: 'District Reports', desc: 'Synthesize performance diagnostics for RI.', icon: 'bar_chart' },
                  { title: 'Broadcast Signal', desc: 'Dispatch priority updates to all active nodes.', icon: 'add_comment' }
                ].map((action, idx) => (
                  <button key={idx} className="bg-surface-container-low/50 hover:bg-white p-8 rounded-[3rem] border border-white shadow-lg hover:shadow-2xl transition-all duration-500 text-left group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl">{action.icon}</span>
                    </div>
                    <h3 className="text-lg font-black text-on-surface uppercase tracking-tight mb-2">{action.title}</h3>
                    <p className="text-xs text-on-surface-variant font-medium opacity-60 italic leading-relaxed">{action.desc}</p>
                  </button>
                ))}
              </div>
           </section>

           <section>
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Pending Synchronizations</h2>
                 <div className="h-[1px] flex-1 bg-outline/5 ml-8"></div>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Coastal Cleanup Drive', requester: 'Sarah Jenkins', type: 'Project Approval' },
                  { title: 'District LMS Expansion', requester: 'Michael Chen', type: 'Curriculum Auth' }
                ].map((sync, idx) => (
                  <div key={idx} className="bg-white/70 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-xl flex items-center justify-between group">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-surface-container-low border border-outline/5 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                             <span className="material-symbols-outlined text-primary/40">sync</span>
                          </div>
                       </div>
                       <div>
                          <h4 className="text-base font-black text-on-surface uppercase tracking-tight">{sync.title}</h4>
                          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-60 italic">{sync.type} • Required Prompt from {sync.requester}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <button className="px-6 py-2.5 rounded-xl bg-orange-50 text-orange-600 text-[9px] font-black uppercase tracking-widest hover:bg-orange-100 transition-colors">Defer</button>
                       <button className="px-8 py-2.5 rounded-xl bg-primary text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">Authorize</button>
                    </div>
                  </div>
                ))}
              </div>
           </section>
        </div>

        {/* Participation Snapshot */}
        <div className="lg:col-span-4 space-y-12">
           <section className="sticky top-12">
              <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 border border-white shadow-2xl space-y-10">
                <div className="flex items-center justify-between">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Pulse Check</h3>
                   <span className="material-symbols-outlined text-primary/40">waves</span>
                </div>
                
                {/* Mock Chart Visualization */}
                <div className="flex items-end justify-between h-48 gap-3">
                  {[40, 65, 85, 95, 75, 60, 50].map((h, i) => (
                    <div key={i} className={`w-full rounded-t-xl transition-all duration-700 ${h === 95 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-surface-container-high'}`} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                
                <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-40">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>

                <div className="pt-8 border-t border-outline/5 space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-on-surface">Growth Vector</span>
                      </div>
                      <span className="text-[10px] font-black text-primary">+12.5%</span>
                   </div>
                   <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden p-[1px]">
                      <div className="h-full bg-primary rounded-full shadow-sm" style={{ width: "75%" }}></div>
                   </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                   <div className="relative z-10 space-y-4">
                      <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                      <h4 className="text-sm font-black uppercase tracking-tight leading-tight">Achievement Unlocked</h4>
                      <p className="text-[10px] font-medium text-white/70 leading-relaxed italic">District 3192 has reached 100% registration saturation for Q3.</p>
                   </div>
                </div>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
