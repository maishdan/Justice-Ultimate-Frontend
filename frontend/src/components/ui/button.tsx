import React from "react";

export function Button({
  children,
  className = "",
  onClick,
  size = "md",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
}) {
  const sizeClass = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  }[size];

  const variantClass = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  }[variant];

  return (
    <button onClick={onClick} className={`rounded ${sizeClass} ${variantClass} ${className}`}>
      {children}
    </button>
  );
}
