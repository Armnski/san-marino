"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    padding: "18px 36px",
    borderRadius: "10px",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "2px solid #8B5E4A",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "#8B5E4A",
      color: "white",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "#8B5E4A",
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "secondary") {
      e.currentTarget.style.backgroundColor = "#8B5E4A";
      e.currentTarget.style.color = "white";
    } else {
      e.currentTarget.style.backgroundColor = "#6B4A3A";
      e.currentTarget.style.borderColor = "#6B4A3A";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "secondary") {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.color = "#8B5E4A";
    } else {
      e.currentTarget.style.backgroundColor = "#8B5E4A";
      e.currentTarget.style.borderColor = "#8B5E4A";
    }
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:opacity-90 active:scale-[0.98] ${className}`}
        style={{ ...baseStyles, ...variantStyles[variant] }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`hover:opacity-90 active:scale-[0.98] ${className}`}
      style={{ ...baseStyles, ...variantStyles[variant] }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
