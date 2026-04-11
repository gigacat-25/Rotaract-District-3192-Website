interface BentoCardProps {
  title: string;
  description: string;
  icon: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  translateY?: boolean;
}

export default function BentoCard({ 
  title, 
  description, 
  icon, 
  type = 'primary', 
  translateY = false 
}: BentoCardProps) {
  const iconStyles = {
    primary:   { bg: 'rgba(14, 107, 168, 0.2)',  color: 'var(--color-reef)' },
    secondary: { bg: 'rgba(240, 165, 0, 0.15)',   color: 'var(--color-gold)' },
    tertiary:  { bg: 'rgba(144, 224, 239, 0.12)', color: 'var(--color-foam)' },
  };
  const { bg, color } = iconStyles[type];

  return (
    <div
      className={`card group p-8 ${translateY ? 'md:translate-y-8 hover:md:translate-y-6' : ''}`}
    >
      <div
        className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ background: bg }}
      >
        <span
          className="material-symbols-outlined text-3xl"
          style={{ color }}
        >
          {icon}
        </span>
      </div>
      <h3
        className="text-xl font-bold mb-4"
        style={{ color: 'var(--color-crest)', fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h3>
      <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </div>
  );
}
