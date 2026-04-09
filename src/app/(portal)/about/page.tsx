import BentoCard from "@/components/BentoCard";

export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative py-32 px-6 overflow-hidden bg-slate-950">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/20 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-violet-400 uppercase tracking-[.3em] mb-8 inline-block animate-fade-in">
            The District Authority
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none animate-fade-in-up">
            Architecting <br/> <span className="text-blue-400">Social Change.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Rotaract District 3192 is a thriving network of young leaders committed to institutional excellence and sustainable community impact.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <BentoCard 
              title="Our Mission"
              description="To provide opportunities for young men and women to enhance their knowledge and skills that will assist them in personal development, to address the physical and social needs of their communities, and to promote better relations between all people worldwide through a framework of friendship and service."
              icon="rocket_launch"
              type="primary"
            />
            <BentoCard 
              title="Our Vision"
              description="Together, we see a world where young people unite and take action to create lasting change — across the globe, in our communities, and in ourselves. We aim to be the premier leadership development organization for young professionals in South India."
              icon="visibility"
              type="secondary"
            />
          </div>

          <div className="rounded-[3rem] overflow-hidden aspect-video relative group">
            <img src="https://images.unsplash.com/photo-1559027615-cd4451d13488?auto=format&fit=crop&q=80&w=1200" alt="Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-12">
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold text-white mb-4">Service Above Self</h3>
                <p className="text-slate-300 font-medium leading-relaxed">Through every project and every handshake, we aim to build a legacy of excellence that transcends generations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-black text-primary uppercase tracking-widest mb-4 block">District Core Team</span>
            <h2 className="text-5xl font-black text-on-surface tracking-tighter">Strategic Leadership</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Priya Ramesh", role: "District Rotaract Representative", img: "https://ui-avatars.com/api/?name=Priya+Ramesh&background=6c2bd9&color=fff&size=400" },
              { name: "Rahul Krishnan", role: "District Secretary", img: "https://ui-avatars.com/api/?name=Rahul+Krishnan&background=316bf3&color=fff&size=400" },
              { name: "Sneha Venkatesh", role: "District Treasurer", img: "https://ui-avatars.com/api/?name=Sneha+Venkatesh&background=6c2bd9&color=fff&size=400" },
              { name: "Karthik Reddy", role: "Professional Service Chair", img: "https://ui-avatars.com/api/?name=Karthik+Reddy&background=316bf3&color=fff&size=400" }
            ].map((leader, idx) => (
              <div key={idx} className="group bg-surface-container-lowest rounded-3xl p-6 shadow-[0_10px_40px_rgba(108,43,217,0.06)] hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-200">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-1">{leader.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest opacity-60">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-on-surface tracking-tighter mb-12">The Legacy of 3192</h2>
          <div className="space-y-8 text-lg text-on-surface-variant font-medium leading-relaxed text-left">
            <p>
              Rotaract originally began as a Rotary International youth program in 1968 at Charlotte North Rotary Club in Charlotte, North Carolina, USA. Today, Rotaract operates globally with over 10,000 clubs in 180 countries.
            </p>
            <p>
              District 3192 has a rich legacy of vibrant youth action in South India. Formed to concentrate impact within key urban and rural demographics, 3192 acts as a catalyst for professional development and massive community service projects.
            </p>
            <p>
              Our authority is derived from our commitment to institutional excellence and the tangible impact we create in the lives of those we serve.
            </p>
          </div>
          
          <div className="mt-20 p-12 rounded-[2rem] bg-violet-50 dark:bg-slate-900/50 border border-violet-100 dark:border-white/5">
            <h3 className="text-2xl font-bold text-primary mb-6 italic">"Friendship through Service"</h3>
            <p className="text-on-surface-variant font-medium mb-10 max-w-2xl mx-auto">Join a global movement of young leaders making an impact. Start your journey with Rotaract District 3192 today.</p>
            <a href="/clubs" className="text-primary font-black text-xs uppercase tracking-widest border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">Find a local club</a>
          </div>
        </div>
      </section>
    </main>
  );
}
