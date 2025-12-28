interface SectionTitleProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  color?: "light" | "dark" | "golden";
}

export default function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
  color = "light",
}: SectionTitleProps) {
  const colors = {
    light: "text-text-cream",
    dark: "text-dark-bg",
    golden: "text-golden",
  };

  const sizes = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl",
  };

  return (
    <Tag
      className={`font-serif leading-tight ${sizes[Tag]} ${colors[color]} ${className}`}
    >
      {children}
    </Tag>
  );
}

