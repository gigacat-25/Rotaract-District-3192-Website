import clubsData from "@/mock/clubs.json";
import eventsData from "@/mock/events.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return clubsData.map((club) => ({
    slug: club.slug,
  }));
}

export default function ClubDetailPage({ params }: { params: { slug: string } }) {
  const club = clubsData.find((c: any) => c.slug === params.slug);

  if (!club) {
    notFound();
  }

  const clubEvents = eventsData
    .filter((e: any) => e.club_id === club.id && e.status === 'published')
    .slice(0, 3);

  return (
    <main className="pt-20">
      {/* DYNAMIC CLUB HERO */}
      <header className="relative min-h-[60vh] flex items-end overflow-hidden px-6 lg:px-12 bg-primary">
        <div className="absolute inset-0 z-0">
          <img src={club.cover_url} alt="" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full aqueous-gradient opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-screen-2xl relative z-10 w-full mb-20">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-12">
            <div className="w-48 h-48 bg-white rounded-[3rem] p-3 shadow-2xl shrink-0 rotate-[-2deg] border-[8px] border-surface-container-lowest">
              <img src={club.logo_url} alt={club.name} className="w-full h-full object-contain rounded-[2rem]" />
            </div>
            
            <div className="space-y-6 flex-grow">
              <div className="flex flex-wrap gap-3">
                 <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[9px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-md">
                  Chartered {new Date(club.charter_date).getFullYear()}
                </span>
                {club.status === 'active' ? (
                  <span className="px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 text-[9px] font-black uppercase tracking-widest border border-green-500/20 backdrop-blur-md">Active Body</span>
                ) : (
                  <span className="px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 text-[9px] font-black uppercase tracking-widest border border-red-500/20 backdrop-blur-md">Inactive</span>
                )}
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter font-headline">{club.name}</h1>
              <div className="flex flex-wrap items-center gap-8 text-on-primary font-bold opacity-70 text-sm italic">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">location_on</span>{club.city}</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">groups</span>{club.member_count} Members</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="py-32 px-6 lg:px-12 ">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-24">
              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-primary font-black text-[10px] tracking-[.4em] uppercase opacity-40">The Narrative</span>
                  <h2 className="text-5xl font-black text-primary tracking-tighter font-headline">About the Club</h2>
                </div>
                <div className="font-body text-xl text-on-surface-variant font-medium leading-relaxed opacity-80 max-w-3xl first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                  <p>{club.about}</p>
                </div>
              </div>

              {/* Upcoming Events */}
              {clubEvents.length > 0 && (
                <div className="space-y-12">
                  <div className="flex items-center justify-between border-b-2 border-primary/5 pb-8">
                    <h2 className="text-4xl font-black text-primary tracking-tighter font-headline">Upcoming Waves</h2>
                    <a href={`/clubs/${club.slug}/events`} className="text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">View All Events</a>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {clubEvents.map((event: any, idx: number) => (
                      <a key={idx} href={`/events/${event.slug}`} className="group -container-low rounded-[2.5rem] overflow-hidden fluid-shadow hover:translate-y-[-4px] transition-all duration-500 block">
                        <div className="h-48 overflow-hidden relative">
                          <img src={event.banner_url} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute bottom-4 left-6 -container-lowest/90 backdrop-blur-md px-4 py-2 rounded-xl">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">{new Date(event.start_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-black text-primary font-headline tracking-tight group-hover:text-primary-container transition-colors line-clamp-1">{event.title}</h3>
                          <p className="mt-4 text-on-surface-variant font-bold text-[10px] uppercase tracking-widest opacity-40">Click for details</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              <div className="-container-low rounded-[3rem] p-12 space-y-10 fluid-shadow sticky top-32">
                <div className="space-y-2">
                  <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] opacity-40 text-center">Social Radius</h3>
                  <p className="text-3xl font-black text-primary font-headline tracking-tighter text-center">Get Connected</p>
                </div>
                
                <div className="space-y-6">
                  {club.instagram_url && (
                    <a href={club.instagram_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 -container-lowest rounded-2xl group transition-all hover:bg-primary hover:text-on-primary">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-2xl opacity-40 group-hover:opacity-100">travel_explore</span>
                        <span className="font-black uppercase tracking-widest text-[10px]">Instagram</span>
                      </div>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}

                  {club.linkedin_url && (
                    <a href={club.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 -container-lowest rounded-2xl group transition-all hover:bg-primary hover:text-on-primary">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-2xl opacity-40 group-hover:opacity-100">business_center</span>
                        <span className="font-black uppercase tracking-widest text-[10px]">LinkedIn</span>
                      </div>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}
                  
                  {club.whatsapp_group_url && (
                    <a href={club.whatsapp_group_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 -container-lowest rounded-2xl group transition-all hover:bg-primary hover:text-on-primary">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-2xl opacity-40 group-hover:opacity-100">chat</span>
                        <span className="font-black uppercase tracking-widest text-[10px]">WhatsApp Group</span>
                      </div>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}
                </div>

                <div className="pt-10 text-center border-t border-primary/5">
                   <button className="aqueous-gradient text-on-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] w-full shadow-2xl shadow-primary/20">
                    Enquire Membership
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
