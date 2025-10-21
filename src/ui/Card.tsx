import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export default function Card({
  children,
  className = "",
  bordered = true,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl ${
        bordered ? "border-2 border-sage/20" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
