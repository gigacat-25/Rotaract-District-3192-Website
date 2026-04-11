import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  badge?: string;
  statusBadge?: string;
}

export default function EventCard({ 
  title, date, description, image, slug, badge, statusBadge 
}: EventCardProps) {
  return (
    <div
      className="card flex-shrink-0 w-full sm:w-[340px] snap-start overflow-hidden group hover:-translate-y-2 transition-all duration-300"
      style={{ padding: 0 }}
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden" style={{ background: 'var(--color-mid)' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <span
            className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: 'rgba(0, 180, 216, 0.15)',
              color: 'var(--color-reef)',
            }}
          >
            {date}
          </span>
          {statusBadge && (
            <span
              className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
              style={{
                background: 'rgba(240, 165, 0, 0.15)',
                color: 'var(--color-gold)',
              }}
            >
              {statusBadge}
            </span>
          )}
        </div>

        <h4
          className="text-lg font-bold mb-2 line-clamp-1"
          style={{ color: 'var(--color-crest)', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h4>
        <p
          className="text-sm line-clamp-2 mb-5"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
            {badge}
          </span>
          <Link
            href={`/events/${slug}`}
            className="font-bold text-sm flex items-center gap-1 transition-colors"
            style={{ color: 'var(--color-reef)', textDecoration: 'none' }}
          >
            Details
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
