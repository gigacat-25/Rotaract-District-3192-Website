import coursesData from "@/mock/courses.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export const runtime = 'edge';
export const dynamicParams = false;

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    courseId: course.id,
  }));
}

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = coursesData.find((c: any) => c.id === params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <main className="pt-20 min-h-screen ">
      
      <header className="bg-primary text-white pt-24 pb-32 relative overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full aqueous-gradient opacity-20 rounded-bl-[10rem] blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 /5 rounded-tr-[15rem] blur-2xl"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto relative z-10 space-y-6">
          <Link href="/lms" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all group">
            <span className="material-symbols-outlined text-lg group-hover:translate-x-[-4px] transition-transform">arrow_back</span>
            Terminate Protocol / Exit Academy
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="px-5 py-2 rounded-full bg-white/10 text-white text-[9px] font-black tracking-[0.3em] uppercase border border-white/10">{course.category}</span>
            {course.is_ri_cert && (
              <span className="px-5 py-2 rounded-full bg-primary-container text-on-primary-container text-[9px] font-black tracking-[0.3em] uppercase border border-primary/20">RI Authorized</span>
            )}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter font-headline uppercase leading-none italic">{course.title}</h1>
          <p className="text-xl text-white/70 max-w-3xl font-body font-medium italic leading-relaxed">"{course.description}"</p>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 -mt-20 relative z-20 pb-32 flex flex-col xl:flex-row gap-12">
        
        {/* Video Terminal */}
        <div className="xl:w-2/3 space-y-8">
          <div className="-container-lowest rounded-[3.5rem] aspect-video w-full shadow-2xl overflow-hidden border border-outline-variant/30 flex items-center justify-center relative group">
            <div className="absolute inset-0 aqueous-gradient opacity-5"></div>
            {/* Simulated video player interface */}
            <div className="text-center relative z-10 space-y-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-xl border border-primary/20 mx-auto group-hover:scale-110 transition-transform duration-700">
                 <span className="material-symbols-outlined text-primary text-5xl translate-x-1">play_arrow</span>
              </div>
              <div className="space-y-2 px-8">
                 <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Protocol Execution Required</p>
                 <p className="text-on-surface-variant font-medium text-sm italic opacity-60">Select a synchronization node from the manifest to begin data transmission.</p>
              </div>
            </div>
          </div>
          
          <div className="-container-low rounded-[3rem] p-10 lg:p-12 border border-outline-variant/30 fluid-shadow space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 aqueous-gradient opacity-5 blur-3xl pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-primary font-headline tracking-tighter uppercase italic">Sync Status</h2>
              <p className="text-[10px] font-black text-primary uppercase tracking-[.4em] opacity-40">33% Calibrated</p>
            </div>
            
            <div className="w-full -container-highest rounded-full h-4 relative overflow-hidden shadow-inner">
              <div className="absolute inset-y-0 left-0 aqueous-gradient rounded-full transition-all duration-1000" style={{ width: '33%' }}></div>
            </div>
            <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[.4em] opacity-40 italic">Calibration Profile: 01 / 03 Integration Nodes Synchronized</p>
          </div>
        </div>

        {/* Manifest Sidebar */}
        <div className="xl:w-1/3">
          <div className="-container-low rounded-[3.5rem] border border-outline-variant/30 fluid-shadow overflow-hidden sticky top-32">
            <div className="p-10 border-b border-primary/5 -container-lowest">
              <h3 className="text-2xl font-black text-primary font-headline tracking-tighter uppercase flex items-center gap-4 italic leading-none">
                <span className="material-symbols-outlined text-primary/30">list_alt</span>
                Protocol Nodes
              </h3>
            </div>
            
            <div className="divide-y divide-primary/5 max-h-[600px] overflow-y-auto no-scrollbar">
              {course.lessons.map((lesson: any, idx: number) => (
                <button key={idx} className={`w-full text-left p-8 transition-all flex items-start gap-6 group
                  ${idx === 0 ? 'bg-primary/5' : 'hover:-container-highest'}
                `}>
                  <div className={`shrink-0 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-xs font-black transition-all
                    ${idx === 0 ? 'border-green-500 bg-green-500 text-white shadow-lg' : 
                      idx === 1 ? 'border-primary text-primary' : 'border-outline-variant/50 text-on-surface-variant/40'}
                  `}>
                    {idx === 0 ? <span className="material-symbols-outlined text-base">check</span> : lesson.order_index}
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-base font-black uppercase tracking-tight font-headline group-hover:text-primary transition-colors
                      ${idx === 0 ? 'text-primary' : 'text-on-surface'}
                    `}>{lesson.title}</h4>
                    <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest italic flex items-center gap-2">
                      <span className="material-symbols-outlined text-[12px]">timer</span>
                      08:45 Transmission Time
                    </p>
                  </div>
                </button>
              ))}
            </div>
            
            {course.is_ri_cert && (
              <div className="p-10 border-t border-primary/5 -container-lowest text-center space-y-4">
                <button disabled className="w-full -container-highest text-primary/20 font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-[10px] border border-primary/5 shadow-inner cursor-not-allowed italic">
                  Initialize Certificate Generation
                </button>
                <p className="text-[9px] font-black text-on-surface-variant/30 uppercase tracking-widest italic">Synchronization of all core nodes required for authorization.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
