import clubsData from "@/mock/clubs.json";
import eventsData from "@/mock/events.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export const runtime = 'edge';

export function generateStaticParams() {
  return clubsData.map((club: any) => ({
    slug: club.slug,
  }));
}

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  const club = clubsData.find((c: any) => c.slug === params.slug);

  if (!club) {
    notFound();
  }

  const allEvents = eventsData.filter((e: any) => e.club_id === club.id);
  const now = new Date().toISOString();
  const upcomingEvents = allEvents.filter((e: any) => e.status === 'published' && e.start_at > now);
  const pastEvents = allEvents.filter((e: any) => e.status === 'past' || e.start_at <= now);

  return (
    <main className="min-h-screen bg-surface">
      {/* MINI HERO */}
      <header className="bg-gray-900 pt-24 pb-12 relative overflow-hidden" style={{ borderBottom: `4px solid ${club.theme_color || '#6c2bd9'}` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20" style={{ background: `linear-gradient(135deg, transparent 0%, ${club.theme_color || '#6c2bd9'} 100%)` }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-20 flex items-center gap-6">
          <img src={club.logo_url} className="w-16 h-16 rounded-xl bg-white p-1" alt={club.name} />
          <div>
            <Link href={`/clubs/${club.slug}`} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-1 inline-block">
              &larr; Back to Club
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Events & Initiatives</h1>
          </div>
        </div>
      </header>

      {/* FILTERS & EVENTS */}
      <section className="py-12 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          
          {/* Tabs structure (Mock UI) */}
          <div className="flex border-b border-gray-200 mb-10">
            <button className="pb-3 px-1 border-b-2 font-bold text-gray-900 text-sm tracking-wide mr-8" style={{ borderColor: club.theme_color || '#6c2bd9' }}>
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button className="pb-3 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700 text-sm tracking-wide">
              Past Events ({pastEvents.length})
            </button>
          </div>

          {/* Events Grid */}
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event: any, idx: number) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 group">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img src={event.banner_url} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-gray-800 shadow-sm">
                      {event.is_free ? 'Free' : 'Paid Ticket'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">{event.type}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{event.title}</h3>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                       <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                      {new Date(event.start_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                    
                    <Link href={`/events/${event.slug}`} className="block w-full mt-6 text-center text-white font-medium py-2.5 rounded-lg transition-transform hover:scale-[1.02]" style={{ backgroundColor: club.theme_color || '#6c2bd9' }}>
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200 border-dashed">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <span className="material-symbols-outlined text-4xl">event_busy</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">No Upcoming Events</h3>
              <p className="text-gray-500">The club hasn't scheduled any new events yet. Check back soon!</p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
