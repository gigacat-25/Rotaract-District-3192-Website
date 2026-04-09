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
  title, 
  date, 
  description, 
  image, 
  slug, 
  badge, 
  statusBadge 
}: EventCardProps) {
  return (
    <div className="flex-shrink-0 w-full sm:w-[350px] snap-start rounded-xl bg-surface-container-lowest p-4 shadow-[0_10px_40px_rgba(108,43,217,0.06)] hover:-translate-y-2 transition-all duration-300 group">
      <div className="h-48 w-full rounded-lg mb-6 overflow-hidden bg-slate-200">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="px-2">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black tracking-widest text-secondary uppercase bg-secondary/10 px-2 py-1 rounded">
            {date}
          </span>
          {statusBadge && (
            <span className="text-[9px] font-bold text-primary-container bg-primary-container/10 px-1.5 py-0.5 rounded uppercase tracking-wider">
              {statusBadge}
            </span>
          )}
        </div>
        <h4 className="text-xl font-bold mb-2 text-on-surface line-clamp-1">{title}</h4>
        <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary">{badge}</span>
          <Link href={`/events/${slug}`} className="text-primary-container font-bold text-sm flex items-center gap-1 group/link">
            Details 
            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
