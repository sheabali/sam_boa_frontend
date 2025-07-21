"use client";

type Variant = "primary" | "outline" | "secondary";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-3xl font-medium transition-colors cursor-pointer hover:bg-primary/90";

  const variants: Record<Variant, string> = {
    primary: "bg-primary text-white",
    outline: "border border-black hover:bg-primary/10",
    secondary: "bg-secondary border border-secondary text-white",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={` 
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className ?? ""}
      `}
    >
      {children}
    </button>
  );
}
