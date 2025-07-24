import Image from "next/image";

export default function SaleBanner() {
  return (
    <div className=" bg-gray-100 lg:mt-[150px]">
      {/* Main Banner Section */}
      <div className="relative bg-gradient-to-bl from-red-500 via-[#a82b2b] to-[#ec4141] bg-clip-border overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 z-10 relative">
              <div className="space-y-2">
                <p className="text-sm font-semibold tracking-wider uppercase">
                  SALE
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Enjoy up to <span className="text-yellow-300">70% off!</span>
                </h1>
              </div>
              <p className="text-lg opacity-90 max-w-md">
                Grab your limited-time discount and enjoy 70% off on all our
                products.
              </p>
              <button className="btn btn-primary py-5 px-10 rounded-md font-semibold bg-white text-black">
                SHOP NOW
              </button>
            </div>

            {/* Right Image */}
            <div className="relative lg:absolute lg:-right-80 lg:top-0  lg:bottom-0 lg:w-1/2">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/image 75.png"
                  alt="Stylish model with elegant outfit"
                  width={400}
                  height={100}
                  //   fill
                  className="object-cover object-center lg:object-right"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          {/* <div className="flex justify-center space-x-2 mt-12 lg:mt-16">
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
