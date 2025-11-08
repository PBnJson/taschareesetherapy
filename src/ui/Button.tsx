import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cta";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105";

  const variantStyles = {
    primary: "bg-white text-black hover:bg-primary-light shadow-lg",
    secondary: "bg-sage text-white hover:bg-secondary-dark shadow-lg",
    cta: "bg-transparent text-fg hover:bg-white/50 shadow-lg border-1 border-fg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
