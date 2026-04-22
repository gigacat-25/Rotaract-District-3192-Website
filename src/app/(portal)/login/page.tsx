export default function LoginPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-6 ">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-container/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 -z-20">
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #6c2bd9 1px, transparent 0)", backgroundSize: "48px 48px" }}></div>
      </div>

      {/* Main Content Shell */}
      <div className="w-full max-w-[480px] relative">
        {/* Floating Accent Blob */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary-container to-secondary-container rounded-full opacity-20 blur-2xl"></div>
        
        {/* Login Card */}
        <div className="-container-lowest/70 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/40 relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-secondary-container mb-6 shadow-lg shadow-primary-container/20">
                <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
              </div>
              <h1 className="text-3xl font-black tracking-tighter text-on-surface mb-2">Welcome Back</h1>
              <p className="text-on-surface-variant font-medium">Log in to your Rotaract account</p>
            </div>

            <form action="/dashboard" className="space-y-6">
              <div className="space-y-1.5 group">
                <label className="text-[0.75rem] font-bold uppercase tracking-widest text-on-surface-variant px-1">Email or Phone</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="name@example.com" 
                    className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all hover:-container"
                  />
                </div>
              </div>

              <div className="space-y-1.5 group">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[0.75rem] font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
                  <a href="#" className="text-[0.75rem] font-bold text-primary hover:text-secondary transition-colors">Forgot?</a>
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all hover:-container"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-6">
                <button type="submit" className="w-full py-4 px-6 bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                  Continue
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>

                <div className="flex items-center gap-4 py-2">
                  <div className="h-px flex-1 bg-outline-variant/30"></div>
                  <span className="text-[0.7rem] font-black text-outline uppercase tracking-widest">Or</span>
                  <div className="h-px flex-1 bg-outline-variant/30"></div>
                </div>

                <div className="text-center">
                  <p className="text-on-surface-variant font-medium text-sm">
                    Don't have an account? 
                    <a href="#" className="text-primary font-bold hover:underline underline-offset-4 ml-1">Create Account</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-outline font-bold">
            Rotaract Portal © 2024 Architectural Excellence
          </p>
        </div>
      </div>

      {/* Background Decorative Visual */}
      <div className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-[300px] h-[400px]">
        <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl rotate-3 scale-110">
          <img src="https://images.unsplash.com/photo-1541888941257-1830df5d812e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
            <div>
              <h3 className="text-white text-xl font-bold tracking-tight mb-1">Service Above Self</h3>
              <p className="text-white/70 text-sm">Join a global network of young leaders taking action.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
