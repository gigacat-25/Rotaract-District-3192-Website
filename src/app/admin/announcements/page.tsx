export default function AdminAnnouncementsPage() {
  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none">Signal Hub</h1>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 italic">Omni-Channel Broadcast Terminal</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-100">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-[9px] font-bold uppercase tracking-widest">Network Ready</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Section */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 border border-white shadow-2xl shadow-primary/5">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-4">Payload Template</label>
                  <select className="w-full bg-surface-container-low border border-outline/10 rounded-2xl p-4 font-bold text-sm text-on-surface focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option>General Assembly Notice</option>
                    <option>Dues Reminder</option>
                    <option>Event Approval Alert</option>
                    <option>District Training</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-4">Target Clusters</label>
                  <select className="w-full bg-surface-container-low border border-outline/10 rounded-2xl p-4 font-bold text-sm text-on-surface focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option>All Presidents and Secretaries</option>
                    <option>All Members</option>
                    <option>District Council</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-4">Dynamic Override</label>
                <input type="text" placeholder="Title for the broadcast message..." className="w-full bg-surface-container-low border border-outline/10 rounded-2xl p-5 font-bold text-sm text-on-surface focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all placeholder-on-surface-variant/30" />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-4">Message Body</label>
                <textarea rows={6} placeholder="Inject custom payload parameters here..." className="w-full bg-surface-container-low border border-outline/10 rounded-3xl p-6 font-bold text-sm text-on-surface focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all placeholder-on-surface-variant/30"></textarea>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button type="button" className="px-8 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] hover:text-primary transition-colors">Save as Draft</button>
                <button type="button" className="flex-1 bg-primary text-white font-black py-5 rounded-2xl uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
                  Transmit Signal
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Preview Section */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
           <div className="flex items-center justify-between px-2">
             <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Live Preview</h3>
             <span className="text-[10px] font-bold text-on-surface-variant italic opacity-60">Context: Club Terminal</span>
           </div>

           {/* Preview Card */}
           <div className="bg-surface-container-low rounded-[3rem] p-8 border border-outline/5 shadow-xl relative overflow-hidden group">
             {/* Mock UI Header */}
             <div className="flex items-center justify-between mb-10 pb-4 border-b border-outline/10">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-surface-container-highest/50"></div>
                 <div className="w-24 h-2 bg-surface-container-highest/50 rounded-full"></div>
               </div>
               <div className="flex gap-1.5">
                 <div className="w-4 h-4 rounded-full bg-surface-container-highest/50"></div>
                 <div className="w-4 h-4 rounded-full bg-surface-container-highest/50"></div>
               </div>
             </div>

             {/* The Broadcast Bubble */}
             <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-primary/5 space-y-6 border border-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text- campaign">campaign</span>
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex justify-between items-center">
                       <h4 className="text-xs font-black text-on-surface uppercase tracking-tight">District Assembly 2024</h4>
                       <span className="text-[8px] font-bold text-on-surface-variant opacity-40">T-0s</span>
                    </div>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest italic opacity-60">From: District Secretariat</p>
                  </div>
                </div>

                <p className="text-xs text-on-surface leading-relaxed italic opacity-80">"Greetings Leaders, early bird registration for the 2024 District Assembly is now synchronized. Ensure targets are met by EOD Friday."</p>

                <div className="bg-surface-container-low/50 rounded-xl p-3 flex items-center justify-between border border-outline/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary/40 text-lg">description</span>
                    <span className="text-[10px] font-bold text-on-surface">assembly_guide.pdf</span>
                  </div>
                  <span className="material-symbols-outlined text-sm text-primary">download</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                   <button className="text-[9px] font-black text-primary uppercase tracking-widest hover:underline">Acknowledge</button>
                   <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-white"></div>
                     <div className="w-6 h-6 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-[7px] font-bold text-primary">+42</div>
                   </div>
                </div>
             </div>

             {/* Mock UI Background Content */}
             <div className="mt-8 grid grid-cols-2 gap-4 opacity-20">
               <div className="h-20 bg-surface-container-highest rounded-2xl"></div>
               <div className="h-20 bg-surface-container-highest rounded-2xl"></div>
             </div>
           </div>

           {/* Target Analytics */}
           <div className="grid grid-cols-2 gap-6 px-4">
             <div className="space-y-1">
               <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-[.2em] opacity-40">Target Nodes</p>
               <p className="text-2xl font-black text-on-surface tracking-tighter">84 <span className="text-[10px] font-bold opacity-30 tracking-tight">CLUBS</span></p>
             </div>
             <div className="space-y-1 text-right">
               <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-[.2em] opacity-40">Target Signal</p>
               <p className="text-2xl font-black text-primary tracking-tighter">2.4K <span className="text-[10px] font-bold opacity-30 tracking-tight">SOULS</span></p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
