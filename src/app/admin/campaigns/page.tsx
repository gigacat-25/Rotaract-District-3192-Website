import Image from "next/image";

export default function AdminCampaignsPage() {
  return (
    <>
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-primary font-display">Campaigns &amp; Treasury</h1>
          <p className="text-on-surface-variant max-w-lg">Oversee fiscal initiatives, manage district-wide fundraising, and approve pending budgetary requests with administrative authority.</p>
        </div>
        <button className="bg-gradient-to-r from-primary-container to-primary/20 text-on-primary font-bold px-8 py-4 rounded-lg shadow-xl shadow-primary-container/20 flex items-center gap-2 active:scale-95 duration-200 transition-all">
          <span className="material-symbols-outlined">add_circle</span>
          Create New Campaign
        </button>
      </header>

      {/* Metrics Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>
          <div className="label-md uppercase tracking-[0.1em] text-zinc-500 mb-4 font-bold">Total Raised</div>
          <div className="text-5xl font-bold text-primary font-display mb-1">$412,850</div>
          <div className="flex items-center gap-2 text-tertiary text-sm font-bold">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +12.4% from last quarter
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-all"></div>
          <div className="label-md uppercase tracking-[0.1em] text-zinc-500 mb-4 font-bold">Active Campaigns</div>
          <div className="text-5xl font-bold text-tertiary font-display mb-1">24</div>
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            Running across 8 regional zones
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group border-b-2 border-primary/20">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-error/5 rounded-full blur-2xl group-hover:bg-error/10 transition-all"></div>
          <div className="label-md uppercase tracking-[0.1em] text-zinc-500 mb-4 font-bold">Pending Approvals</div>
          <div className="text-5xl font-bold text-on-background font-display mb-1">07</div>
          <div className="flex items-center gap-2 text-error text-sm font-bold">
            <span className="material-symbols-outlined text-sm">priority_high</span>
            Requires immediate review
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-on-background font-display">Live Initiatives</h2>
          <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline" href="#">View all campaigns <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Campaign Card 1 */}
          <div className="bg-surface-container p-1 rounded-2xl overflow-hidden group">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Environmental" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp1Gca_-GvE0k0aamW3LUicrHm1G3O3EztIGXglPKkPu43lbNHRFslKNYznfkzq3r6st_-a6j8jw7QQ4hs7WuT0a-gIs7UyjyYj6bbfDCltjnibRbas96qxQm3RbGHopV1zlVGbnDc5g06g21IxUXnThqBONWjNViox4SbtkEMeXVFc1pvAmrLCrSTk8UPNsEykXY6JYpFUJc5iBB014rNCrD4sKs9L5Yg366AAjY-PNfR7iPpBtZY3vmz3Wo054j2bd3DMnYOCbaY"/>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">Active</span>
                    <span className="text-zinc-500 text-xs font-medium">85% Funded</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2 font-display">Regional Afforestation Drive</h3>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-2">A district-wide initiative to plant 50,000 native trees across the urban corridor by 2025.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-zinc-500">Target: $25,000</span>
                    <span className="text-primary">$21,250</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Campaign Card 2 */}
          <div className="bg-surface-container p-1 rounded-2xl overflow-hidden group">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Medical" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyn20LdTaT7ucautNSG6fxB6MxFnQn86lXkApQ1JZkTcvoXF5wJbFcVY4XpGkYsvqcCObJvTlqHoN4da1PKGCy4OerNtgzciguo1V3HHCug5jBzbqvKUbKNLird55oIE60RNXPV0OYZMFk3GgiJKaKPjMCTYKHec9JkqWuh1fdeBcl_eHR_HeEm4xVGk_v9onbdoL9KDtogR8nMku_pMQDRUKWPuwVIK1c8VdSm49XVZoDs85GJHO71n0JpbQSAjuYxU1KILCm6ejh"/>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-tertiary/10 text-tertiary text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">Completed</span>
                    <span className="text-zinc-500 text-xs font-medium">102% Funded</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2 font-display">Public Health Infrastructure</h3>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-2">Funding for critical diagnostic equipment for the community medical center in Zone 4.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-zinc-500">Target: $80,000</span>
                    <span className="text-tertiary">$82,000</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Table */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-on-background font-display">Recent Transactions</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-zinc-400 hover:text-zinc-200">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-zinc-400 hover:text-zinc-200">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-high/50 text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                  <th className="px-8 py-5">Originator</th>
                  <th className="px-8 py-5">Campaign / Project</th>
                  <th className="px-8 py-5 text-right">Amount</th>
                  <th className="px-8 py-5">Date</th>
                  <th className="px-8 py-5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/20">
                <tr className="hover:bg-zinc-800/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs font-bold">RZ</div>
                      <div>
                        <div className="text-sm font-bold text-zinc-200">Rotaract Zone 1</div>
                        <div className="text-xs text-zinc-500">ID: #TXN-9981</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm font-medium text-zinc-300">Youth Literacy Grant</div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="text-sm font-bold text-primary">+$4,200.00</div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm text-zinc-400">Oct 24, 2023</div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded-full uppercase tracking-tighter">Approved</span>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold">DC</div>
                      <div>
                        <div className="text-sm font-bold text-zinc-200">District Council</div>
                        <div className="text-xs text-zinc-500">ID: #TXN-9975</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm font-medium text-zinc-300">Operational Overhead</div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="text-sm font-bold text-on-error">-$1,150.00</div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm text-zinc-400">Oct 22, 2023</div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-bold rounded-full uppercase tracking-tighter">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary text-xs font-bold">EM</div>
                      <div>
                        <div className="text-sm font-bold text-zinc-200">Environmental Team</div>
                        <div className="text-xs text-zinc-500">ID: #TXN-9962</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm font-medium text-zinc-300">Eco-Summit Funding</div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="text-sm font-bold text-primary">+$12,500.00</div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm text-zinc-400">Oct 20, 2023</div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded-full uppercase tracking-tighter">Approved</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
