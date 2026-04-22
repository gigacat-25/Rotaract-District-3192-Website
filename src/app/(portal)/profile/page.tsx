import React from "react";
import Image from "next/image";

export const metadata = {
  title: "My Profile | District 3192",
};

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen font-body text-on-background selection:bg-primary-container selection:text-primary">
      <div className="max-w-3xl mx-auto pt-12 pb-32 px-6 space-y-10">
        
        {/* Header Title (optional since global navbar exists, but good for context) */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-headline tracking-tighter text-slate-100">
            My Profile
          </h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined text-primary">settings</span>
          </button>
        </div>

        {/* Hero Section: The Modern Statesman Entry */}
        <section className="relative">
          <div className="flex flex-col gap-6">
            <div className="w-full aspect-[4/5] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative group -container-low">
              <Image
                alt="Arjun Mehta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGQra2zvgn6aQemSR3sf_UlP4gxR_snXpuuAvMKn8o23aBogxuEz2CChsT9ojzANzqSHvLGZge19P3L19LITA9vIVTboQYMfvLTB1YMphJqW53xwMcZHUXCX3XN-QcFI_beiFyE2525s-FvH14121Ws7XoN0e7ycuPqDTHxJPvy-4Eh4MMwSOklA5cM7oJd0zo8lQhipO_v5dosqsKJ6Bxn7uXonBcSP54Ch2if5Wo7Tj9Bvrv10AHmgTdoHkATVouDQixdDKxCAqz"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="space-y-1">
              <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">
                Arjun Mehta
              </h2>
              <p className="text-primary font-headline font-medium text-lg tracking-wide uppercase">
                District Rotaract Representative
              </p>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">Rotaract Club of Bangalore West</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Hours: Visual Metric */}
        <section className="-container-low p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
          <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
            {/* Circular Progress Background */}
            <svg className="w-full h-full -rotate-90">
              <circle
                className="text-surface-container-highest"
                cx="96"
                cy="96"
                fill="transparent"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
              ></circle>
              <circle
                className="text-primary transition-all duration-1000 ease-out"
                cx="96"
                cy="96"
                fill="transparent"
                r="88"
                stroke="currentColor"
                strokeDasharray="552.92"
                strokeDashoffset="110.58" /* (1 - 240/300) * 552.92 */
                strokeLinecap="round"
                strokeWidth="8"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-headline font-bold text-on-surface">240</span>
              <span className="text-[10px] font-label font-extrabold uppercase tracking-[0.2em] text-on-surface-variant">
                of 300 Hours
              </span>
            </div>
          </div>
          <div className="space-y-2 max-w-sm">
            <h3 className="text-2xl font-headline font-semibold text-on-surface">Service Impact</h3>
            <p className="text-base text-on-surface-variant">
              You are in the top 5% of contributors this legislative year. Your dedication has directly impacted 1,200+ lives in the local community.
            </p>
          </div>
        </section>

        {/* Achievements: Horizontal Badges */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
              Achievements
            </h3>
            <button className="text-xs font-bold text-primary hover:underline">View All</button>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
            {/* Badge 1 */}
            <div className="flex-shrink-0 -container-lowest p-5 rounded-2xl flex flex-col items-center gap-3 w-32 shadow-sm border border-outline-variant/10">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  rewarded_ads
                </span>
              </div>
              <span className="text-[10px] font-label font-bold text-center leading-tight uppercase tracking-wider text-on-surface">
                Top Fundraiser
              </span>
            </div>
            {/* Badge 2 */}
            <div className="flex-shrink-0 -container-lowest p-5 rounded-2xl flex flex-col items-center gap-3 w-32 shadow-sm border border-outline-variant/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <span className="text-[10px] font-label font-bold text-center leading-tight uppercase tracking-wider text-on-surface">
                100% Attendance
              </span>
            </div>
            {/* Badge 3 */}
            <div className="flex-shrink-0 -container-lowest p-5 rounded-2xl flex flex-col items-center gap-3 w-32 shadow-sm border border-outline-variant/10">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <span className="text-[10px] font-label font-bold text-center leading-tight uppercase tracking-wider text-on-surface">
                Legacy Leader
              </span>
            </div>
            {/* Badge 4 */}
            <div className="flex-shrink-0 -container-lowest p-5 rounded-2xl flex flex-col items-center gap-3 w-32 shadow-sm border border-outline-variant/10">
              <div className="w-12 h-12 rounded-full bg-on-surface-variant/10 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-surface-variant"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  diversity_3
                </span>
              </div>
              <span className="text-[10px] font-label font-bold text-center leading-tight uppercase tracking-wider text-on-surface">
                Unity Anchor
              </span>
            </div>
          </div>
        </section>

        {/* Activity Timeline */}
        <section className="space-y-6">
          <h3 className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
            Recent Activity
          </h3>
          <div className="space-y-2">
            {/* Activity 1 */}
            <div className="bg-surface-container-low hover:-container transition-colors cursor-pointer p-5 rounded-2xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">gavel</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-headline font-bold text-on-surface">Chaired District Assembly</h4>
                <p className="text-xs text-on-surface-variant font-medium">May 24, 2024 &bull; Governance</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-lg">
                chevron_right
              </span>
            </div>
            {/* Activity 2 */}
            <div className="bg-surface-container-low hover:-container transition-colors cursor-pointer p-5 rounded-2xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-tertiary text-xl">menu_book</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-headline font-bold text-on-surface">Donated to Literacy Project</h4>
                <p className="text-xs text-on-surface-variant font-medium">May 18, 2024 &bull; Community</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-lg">
                chevron_right
              </span>
            </div>
            {/* Activity 3 */}
            <div className="bg-surface-container-low hover:-container transition-colors cursor-pointer p-5 rounded-2xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl">group</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-headline font-bold text-on-surface">Mentored 5 Interactors</h4>
                <p className="text-xs text-on-surface-variant font-medium">May 12, 2024 &bull; Youth Service</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-lg">
                chevron_right
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
