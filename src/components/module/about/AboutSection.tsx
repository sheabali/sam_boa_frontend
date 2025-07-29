import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              A Community of Creators, Collectors, and Curators
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We created Vine for the fashion hunters, the upcyclers, the 1-of-1
              chasers. It&apos;s a platform where anyone can sell, everyone can
              bid, and everyone can shine. From independent designers to thrift
              enthusiasts, from first-time sellers to style influencers — this
              is where fashion gets real.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/about_8.png"
              alt="Group of stylish individuals representing the fashion community"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* No Gatekeepers Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/about_9.png"
              alt="Group of stylish individuals representing the fashion community"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              No Gatekeepers. No Middlemen. Just You & the Fit.
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>No hidden algorithms.</p>
              <p>No overpriced hype.</p>
              <p>No boring cart checkouts.</p>
            </div>
            <div className="space-y-3 text-gray-900 font-medium">
              <p>At Vine, you&apos;re in control.</p>
              <p>You name the price.</p>
              <p>You accept the bid.</p>
              <p>You chat. You deal. You decide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              We&apos;re Not a Shop. We&apos;re a Stage.
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>Your banner. Your rules.</p>
              <p>Got a drop? Promote it.</p>
              <p>Going viral? Make it shoppable.</p>
              <p>Just want to flex? Do that too.</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/about_11.png"
              alt="Group of stylish individuals representing the fashion community"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/about_10.png"
              alt="Group of stylish individuals representing the fashion community"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Built With Trust. Grown By You.
            </h2>
            <div className="space-y-3 text-base text-gray-600">
              <p>No hidden algorithms.</p>
              <p>No overpriced hype.</p>
              <p>No boring cart checkouts.</p>
            </div>
            <div className="space-y-3 text-base text-gray-900 font-medium">
              <p>At Vine, you&apos;re in control.</p>
              <p>You name the price.</p>
              <p>You accept the bid.</p>
              <p>You chat. You deal. You decide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
