import Link from "next/link";

interface ClubCardProps {
  name: string;
  city: string;
  members: number;
  engagement: number;
  badge: string;
  type?: 'primary' | 'secondary';
  slug: string;
  icon?: string;
}

export default function ClubCard({ 
  name, 
  city, 
  members, 
  engagement, 
  badge, 
  type = 'primary', 
  slug, 
  icon = 'stars' 
}: ClubCardProps) {
  const iconColor = type === 'secondary' ? 'text-secondary' : 'text-primary';
  const engagementColor = type === 'secondary' ? 'text-secondary' : 'text-violet-600';
  const btnClass = type === 'secondary' ? 'bg-secondary-container' : 'bg-primary-container glow-primary';
  const badgeClass = type === 'secondary' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700';

  return (
    <div className="group relative bg-surface-container-lowest rounded-[2rem] p-6 shadow-[0_10px_40px_rgba(108,43,217,0.06)] hover:translate-y-[-4px] transition-all duration-300 overflow-hidden">
      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ${type === 'secondary' ? 'bg-secondary-container/5' : 'bg-primary-container/5'}`}></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center border border-white">
          <span className={`material-symbols-outlined ${iconColor} text-2xl`} style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <h3 className="text-xl font-bold text-on-surface mb-1 line-clamp-1">{name}</h3>
      <p className="text-sm text-on-surface-variant font-medium flex items-center gap-1 mb-6">
        <span className="material-symbols-outlined text-xs">location_on</span> {city}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-surface-container-low/50 p-4 rounded-2xl">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Members</p>
          <p className="text-2xl font-black text-on-surface">{members}</p>
        </div>
        <div className="bg-surface-container-low/50 p-4 rounded-2xl">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Engagement</p>
          <p className={`text-2xl font-black ${engagementColor}`}>{engagement}%</p>
        </div>
      </div>

      <Link href={`/clubs/${slug}`} className={`w-full py-4 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all ${btnClass}`}>
        <span>View Details</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  );
}
