import eventsData from "@/mock/events.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventsData.find((e: any) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="pt-20">
      <header className="relative min-h-[70vh] flex items-center overflow-hidden px-6 lg:px-12 bg-primary">
        <div className="absolute inset-0 z-0">
          <img src={event.banner_url} alt="" className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full aqueous-gradient opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-screen-2xl relative z-10 w-full py-20">
          <div className="max-w-4xl space-y-10">
            <div className="flex flex-wrap gap-4">
               <Link href="/events" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-xl hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back to Calendar
              </Link>
              <span className="px-5 py-2.5 rounded-full bg-primary-container/20 text-on-primary text-[10px] font-black uppercase tracking-widest border border-primary-container/20 backdrop-blur-xl">
                {event.type}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter font-headline">{event.title}</h1>
            
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-xl">
                  <span className="material-symbols-outlined text-white text-3xl">calendar_today</span>
                </div>
                <div className="space-y-1">
                  <p className="text-white font-black font-headline tracking-tight text-2xl">{new Date(event.start_at).toLocaleDateString('en-IN', {weekday:'short', month: 'long', day: 'numeric'})}</p>
                  <p className="text-on-primary font-bold text-xs uppercase tracking-widest opacity-60">{new Date(event.start_at).toLocaleTimeString('en-IN', {hour: '2-digit', minute: '2-digit'})} IST</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-xl">
                  <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                </div>
                <div className="space-y-1">
                  <p className="text-white font-black font-headline tracking-tight text-2xl truncate max-w-[250px]">{event.venue}</p>
                  <a href={event.maps_url} target="_blank" rel="noopener noreferrer" className="text-on-primary font-black text-[10px] uppercase tracking-[0.2em] border-b border-white/20 pb-0.5 hover:border-white transition-all">Directions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="py-32 px-6 lg:px-12 ">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-24">
              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-primary font-black text-[10px] tracking-[.4em] uppercase opacity-40">Context</span>
                  <h2 className="text-5xl font-black text-primary tracking-tighter font-headline">Event Brief</h2>
                </div>
                <div className="font-body text-xl text-on-surface-variant font-medium leading-relaxed opacity-80 max-w-3xl first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                  <p>{event.description}</p>
                </div>
                
                <div className="-container-low p-10 rounded-[2.5rem] flex items-center gap-6 border border-outline-variant/30 max-w-lg">
                  <img src={`https://ui-avatars.com/api/?name=${event.club_name.replace(/ /g, '+')}&background=174174&color=fff`} className="w-16 h-16 rounded-[1.2rem] fluid-shadow" alt={event.club_name} />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest opacity-40">Organized By</p>
                    <p className="text-xl font-black text-primary font-headline tracking-tight">{event.club_name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Column */}
            <div className="lg:col-span-4 sticky top-32">
              <div className="-container-low rounded-[3rem] p-12 space-y-10 fluid-shadow border border-outline-variant/30">
                <div className="space-y-2 text-center">
                  <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] opacity-40">Admission</h3>
                  <p className="text-3xl font-black text-primary font-headline tracking-tighter">Access Tiers</p>
                </div>

                <div className="space-y-4">
                  {event.ticket_tiers.map((tier: any, idx: number) => (
                    <div key={idx} className="p-6 -container-lowest rounded-2xl flex justify-between items-center group hover:bg-primary transition-all">
                      <div className="space-y-1">
                        <p className="font-black text-primary uppercase tracking-widest text-[11px] group-hover:text-on-primary transition-colors">{tier.name}</p>
                        <p className="text-on-surface-variant text-[10px] font-bold group-hover:text-on-primary/60 transition-colors">{tier.capacity} Open Seats</p>
                      </div>
                      <p className="text-xl font-black text-primary font-headline tracking-tighter group-hover:text-on-primary transition-colors">
                        {tier.price === 0 ? 'Free' : `₹${tier.price}`}
                      </p>
                    </div>
                  ))}
                </div>

                {event.status === 'published' ? (
                  <Link href={`/events/${event.slug}/register`} className="block w-full">
                    <button className="aqueous-gradient text-on-primary px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] w-full shadow-2xl shadow-primary/30 hover:translate-y-[-2px] transition-all">
                      Register For Event
                    </button>
                  </Link>
                ) : (
                  <button className="w-full -container-highest text-on-surface-variant/50 px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] cursor-not-allowed">
                    Closed Registration
                  </button>
                )}

                <div className="flex items-center justify-center gap-6 pt-6 border-t border-primary/5">
                  <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-40">Encrypted Booking</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
