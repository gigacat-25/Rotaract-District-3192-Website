import coursesData from "@/mock/courses.json";

export default function AdminLmsPage() {
  const courses = coursesData;

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none">Learning Management</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">Academy Training & Certification Framework</p>
        </div>
        <button className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-8 py-4 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <span className="material-symbols-outlined text-base">library_add</span>
          Auth New Course
        </button>
      </header>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-xl hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-500 overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
               <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
               <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest border border-white/20">
                 {course.category}
               </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                 {course.is_ri_cert && (
                    <span className="material-symbols-outlined text-primary text-base">verified</span>
                 )}
                 <h3 className="text-lg font-black text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
              </div>
              <p className="text-xs text-on-surface-variant font-medium opacity-60 italic mb-6 line-clamp-2">{course.description}</p>
              
              <div className="mt-auto space-y-6">
                 <div className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
                    <span className="flex items-center gap-1.5">
                       <span className="material-symbols-outlined text-base">play_circle</span>
                       {course.lessons.length} Modules
                    </span>
                     <span className="flex items-center gap-1.5">
                       <span className="material-symbols-outlined text-base">group</span>
                       124 Enrolled
                    </span>
                 </div>
                 <div className="pt-6 border-t border-outline/5 flex items-center justify-between">
                    <a href={`/admin/lms/${course.id}`} className="text-[9px] font-black text-primary uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all flex items-center gap-2 group/btn">
                       Edit Course
                       <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                    <button className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all">
                       <span className="material-symbols-outlined text-base">more_vert</span>
                    </button>
                 </div>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Card */}
        <button className="bg-surface-container-low/50 rounded-[2.5rem] border-2 border-dashed border-outline/10 p-12 flex flex-col items-center justify-center text-center hover:bg-white hover:border-primary/20 transition-all duration-500 min-h-[400px] group">
           <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-primary group-hover:rotate-90 transition-transform duration-700 mb-6">
             <span className="material-symbols-outlined text-3xl">add</span>
           </div>
           <h3 className="text-xl font-black text-on-surface uppercase tracking-tight">Deploy New<br/>Syllabus</h3>
           <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-4 opacity-40">Expand District Knowledge Base</p>
        </button>
      </div>
    </div>
  );
}
