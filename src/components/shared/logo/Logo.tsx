import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col items-center justify-center gap-1">
      {/* Icon Part */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
        <Image
          src="/vine_main.svg"
          alt="Vine Icon"
          fill
          priority
          className="object-contain cursor-pointer"
          sizes="(max-width: 768px) 40px, 56px"
        />
      </div>

      {/* Text Part */}
      <div className="relative w-[60px] h-[20px] sm:w-[72px] sm:h-[24px] md:w-[80px] md:h-[28px]">
        <Image
          src="/VINE.svg"
          alt="VINE Text"
          fill
          className="object-contain cursor-pointer"
          sizes="(max-width: 768px) 60px, 80px"
        />
      </div>
    </Link>
  );
};

export default Logo;
