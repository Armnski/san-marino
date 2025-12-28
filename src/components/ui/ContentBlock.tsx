import { ReactNode } from "react";

interface ContentBlockProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "darker" | "card";
  hoverable?: boolean;
}

export default function ContentBlock({
  children,
  className = "",
  variant = "dark",
  hoverable = true,
}: ContentBlockProps) {
  const variants = {
    dark: "bg-dark-bg",
    darker: "bg-dark-content",
    card: "bg-dark-card border border-dark-content/30",
  };

  const hoverClass = hoverable ? "card-hover" : "";

  return (
    <div className={`p-8 rounded-xl ${variants[variant]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
