import eventsData from "@/mock/events.json";

export default function AdminEventsPage() {
  const events = eventsData;

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none">Event Manifest</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">Manage and monitor district-wide initiatives.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-surface-container-low p-1.5 rounded-2xl flex border border-outline/5">
             <button className="px-6 py-2 bg-white shadow-sm rounded-xl text-xs font-black uppercase tracking-widest text-primary">Active</button>
             <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-all">Archived</button>
          </div>
          <button className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-8 py-4 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            <span className="material-symbols-outlined text-base">rocket_launch</span>
            Launch Event
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div key={idx} className="bg-surface-container-lowest rounded-[2.5rem] border border-white shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
             <div className="h-48 w-full relative overflow-hidden">
                <img src={event.banner_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={event.title} />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/30">
                  {event.status}
                </div>
             </div>
             <div className="p-8 space-y-4">
                <div className="flex justify-between items-center">
                   <p className="text-[10px] font-black text-primary uppercase tracking-widest">{new Date(event.start_at).toLocaleDateString()}</p>
                   <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60 italic">{event.club_id}</p>
                </div>
                <h3 className="text-xl font-black text-on-surface uppercase tracking-tight leading-tight">{event.title}</h3>
                <div className="pt-6 border-t border-outline/5 flex justify-between items-center">
                   <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline underline-offset-8">Analyze Node</button>
                   <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-error transition-all">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="bg-surface-container-low rounded-[3.5rem] border border-outline-variant/30 py-24 text-center space-y-4">
          <div className="w-20 h-20 bg-surface-container-lowest rounded-3xl mx-auto flex items-center justify-center shadow-xl mb-8">
            <span className="material-symbols-outlined text-primary/20 text-4xl">inventory_2</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-black text-primary uppercase italic">Queue Nominal</h2>
            <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] italic max-w-xs mx-auto">All external signals have been processed. No authorization tasks pending.</p>
          </div>
        </div>
      )}
    </div>
  );
}
