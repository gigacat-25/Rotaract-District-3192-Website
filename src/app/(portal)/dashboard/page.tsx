import MemberSidebar from "@/components/MemberSidebar";
import membersData from "@/mock/members.json";

export default function DashboardPage() {
  // Use a mock member for phase 1
  const user = membersData[0];

  return (
    <div className="min-h-screen bg-surface flex text-on-surface">
      <MemberSidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 md:p-12 space-y-12 overflow-x-hidden relative">
        {/* Decorative Blobs */}
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tight text-on-surface leading-none">Welcome back, {user.name.split(' ')[0]} 👋</h1>
            <p className="text-lg text-on-surface-variant font-medium max-w-xl italic opacity-60">Explore events and make an impact in your community today.</p>
          </div>
          <div className="bg-white/40 backdrop-blur-xl border border-white/40 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-2xl">
            <div className="text-right">
              <p className="text-3xl font-black text-primary leading-none tracking-tighter">{user.points}</p>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-on-surface-variant mt-2 opacity-40">Total Points</p>
            </div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
              <span className="material-symbols-outlined text-2xl">analytics</span>
            </div>
          </div>
        </header>

        {/* Activity Snapshot */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { label: 'Events Attended', val: '12', icon: 'event_available', color: 'from-primary to-blue-600' },
            { label: 'Projects Led', val: '04', icon: 'stars', color: 'from-secondary to-purple-600' },
            { label: 'Certificates', val: '06', icon: 'card_membership', color: 'from-tertiary to-orange-600' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-surface-container-low/40 backdrop-blur-md p-8 rounded-[2.5rem] flex items-center gap-6 hover:-translate-y-2 transition-all duration-500 border border-white/20 shadow-xl group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 leading-none mb-2">{stat.label}</p>
                <p className="text-3xl font-black text-on-surface tracking-tighter">{stat.val}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Main Scroll Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Featured Events */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight flex items-center gap-4">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Featured Initiatives
                </h2>
                <a href="/events" className="text-primary font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all">
                  Access Archives <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
              <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 snap-x px-4">
                {[
                  { title: 'Food for All Drive', date: 'Oct 24, 2024', tag: 'Community', img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800' },
                  { title: 'Lead the Change', date: 'Nov 05, 2024', tag: 'Leadership', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800' }
                ].map((evt, idx) => (
                  <div key={idx} className="flex-none w-[340px] md:w-[420px] group">
                    <div className="bg-white rounded-[3rem] overflow-hidden border border-outline/5 shadow-2xl group-hover:-translate-y-4 transition-all duration-700">
                      <div className="h-64 w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                        <img src={evt.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={evt.title} />
                        <span className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/30">{evt.tag}</span>
                        <div className="absolute bottom-6 left-6 z-20 space-y-1">
                          <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">{evt.title}</h3>
                          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 italic">
                            <span className="material-symbols-outlined text-xs">calendar_today</span> {evt.date}
                          </p>
                        </div>
                      </div>
                      <div className="p-10">
                        <p className="text-on-surface-variant text-sm mb-10 line-clamp-2 italic opacity-60 leading-relaxed font-medium">Join us for our flagship district-wide initiative to create lasting community impact.</p>
                        <button className="w-full py-4 rounded-3xl border border-primary text-primary font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/5">Analyze Logistics</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight flex items-center gap-4">
                  <span className="w-2 h-8 bg-secondary rounded-full"></span>
                  Recommended Vectors
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Ocean Clean-up Drive', type: 'Service Project', interest: 'Environment', loc: 'Marina Bay' },
                  { title: 'Digital Literacy Workshop', type: 'Development', interest: 'Education', loc: 'Hybrid' }
                ].map((rec, idx) => (
                  <div key={idx} className="bg-white/50 backdrop-blur-xl p-8 rounded-[3rem] border border-white/40 shadow-xl hover:border-primary transition-all group cursor-pointer">
                    <div className="flex justify-between items-start mb-6">
                      <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-xl text-[9px] font-black uppercase tracking-widest border border-primary/10">{rec.type}</div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">bookmark</span>
                    </div>
                    <h4 className="font-black text-xl text-on-surface uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{rec.title}</h4>
                    <p className="text-xs text-on-surface-variant font-medium opacity-60 mb-8 italic">Optimized for your interest in {rec.interest}.</p>
                    <div className="flex items-center justify-between pt-6 border-t border-outline/5 mt-auto">
                      <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest flex items-center gap-2 opacity-40">
                        <span className="material-symbols-outlined text-sm">location_on</span> {rec.loc}
                      </span>
                      <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:tracking-[0.2em] transition-all">Join Node</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-12">
            <section className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/40 shadow-2xl space-y-10 border-outline/5">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-60">Upcoming Temporal Sequence</h2>
              <div className="space-y-6">
                {[
                  { day: '28', mon: 'OCT', title: 'District Board Meet', time: '18:30 PM' },
                  { day: '02', mon: 'NOV', title: 'Food Drive Prep', time: '10:00 AM' },
                  { day: '15', mon: 'NOV', title: 'Youth Mentorship', time: '14:00 PM' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-center group cursor-pointer">
                    <div className="flex-none w-16 h-16 rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center border border-outline/5 transition-transform group-hover:scale-110 duration-500">
                      <span className="text-[9px] font-black text-primary leading-none mb-1">{item.mon}</span>
                      <span className="text-2xl font-black text-on-surface leading-none">{item.day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-black text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors truncate">{item.title}</h4>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-40 flex items-center gap-2 mt-1">
                        <span className="material-symbols-outlined text-xs">alarm</span> {item.time}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-outline opacity-20 group-hover:translate-x-1 group-hover:opacity-100 transition-all">chevron_right</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 space-y-8">
                <h4 className="font-black text-2xl uppercase tracking-tight italic leading-none">Quick Protocols</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'New Project', icon: 'add_circle' },
                    { label: 'MOM Access', icon: 'description' },
                    { label: 'Academic Hub', icon: 'school' },
                    { label: 'Help Desk', icon: 'support_agent' }
                  ].map((action, idx) => (
                    <button key={idx} className="p-6 bg-white/10 backdrop-blur-md rounded-3xl flex flex-col items-center gap-3 hover:bg-white/20 transition-all hover:scale-105 duration-500 border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">{action.icon}</span>
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
