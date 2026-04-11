import BentoCard from "@/components/BentoCard";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--color-abyss)" }}>
      {/* HERO SECTION */}
      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #0a3560 0%, #020b18 70%)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span
            className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[.3em] mb-8 inline-block"
            style={{
              background: "rgba(0, 180, 216, 0.1)",
              border: "1px solid rgba(0, 180, 216, 0.3)",
              color: "var(--color-reef)",
            }}
          >
            The District Authority
          </span>
          <h1
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
            style={{ color: "var(--color-crest)" }}
          >
            Architecting <br />
            <span className="gradient-text">Social Change.</span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Rotaract District 3192 is a thriving network of young leaders
            committed to institutional excellence and sustainable community
            impact.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 px-6" style={{ background: "var(--color-abyss)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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

          <div
            className="rounded-[2rem] overflow-hidden aspect-video relative group"
            style={{ border: "1px solid var(--border-subtle)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4451d13488?auto=format&fit=crop&q=80&w=1200"
              alt="Service"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div
              className="absolute inset-0 flex items-end p-12"
              style={{
                background: "linear-gradient(to top, rgba(2,11,24,0.9), rgba(2,11,24,0.2))",
              }}
            >
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--color-crest)" }}>
                  Service Above Self
                </h3>
                <p className="font-medium leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Through every project and every handshake, we aim to build a
                  legacy of excellence that transcends generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 px-6" style={{ background: "var(--color-deep)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span
              className="text-xs font-black uppercase tracking-widest mb-4 block"
              style={{ color: "var(--color-reef)" }}
            >
              District Core Team
            </span>
            <h2
              className="text-5xl font-black tracking-tighter"
              style={{ color: "var(--color-crest)" }}
            >
              Strategic Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Priya Ramesh", role: "District Rotaract Representative", img: "https://ui-avatars.com/api/?name=Priya+Ramesh&background=0e6ba8&color=caf0f8&size=400" },
              { name: "Rahul Krishnan", role: "District Secretary", img: "https://ui-avatars.com/api/?name=Rahul+Krishnan&background=00b4d8&color=020b18&size=400" },
              { name: "Sneha Venkatesh", role: "District Treasurer", img: "https://ui-avatars.com/api/?name=Sneha+Venkatesh&background=0e6ba8&color=caf0f8&size=400" },
              { name: "Karthik Reddy", role: "Professional Service Chair", img: "https://ui-avatars.com/api/?name=Karthik+Reddy&background=00b4d8&color=020b18&size=400" },
            ].map((leader, idx) => (
              <div key={idx} className="card group p-6 hover:-translate-y-2 transition-all duration-300">
                <div
                  className="aspect-square rounded-2xl overflow-hidden mb-6"
                  style={{ border: "1px solid var(--border-subtle)" }}
                >
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--color-crest)" }}>
                  {leader.name}
                </h3>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--color-reef)" }}
                >
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-32 px-6" style={{ background: "var(--color-abyss)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl font-black tracking-tighter mb-12"
            style={{ color: "var(--color-crest)" }}
          >
            The Legacy of 3192
          </h2>
          <div className="space-y-6 text-lg font-medium leading-relaxed text-left" style={{ color: "var(--text-secondary)" }}>
            <p>
              Rotaract originally began as a Rotary International youth program
              in 1968 at Charlotte North Rotary Club in Charlotte, North
              Carolina, USA. Today, Rotaract operates globally with over 10,000
              clubs in 180 countries.
            </p>
            <p>
              District 3192 has a rich legacy of vibrant youth action in South
              India. Formed to concentrate impact within key urban and rural
              demographics, 3192 acts as a catalyst for professional development
              and massive community service projects.
            </p>
            <p>
              Our authority is derived from our commitment to institutional
              excellence and the tangible impact we create in the lives of those
              we serve.
            </p>
          </div>

          <div
            className="mt-20 p-12 rounded-[2rem]"
            style={{
              background: "linear-gradient(135deg, rgba(5,30,56,0.9) 0%, rgba(10,53,96,0.7) 100%)",
              border: "1px solid rgba(14, 107, 168, 0.4)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6 italic"
              style={{ color: "var(--color-reef)" }}
            >
              "Friendship through Service"
            </h3>
            <p className="font-medium mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Join a global movement of young leaders making an impact. Start
              your journey with Rotaract District 3192 today.
            </p>
            <a href="/clubs" className="btn-primary" style={{ display: "inline-flex" }}>
              Find a local club
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
