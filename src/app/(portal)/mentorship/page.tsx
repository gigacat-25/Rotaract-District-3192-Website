import membersData from "@/mock/members.json";

export default function MentorshipPage() {
  const members = membersData;
  // Filter a subset of members to act as mentors for mock data
  const mentors = members.slice(0, 4).map((m: any) => ({
    ...m,
    expertise: m.role.includes('pres') ? ['Strategic Leadership', 'Impact Management'] : ['Growth Marketing', 'Signal Communication']
  }));

  return (
    <main className="lg:ml-64 min-h-screen relative overflow-visible pb-24 ">
      {/* Background Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] -z-10"></div>

      <header className="p-8 md:p-12 mb-12">
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="text-primary font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">Knowledge Protocol</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">Synergy Hub</h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">Connect with experienced district leaders for direct knowledge synchronization.</p>
        </div>
      </header>

      <section className="p-8 md:p-12 space-y-12">
        <div className="flex items-center gap-6 border-b border-outline/10 pb-1 relative max-w-5xl mx-auto">
          <button className="px-8 py-4 text-primary font-black text-xs uppercase tracking-widest border-b-2 border-primary relative z-10 transition-all">Available Mentors</button>
          <button className="px-8 py-4 text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest transition-all">Active Sessions (0)</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="group -container-lowest/70 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col lg:flex-row gap-10">
              <div className="shrink-0 flex flex-col items-center lg:items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={mentor.profile_pic_url} alt={mentor.name} className="w-32 h-32 rounded-[2.2rem] object-cover relative z-10 border-4 border-white shadow-xl" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-primary/5 text-primary px-3 py-1.5 rounded-lg border border-primary/10">Verified Mentor</span>
              </div>
              
              <div className="flex-grow space-y-8">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-on-surface uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{mentor.name}</h3>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[.3em] opacity-60">Rotaract Club of {mentor.club_id}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill: string, sIdx: number) => (
                    <span key={sIdx} className="text-[9px] font-bold uppercase tracking-widest -container-low text-primary px-3 py-1.5 rounded-lg border border-white/40 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="relative w-full bg-primary text-white font-bold py-4 rounded-2xl uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span className="flex items-center justify-center gap-3">
                    Initialize Session <span className="material-symbols-outlined text-xl">bolt</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
