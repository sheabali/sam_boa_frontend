import Image from "next/image";

export default function VineWorks() {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - How Vine Works */}
          <div className="space-y-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8">
              How Vine Works
            </h1>

            <div className="space-y-6">
              <div className="flex items-start text-[12px] text-base  space-x-4">
                <span className="font-semibold text-gray-900">Step 1:</span>
                <p className="text-gray-700">
                  Browse or upload your own clothing
                </p>
              </div>

              <div className="flex items-start text-[12px] text-base  space-x-4">
                <span className="font-semibold text-gray-900">Step 2:</span>
                <p className="text-gray-700">Place bids or receive offers</p>
              </div>

              <div className="flex items-start text-[12px] text-base  space-x-4">
                <span className="font-semibold text-gray-900">Step 3:</span>
                <p className="text-gray-700">Accept/Deny/Counter</p>
              </div>

              <div className="flex items-start text-[12px] text-base  space-x-4">
                <span className="font-semibold text-gray-900">Step 4:</span>
                <p className="text-gray-700">Chat & finalize payment</p>
              </div>

              <div className="flex items-start text-[12px] text-base  space-x-4">
                <span className="font-semibold text-gray-900">Step 5:</span>
                <p className="text-gray-700">
                  Screenshot payment, fill buyer form, and done!
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4 h-fit">
            {/* Top row */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://i.ibb.co/8hL2q29/Rectangle-2.png"
                  alt="Fashion model in suit"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://i.ibb.co/CsD37hfL/Rectangle-3.png"
                  alt="Fashion model in patterned shirt"
                  width={200}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://i.ibb.co/dsQC2G0P/Rectangle-6.png"
                  alt="Fashion model in floral shirt"
                  width={200}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://i.ibb.co/xWmVxXJ/Rectangle-4.png"
                  alt="Fashion model in African print"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://i.ibb.co/qS6BGbB/Rectangle-5.png"
                  alt="Runway fashion model"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
