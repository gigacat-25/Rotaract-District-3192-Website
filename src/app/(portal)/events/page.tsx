import EventCard from "@/components/EventCard";
import eventsData from "@/mock/events.json";

export default function EventsDirectoryPage() {
  const publishedEvents = eventsData.filter((e: any) => e.status === 'published');
  const upcomingEvents = publishedEvents.filter((e: any) => e.start_at > new Date().toISOString());

  // Sort events by date
  const sortedEvents = upcomingEvents.sort((a: any, b: any) => 
    new Date(a.start_at).getTime() - new Date(b.start_at).getTime()
  );

  const featuredEvent = sortedEvents[0];
  const otherEvents = sortedEvents.slice(1);

  return (
    <main className="lg:ml-64 p-6 md:p-12 min-h-screen relative overflow-hidden bg-surface">
      {/* Background Abstract Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header Section */}
      <header className="relative z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-on-surface mb-2">Explore Events</h1>
          <p className="text-on-surface-variant text-lg max-w-xl">Discover opportunities to lead, serve, and connect with fellow Rotaractors across the district.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <select className="appearance-none bg-surface-container-lowest border-none rounded-xl px-6 py-3 pr-10 font-medium text-sm shadow-[0_10px_40px_rgba(108,43,217,0.06)] focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer focus:outline-none">
              <option>Category: All</option>
              <option>Service Project</option>
              <option>Professional Dev</option>
              <option>Social Mixer</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">keyboard_arrow_down</span>
          </div>
          <div className="relative">
            <select className="appearance-none bg-surface-container-lowest border-none rounded-xl px-6 py-3 pr-10 font-medium text-sm shadow-[0_10px_40px_rgba(108,43,217,0.06)] focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer focus:outline-none">
              <option>Date: Anytime</option>
              <option>This Weekend</option>
              <option>Next 30 Days</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-sm">calendar_today</span>
          </div>
        </div>
      </header>

      {/* Events Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {/* Featured Card */}
        {featuredEvent && (
          <div className="lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-surface-container-lowest shadow-[0_10px_40px_rgba(108,43,217,0.06)] hover:translate-y-[-4px] transition-all duration-500 h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
            <div className="absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
              <img className="w-full h-full object-cover" src={featuredEvent.banner_url} alt={featuredEvent.title} />
            </div>
            <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
              <div className="flex gap-3 mb-4">
                <span className="bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">{featuredEvent.type}</span>
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">Featured</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 leading-tight">{featuredEvent.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-white/80">
                  <span className="flex items-center gap-1.5 text-sm">
                    <span className="material-symbols-outlined text-lg">calendar_month</span>
                    {new Date(featuredEvent.start_at).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    {featuredEvent.venue}
                  </span>
                </div>
                <a href={`/events/${featuredEvent.slug}`} className="bg-white text-primary font-bold px-8 py-3 rounded-2xl hover:bg-primary-container hover:text-white transition-all text-center">View Details</a>
              </div>
            </div>
          </div>
        )}

        {/* Other Events */}
        {otherEvents.map((event: any, idx: number) => (
          <EventCard 
            key={idx}
            title={event.title}
            date={new Date(event.start_at).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}
            description={event.description}
            image={event.banner_url}
            slug={event.slug}
            badge={event.is_free ? 'Free Entry' : 'Ticketed Event'}
            statusBadge={event.status.toUpperCase()}
          />
        ))}
      </div>

      {/* Secondary CTA Section / Abstract Bento */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-12">
        <div className="md:col-span-2 bg-gradient-to-br from-primary-container to-secondary-container rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Can't find an event?</h2>
            <p className="text-white/80 max-w-md leading-relaxed">Our regional committees are constantly planning new events. Get notified the moment something new is posted.</p>
          </div>
          <button className="relative z-10 bg-white text-primary px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all whitespace-nowrap">Enable Alerts</button>
        </div>
        <div className="bg-surface-container-high/50 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-5xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          <h5 className="text-xl font-bold text-on-surface mb-2">Member Rewards</h5>
          <p className="text-on-surface-variant text-sm leading-relaxed">Participate in 3+ events this month to earn the 'Active Leader' badge.</p>
        </div>
      </div>
    </main>
  );
}
