import feedsData from "@/mock/feeds.json";

export default function NewsPage() {
  const feeds = feedsData;
  const types = [...new Set(feeds.map((f: any) => f.content_type))];

  return (
    <main className="lg:ml-64 min-h-screen relative overflow-visible bg-surface">
      {/* Background Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] -z-10"></div>

      <header className="p-8 md:p-12 pb-0">
        <div className="flex flex-col gap-4 mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">The Pulse</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">District Signal</h1>
          <p className="text-lg text-on-surface-variant font-medium max-w-2xl leading-relaxed">Live updates, announcements, and stories from across the district.</p>
        </div>

        {/* CONTENT CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-outline/5">
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 no-scrollbar">
            <button className="px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 transition-all whitespace-nowrap">Source: All</button>
            {types.map((type, idx) => (
              <button key={idx} className="px-6 py-2.5 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest transition-all whitespace-nowrap border border-white/10 hover:bg-white">{type}</button>
            ))}
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative group">
              <input type="text" placeholder="Scan signals..." className="w-full md:w-80 pl-12 pr-6 py-3 bg-surface-container-low border-none rounded-2xl text-sm font-bold text-on-surface placeholder:text-outline focus:outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all shadow-sm" />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
            </div>
          </div>
        </div>
      </header>

      {/* FEED GRID */}
      <section className="p-8 md:p-12">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
          {feeds.map((post, idx) => (
            <article key={idx} className="break-inside-avoid bg-surface-container-lowest/70 backdrop-blur-xl rounded-[2rem] overflow-hidden group border border-white/40 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500">
              
              {/* Media */}
              {post.media_url && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={post.media_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-5 right-5">
                    <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                      {post.content_type}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="p-8 space-y-6">
                {/* Author Row */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-white">
                    <img src={post.author_pic} alt={post.author_name} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-base font-black text-on-surface uppercase tracking-tight">{post.author_name}</p>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
                      {post.club_name} • {new Date(post.posted_at).toLocaleDateString('en-IN', {month:'short', day:'numeric'})}
                    </p>
                  </div>
                </div>
                
                {/* Content */}
                <p className="text-on-surface-variant text-base font-medium leading-relaxed italic opacity-80">
                  "{post.caption}"
                </p>
                
                {/* Interaction buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-outline/5">
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-error transition-all group/btn">
                    <span className="material-symbols-outlined text-2xl group-hover/btn:scale-110 transition-transform">favorite</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Protocol Like</span>
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-xl">ios_share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-20 text-center pb-24">
          <button className="px-10 py-4 bg-surface-container-high text-primary rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-lg shadow-black/5">
            Expand Signal Horizon
          </button>
        </div>
      </section>
    </main>
  );
}
