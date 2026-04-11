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
  name, city, members, engagement, badge, type = 'primary', slug, icon = 'stars' 
}: ClubCardProps) {
  const accentColor = type === 'secondary' ? 'var(--color-gold)' : 'var(--color-reef)';
  const accentBg    = type === 'secondary'
    ? 'rgba(240, 165, 0, 0.12)'
    : 'rgba(0, 180, 216, 0.12)';

  return (
    <div className="card group relative overflow-hidden p-6">
      {/* Glow blob */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"
        style={{ background: accentBg }}
      />

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: accentBg, border: '1px solid rgba(14,107,168,0.25)' }}
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ color: accentColor, fontVariationSettings: "'FILL' 1" }}
          >
            {icon}
          </span>
        </div>
        <span
          className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ background: accentBg, color: accentColor }}
        >
          {badge}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-1 line-clamp-1" style={{ color: 'var(--color-crest)', fontFamily: "'Space Grotesk', sans-serif" }}>
        {name}
      </h3>
      <p className="text-sm font-medium flex items-center gap-1 mb-6" style={{ color: 'var(--text-muted)' }}>
        <span className="material-symbols-outlined text-xs">location_on</span>
        {city}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div
          className="p-4 rounded-2xl"
          style={{ background: 'rgba(10, 53, 96, 0.5)', border: '1px solid var(--border-subtle)' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
            Members
          </p>
          <p className="text-2xl font-black" style={{ color: 'var(--color-crest)' }}>{members}</p>
        </div>
        <div
          className="p-4 rounded-2xl"
          style={{ background: 'rgba(10, 53, 96, 0.5)', border: '1px solid var(--border-subtle)' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
            Engagement
          </p>
          <p className="text-2xl font-black" style={{ color: accentColor }}>{engagement}%</p>
        </div>
      </div>

      <Link
        href={`/clubs/${slug}`}
        className="w-full py-4 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        style={{
          background: type === 'secondary'
            ? 'linear-gradient(135deg, #f0a500, #c97d00)'
            : 'linear-gradient(135deg, #0e6ba8, #00b4d8)',
          color: type === 'secondary' ? '#020b18' : '#caf0f8',
          textDecoration: 'none',
          boxShadow: type === 'secondary'
            ? '0 4px 16px rgba(240,165,0,0.3)'
            : '0 4px 16px rgba(0,180,216,0.25)',
        }}
      >
        <span>View Details</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  );
}
