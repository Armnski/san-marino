import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-dark-card p-8 rounded-lg border border-dark-content/30 card-hover ${className}`}
    >
      {icon && (
        <div className="w-14 h-14 rounded-lg bg-dark-content flex items-center justify-center mb-5 text-terracotta">
          {icon}
        </div>
      )}
      <h3 className="font-serif text-xl text-text-cream mb-3">{title}</h3>
      <p className="font-sans text-base text-text-grey/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

