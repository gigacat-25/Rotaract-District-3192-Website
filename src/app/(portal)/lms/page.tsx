import coursesData from "@/mock/courses.json";
import Link from "next/link";

export default function LMSPage() {
  const courses = coursesData;

  return (
    <main className="pt-20">
      <header className="bg-primary text-white pt-32 pb-24 relative overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full aqueous-gradient opacity-20 rounded-bl-[10rem] blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 /5 rounded-tr-[15rem] blur-2xl"></div>
        </div>
        <div className="container mx-auto max-w-screen-2xl relative z-10 text-center space-y-6">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-black tracking-[0.3em] uppercase font-headline border border-white/10">
            Intellectual Capital
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter font-headline uppercase leading-none italic">Academy Core</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body font-medium italic">High-bandwidth knowledge synchronization for the District 3192 elite.</p>
        </div>
      </header>

      <section className="py-12 bg-surface px-6 lg:px-12 border-b border-outline-variant/30 sticky top-20 z-30 backdrop-blur-xl /80">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
            <button className="px-8 py-3 rounded-xl bg-primary text-on-primary font-black text-[10px] uppercase tracking-widest shadow-xl transition-all">All Protocols</button>
            <button className="px-8 py-3 rounded-xl text-primary/40 hover:text-primary font-black text-[10px] uppercase tracking-widest transition-all">Marketing</button>
            <button className="px-8 py-3 rounded-xl text-primary/40 hover:text-primary font-black text-[10px] uppercase tracking-widest transition-all">Leadership</button>
            <button className="px-8 py-3 rounded-xl text-primary/40 hover:text-primary font-black text-[10px] uppercase tracking-widest transition-all">Finance</button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 min-h-screen">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {courses.map((course: any, idx: number) => (
              <Link key={idx} href={`/lms/${course.id}`} className="group flex flex-col bg-surface-container-low rounded-[3rem] overflow-hidden border border-outline-variant/30 fluid-shadow hover:-container-lowest hover:translate-y-[-8px] transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  {course.is_ri_cert && (
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 shadow-xl flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      RI Certified
                    </div>
                  )}
                  <div className="absolute inset-0 aqueous-gradient opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/20"></span>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40">{course.category}</p>
                    </div>
                    <h3 className="text-3xl font-black text-primary font-headline tracking-tighter uppercase leading-tight italic">{course.title}</h3>
                  </div>
                  
                  <p className="text-on-surface-variant text-base font-medium leading-relaxed opacity-60 italic line-clamp-2">"{course.description}"</p>
                  
                  <div className="mt-auto pt-8 border-t border-primary/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <span className="material-symbols-outlined text-primary/30 text-lg">layers</span>
                       <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">{course.lessons.length} Modules</span>
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] group-hover:underline underline-offset-8">Initialize →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
