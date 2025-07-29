interface DynamicBannerProps {
  title?: string;
  subtitle?: string;
  backgroundClass?: string;
  textColor?: string;
  className?: string;
}

export default function DynamicBanner({
  title = "Frequently Asked",
  subtitle = "Questions",
  backgroundClass = "bg-[#fffbf2]",
  textColor = "text-gray-900",
  className = "",
}: DynamicBannerProps) {
  return (
    <section
      className={`relative w-full py-32 px-4 overflow-hidden ${backgroundClass} ${className}`}
    >
      {/* Decorative Gradient Blob */}
      <div
        className="absolute bottom-0 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-[#db7501] to-[#f0a500] opacity-30 blur-3xl filter 
        lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 
        xl:h-40 xl:w-[400px]"
      />
      <div
        className="absolute bottom-0 -right-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-[#db7501] to-[#f0a500] opacity-30 blur-3xl filter 
        lg:bottom-24 lg:-right-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 
        xl:h-40 xl:w-[400px]"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <h1
          className={`text-2xl md:text-5xl lg:text-6xl font-semibold ${textColor} leading-tight`}
        >
          {title}
        </h1>
        {subtitle && (
          <h2
            className={`text-[14px] md:text-base lg:text-base  ${textColor} leading-tight mt-2`}
          >
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}
