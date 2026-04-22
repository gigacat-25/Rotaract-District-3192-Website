import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dashboard | District 3192",
};

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-background font-body text-on-background selection:bg-primary-container selection:text-primary">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Welcoming Hero */}
        <section className="relative overflow-hidden rounded-3xl -container-low p-8 md:p-12 mt-4 shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-label text-tertiary text-xs font-bold uppercase tracking-[0.2em]">
                Rotaract District 3192
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">
                Welcome back, Arjun
              </h2>
              <p className="font-body text-on-surface-variant text-lg max-w-md">
                You have 2 pending event approvals that require your attention today.
              </p>
            </div>
            <button className="bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold py-3 px-8 rounded-xl transition-all active:scale-95 flex items-center gap-2 group">
              Take Action
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
          {/* Decorative background element */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        </section>

        {/* Quick Actions Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-2xl font-bold tracking-tight">Quick Actions</h3>
            <span className="text-xs font-label uppercase tracking-widest text-outline">
              Frequent Tasks
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="#"
              className="group bg-surface-container-lowest hover:-container transition-colors p-6 rounded-2xl flex flex-col gap-4 active:scale-[0.98] border border-outline-variant/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <span className="font-headline font-bold text-lg leading-tight">Log Hours</span>
            </Link>
            <Link
              href="#"
              className="group bg-surface-container-lowest hover:-container transition-colors p-6 rounded-2xl flex flex-col gap-4 active:scale-[0.98] border border-outline-variant/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <span className="font-headline font-bold text-lg leading-tight">
                Register for Event
              </span>
            </Link>
            <Link
              href="/clubs"
              className="group bg-surface-container-lowest hover:-container transition-colors p-6 rounded-2xl flex flex-col gap-4 active:scale-[0.98] border border-outline-variant/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                <span className="material-symbols-outlined">contacts</span>
              </div>
              <span className="font-headline font-bold text-lg leading-tight">
                View Directory
              </span>
            </Link>
            <Link
              href="#"
              className="group bg-surface-container-lowest hover:-container transition-colors p-6 rounded-2xl flex flex-col gap-4 active:scale-[0.98] border border-outline-variant/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error group-hover:bg-error group-hover:text-on-error transition-all">
                <span className="material-symbols-outlined">description</span>
              </div>
              <span className="font-headline font-bold text-lg leading-tight">Submit Report</span>
            </Link>
          </div>
        </section>

        {/* Upcoming Events Horizontal Scroll */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-2xl font-bold tracking-tight">Upcoming Events</h3>
            <Link
              href="/events"
              className="text-primary font-label text-sm uppercase tracking-widest hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x hide-scrollbar">
            {/* Event Card 1 */}
            <div className="min-w-[280px] md:min-w-[340px] snap-start -container-low rounded-2xl overflow-hidden group border border-outline-variant/10 shadow-md">
              <div className="h-40 relative">
                <Image
                  alt="District Assembly"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3dfOjAhTlLUkuZ6zTVv8cVAqAaIZemK5u0SeEAb3nveX0ZzDCl07K8hHKYTVhLgAz2kRE5EQXXU1-MDc6ZoHwCHvbL0_XaZRdn7afxFlfLX5OLaToIAHqcsB2wvyjbaKuWqoV-aRjVmoyYWS0OP4f5SOrDWBJWUgxa9JKJc-HF5QRWJ8WthJbIDC0l-kTDj0Uveh0g5qWf5jzPRK1Oe5Yl5NmX-vMqnD_4rGXopGuXPLtdpXIJId8zBRKJRavf7WNGjsgyWp_FPXz"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 space-y-3 relative z-10 -mt-8">
                <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-1 rounded font-label font-bold uppercase tracking-widest">
                  Oct 24
                </span>
                <h4 className="font-headline text-xl font-bold">District Assembly</h4>
                <p className="text-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Bangalore International Centre
                </p>
              </div>
            </div>
            {/* Event Card 2 */}
            <div className="min-w-[280px] md:min-w-[340px] snap-start -container-low rounded-2xl overflow-hidden group border border-outline-variant/10 shadow-md">
              <div className="h-40 relative">
                <Image
                  alt="Blood Drive"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxO-bxuFiOzGj5Il0qsEjQtHHft03I6KQAoN7z1whBaKmJO0iUkgkMvD5xjRBpLKodqJ0JexjPlSRNqW19Lj6io86IUkKPDWJ0DCY1PFOcVui2NeY2tE5OwLN1FoAdTJDOk3d1Av01PPWC3g0tnUwLpIMsuYtMeQmeI709D827CBpQ_jqJ1R8wsUY75Uq24ILfAdd4MpBUigIF6DMBJQ8oo-W8khlGKwJo2x0gG95JN41rHMOPzQ5mskCtLxhzRNEyyvWEs2um2RkG"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 space-y-3 relative z-10 -mt-8">
                <span className="bg-error-container text-on-error-container text-[10px] px-2 py-1 rounded font-label font-bold uppercase tracking-widest">
                  Oct 30
                </span>
                <h4 className="font-headline text-xl font-bold">Blood Drive</h4>
                <p className="text-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Victoria Hospital, City Centre
                </p>
              </div>
            </div>
            {/* Event Card 3 */}
            <div className="min-w-[280px] md:min-w-[340px] snap-start -container-low rounded-2xl overflow-hidden group border border-outline-variant/10 shadow-md">
              <div className="h-40 relative">
                <Image
                  alt="Nature Walk & Clean-up"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPqIvsZofSxDnDt-eksOb5T4How7628Ox04uEWa3sK_EozhVMxj-ma_L1fhVEyZ9rgmmAcB9tAadQ4Qtt5z-ljMKh7CEh6LwBG6XbBeMLLaoRPCfP4cpU-xdTiCTl1pP8_N57oWCKDMC4glOjgceTosqjFSfOfvL1FW6z-wrgvaUloiax1TE8rTEk6PLOplI1W-UjS5zhcO0q8FPBgEeXjhoImNFBP1Lai122th9ynMN0UO2b6c3zdqhW6WVDvIVxxv79KzZKHvlKE"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 space-y-3 relative z-10 -mt-8">
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-1 rounded font-label font-bold uppercase tracking-widest">
                  Nov 05
                </span>
                <h4 className="font-headline text-xl font-bold">Nature Walk & Clean-up</h4>
                <p className="text-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Cubbon Park Entrance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Impact Stats Row */}
        <section className="-container-lowest rounded-3xl p-8 border border-outline-variant/5 shadow-xl">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h3 className="font-headline text-2xl font-bold tracking-tight text-on-surface">My Impact</h3>
              <p className="text-on-surface-variant text-sm">Your contribution to the district this year</p>
            </div>
            <Link href="/profile" className="text-primary font-bold text-sm hover:underline">
              Detailed Profile
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-1 border-l-2 border-primary pl-6">
              <span className="font-headline text-4xl font-bold text-on-surface">120</span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                Hours Logged
              </span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-tertiary pl-6">
              <span className="font-headline text-4xl font-bold text-on-surface">15</span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                Events Attended
              </span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-secondary pl-6">
              <span className="font-headline text-4xl font-bold text-on-surface">₹50k</span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                Funds Raised
              </span>
            </div>
          </div>
        </section>

        {/* Club Updates */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-2xl font-bold tracking-tight">Club Updates</h3>
            <span className="font-body text-sm text-outline">Rotaract Club of Bangalore West</span>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-surface-container-low hover:-container rounded-2xl flex items-start gap-4 hover:translate-x-1 transition-all cursor-pointer border border-outline-variant/10 shadow-sm">
              <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">New Board Nominations Open</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Applications for the upcoming tenure 2024-25 are now open. Interested members please contact the Secretary.
                </p>
                <span className="text-[10px] font-label text-outline uppercase mt-3 inline-block tracking-widest">
                  2 hours ago
                </span>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low hover:-container rounded-2xl flex items-start gap-4 hover:translate-x-1 transition-all cursor-pointer border border-outline-variant/10 shadow-sm">
              <div className="bg-tertiary/20 p-3 rounded-full text-tertiary shrink-0">
                <span className="material-symbols-outlined">volunteer_activism</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Weekly Meeting Location Change</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  This week&apos;s meeting will be held at the Community Center instead of the usual club house.
                </p>
                <span className="text-[10px] font-label text-outline uppercase mt-3 inline-block tracking-widest">
                  Yesterday
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
