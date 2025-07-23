import Button from "@/components/ui/button";
import Image from "next/image";
import AboutSection from "./AboutSection";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-gray-900 leading-tight mb-6">
            Style Is a Voice. We Built{" "}
            <span className="text-red-800">Vine</span> So You Could Speak
            Louder.
          </h1>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg md:text-[24px] leading-relaxed mb-4">
              Vine isn&apos;t your average fashion marketplace.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We&apos;re the place where styles are discovered, stories are
              sold, and fashion isn&apos;t just worn — it&apos;s owned. Here,
              every bid is a heartbeat. Every listing is someone&apos;s vision.
              And every deal is made by real people, not algorithms.
            </p>
          </div>
        </div>

        {/* Fashion Grid */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 items-center md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Left Column - Portrait */}
            <div className="col-span-1 row-span-2">
              <Image
                src="/about_1.png"
                alt="Artistic fashion portrait"
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Second Column - Two stacked images */}
            <div className="col-span-1 space-y-4 md:space-y-6">
              <Image
                src="/about_2.png"
                alt="Colorful fashion shoot"
                width={300}
                height={280}
                className="w-full object-cover rounded-lg"
              />
              <Image
                src="/about_3.png"
                alt="Bold fashion styling"
                width={300}
                height={280}
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Center Column - Large portrait */}
            <div className="col-span-2 md:col-span-1 row-span-2">
              <Image
                src="/about_4.png"
                alt="Minimalist fashion duo"
                width={500}
                height={400}
                className="w-full h-[60%] object-cover rounded-lg"
              />
            </div>

            {/* Fourth Column - Two stacked images */}
            <div className="col-span-1 space-y-4 md:space-y-6">
              <Image
                src="/about_5.png"
                alt="Colorful menswear"
                width={300}
                height={280}
                className="w-full object-cover rounded-lg"
              />
              <Image
                src="/about_6.png"
                alt="Artistic menswear portrait"
                width={300}
                height={280}
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Right Column - Portrait */}
            <div className="col-span-1 row-span-2">
              <Image
                src="/about_7.png"
                alt="Elegant fashion portrait"
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-6">
          Join the Movement. Dress Loudly. Deal Freely.
        </h1>
        <p className="text-gray-600 text-lg md:text-[24px] leading-relaxed mb-4">
          Welcome to Vine — where fashion doesn’t just follow trends… It sets
          them.
        </p>
        <Button className="bg-red-800 hover:bg-red-900 mt-4 text-white px-8 py-3 rounded-full text-base font-medium">
          Start Selling
        </Button>
      </div>
    </div>
  );
}
