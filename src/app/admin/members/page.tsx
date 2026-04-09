import membersData from "@/mock/members.json";

export default function AdminMembersPage() {
  const members = membersData;

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none">Node Directory</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">{members.length} Unique Identifiers Recognized</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline/40 group-focus-within:text-primary transition-colors">search</span>
            <input type="text" placeholder="Identify Node..." className="bg-surface-container-low border border-outline/10 rounded-xl py-3 pl-12 pr-6 text-xs font-bold text-on-surface focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all w-64" />
          </div>
          <button className="bg-white text-on-surface border border-outline/10 font-bold text-xs px-6 py-3 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">filter_list</span>
            Filters
          </button>
        </div>
      </header>

      {/* Members Table */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] border border-white shadow-2xl overflow-hidden shadow-primary/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="py-6 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Full Identity</th>
                <th className="py-6 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Origin Node</th>
                <th className="py-6 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Protocol Role</th>
                <th className="py-6 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Engagement</th>
                <th className="py-6 px-10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/5 whitespace-nowrap">
              {members.map((member, idx) => (
                <tr key={idx} className="hover:bg-primary/5 transition-all group border-l-4 border-transparent hover:border-primary">
                  <td className="py-6 px-10">
                    <div className="flex items-center gap-4">
                       <div className="relative">
                          <img src={member.profile_pic_url} className="w-12 h-12 rounded-2xl object-cover border border-outline/10 shadow-sm" alt={member.name} />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                       </div>
                       <div className="flex flex-col">
                          <p className="text-base font-black text-on-surface tracking-tight uppercase leading-none">{member.name}</p>
                          <p className="text-[10px] text-on-surface-variant font-medium mt-1 lowercase opacity-60 italic">{member.email}</p>
                       </div>
                    </div>
                  </td>
                  <td className="py-6 px-10">
                    <span className="text-xs font-bold text-on-surface-variant tracking-wide uppercase opacity-70">{member.club_id}</span>
                  </td>
                  <td className="py-6 px-10">
                    <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all
                      ${member.role === 'district_core' ? 'bg-primary/5 text-primary border-primary/20' : 
                        member.role.includes('pres') ? 'bg-secondary/5 text-secondary border-secondary/20' : 'bg-surface-container-low text-on-surface-variant border-outline/10 opacity-70'}`}>
                      {member.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-6 px-10">
                    <div className="flex items-center gap-3">
                       <div className="flex flex-col">
                         <p className="text-sm font-black text-on-surface leading-none">{member.points} <span className="text-[8px] opacity-40">PTX</span></p>
                         <div className="w-16 h-1 bg-surface-container-low rounded-full mt-1 overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${Math.min(100, member.points / 10)}%` }}></div>
                         </div>
                       </div>
                    </div>
                  </td>
                  <td className="py-6 px-10 text-right">
                    <div className="flex items-center justify-end gap-2 translate-x-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0">
                      <button className="w-10 h-10 rounded-xl bg-white border border-outline/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="w-10 h-10 rounded-xl bg-white border border-outline/10 text-on-surface flex items-center justify-center hover:bg-surface-container-low transition-all shadow-sm">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-surface-container-low/30 border-t border-outline/5 px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-50">Sync Active: 1 - {members.length} of Cluster Total</p>
          <div className="flex items-center gap-4">
             <button className="px-6 py-2 rounded-xl bg-white border border-outline/10 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2 hover:bg-surface transition-all">
               <span className="material-symbols-outlined text-sm">chevron_left</span> Previous
             </button>
             <button className="px-6 py-2 rounded-xl bg-white border border-outline/10 text-[10px] font-bold text-on-surface uppercase tracking-widest flex items-center gap-2 hover:bg-surface transition-all shadow-sm">
               Next <span className="material-symbols-outlined text-sm">chevron_right</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
