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
  const typeClasses = {
    primary: 'bg-primary-container/10 text-primary',
    secondary: 'bg-secondary-container/10 text-secondary',
    tertiary: 'bg-tertiary-container/10 text-tertiary'
  };

  return (
    <div className={`group p-8 rounded-xl bg-surface-container-lowest border border-transparent hover:border-primary/10 shadow-[0_10px_40px_rgba(2,47,86,0.06)] hover:shadow-[0_20px_50px_rgba(2,47,86,0.15)] hover:-translate-y-1 transition-all duration-500 ${translateY ? 'md:translate-y-8 hover:md:translate-y-6' : ''}`}>
      <div className={`w-14 h-14 mb-6 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${typeClasses[type]}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-on-surface">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
