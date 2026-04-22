const categories = [
  {
    name: "Club Administration",
    docs: [
      { title: "Standard Club Constitution", type: "PDF", size: "1.2 MB", date: "Jul 2025" },
      { title: "Bylaws Template", type: "DOCX", size: "450 KB", date: "Jul 2025" },
      { title: "Meeting Agenda Template", type: "XLSX", size: "150 KB", date: "Aug 2025" }
    ]
  },
  {
    name: "Branding & PR",
    docs: [
      { title: "Rotaract Brand Guidelines", type: "PDF", size: "5.4 MB", date: "Jul 2025" },
      { title: "Social Media End Card", type: "PNG", size: "2.1 MB", date: "Jul 2025" },
      { title: "Letterhead Template", type: "DOCX", size: "300 KB", date: "Aug 2025" }
    ]
  },
  {
    name: "District Forms",
    docs: [
      { title: "District Dues Payment Form", type: "PDF", size: "800 KB", date: "Aug 2025" },
      { title: "Award Nomination Form", type: "DOCX", size: "250 KB", date: "Feb 2026" },
      { title: "Expense Reimbursement", type: "XLSX", size: "400 KB", date: "Aug 2025" }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <main className="lg:ml-64 min-h-screen relative overflow-visible pb-24 ">
      {/* Background Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] -z-10"></div>

      <header className="p-8 md:p-12 mb-12">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">The Vault</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">Resource Central</h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">Official documents, templates, and guidelines for District 3192 clubs.</p>
        </div>
      </header>

      <section className="p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-12 -container-low/50 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/20 shadow-sm">
              <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-6 opacity-60">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <a href={`#cat-${i}`} className="group flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline/20 group-hover:bg-primary transition-all"></span>
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documents List */}
          <div className="lg:col-span-9 space-y-16">
            {categories.map((cat, i) => (
              <div key={i} id={`cat-${i}`} className="scroll-mt-12 space-y-8">
                <div className="flex items-center gap-6">
                  <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight shrink-0">{cat.name}</h2>
                  <div className="h-px flex-grow bg-outline/10"></div>
                </div>
                
                <div className="grid gap-6">
                  {cat.docs.map((doc, dIdx) => (
                    <div key={dIdx} className="group p-8 -container-lowest/70 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110
                          ${doc.type === 'PDF' ? 'bg-red-500/10 text-red-600' : 
                            doc.type === 'DOCX' ? 'bg-blue-500/10 text-blue-600' : 
                            doc.type === 'XLSX' ? 'bg-green-500/10 text-green-600' : 'bg-primary/10 text-primary'}`}>
                          <span className="text-[10px] font-black uppercase tracking-widest leading-none">{doc.type}</span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xl font-black text-on-surface tracking-tight group-hover:text-primary transition-colors leading-tight">{doc.title}</h4>
                          <div className="flex items-center gap-4 text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm leading-none opacity-50">database</span> {doc.size}</span>
                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm leading-none opacity-50">history</span> {doc.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Download Asset
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </main>
  );
}
