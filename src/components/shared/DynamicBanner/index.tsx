interface DynamicBannerProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export default function DynamicBanner({
  title = "Frequently Asked",
  subtitle = "Questions",
  backgroundColor = "bg-orange-50",
  textColor = "text-gray-900",
  className = "",
}: DynamicBannerProps) {
  return (
    <section className={`w-full py-16 px-4 ${backgroundColor} ${className}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} leading-tight`}
        >
          {title}
        </h1>
        {subtitle && (
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} leading-tight mt-2 underline decoration-2 underline-offset-8`}
          >
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}
