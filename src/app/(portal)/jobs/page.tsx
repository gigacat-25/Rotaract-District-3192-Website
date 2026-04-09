import jobsData from "@/mock/jobs.json";

export default function JobsPage() {
  const jobs = jobsData;
  const activeJobs = jobs.filter((j: any) => j.status === 'active');

  return (
    <main className="lg:ml-64 min-h-screen relative overflow-visible pb-24 bg-surface">
      {/* Background Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] -z-10"></div>

      <header className="p-8 md:p-12 mb-12">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">The Marketplace</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">Career Signal</h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">Discover professional trajectories curated within the network.</p>
        </div>
      </header>

      <section className="p-8 md:p-12 space-y-12">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-low/50 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar">
            <button className="px-8 py-2.5 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 transition-all">All Signals</button>
            <button className="px-8 py-2.5 rounded-xl text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest transition-all hover:bg-white/50">Direct Hire</button>
            <button className="px-8 py-2.5 rounded-xl text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest transition-all hover:bg-white/50">Internships</button>
          </div>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest px-6 py-2.5 bg-primary/5 rounded-xl border border-primary/10 whitespace-nowrap">
            {activeJobs.length} Active Nodes
          </p>
        </div>

        {/* Job List */}
        <div className="grid gap-8">
          {jobs.map((job, idx) => (
            <div key={idx} className={`group bg-surface-container-lowest/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden relative ${job.status === 'closed' ? 'opacity-50' : ''}`}>
              <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-lg border shadow-sm
                      ${job.type === 'job' ? 'bg-primary/5 text-primary border-primary/10' : 'bg-green-500/5 text-green-600 border-green-500/10'}`}>
                      {job.type.toUpperCase()}
                    </span>
                    {job.status === 'closed' && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant border border-outline/5">Sequence Terminated</span>
                    )}
                    <span className="text-[9px] font-bold text-outline uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      Expiry: {new Date(job.expires_at).toLocaleDateString('en-IN', {month:'short', day:'numeric', year:'numeric'})}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-3xl font-black text-on-surface tracking-tight uppercase leading-none">{job.title}</h3>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">{job.company}</p>
                  </div>
                  
                  <p className="text-on-surface-variant text-base font-medium leading-relaxed italic opacity-80 max-w-3xl">
                    "{job.description}"
                  </p>
                </div>
                
                <div className="shrink-0 flex flex-col items-start xl:items-end gap-6">
                  <a href={job.status === 'active' ? (job.apply_url || '#') : '#'} className={`group/btn relative px-12 py-5 font-bold uppercase tracking-widest text-xs rounded-2xl w-full xl:w-auto text-center transition-all shadow-xl
                    ${job.status === 'active' 
                      ? 'bg-primary text-white hover:scale-105 active:scale-95' 
                      : 'bg-surface-container-high text-on-surface-variant cursor-not-allowed opacity-50'}`}>
                    {job.status === 'active' ? (
                      <span className="flex items-center justify-center gap-3">
                        Initialize Application <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">bolt</span>
                      </span>
                    ) : 'Sequence Offline'}
                  </a>
                  <div className="flex items-center gap-2 px-4 opacity-50">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                     <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Transmitted by {job.posted_by}</p>
                  </div>
                </div>
              </div>
              {/* Decorative interior element */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 group-hover:bg-primary/10 transition-colors`}></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
