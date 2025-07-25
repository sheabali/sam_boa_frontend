import Image from "next/image";

export default function TrackOrderPage() {
  const orderStatus = [
    { id: 1, name: "Order Confirmed", completed: true },
    { id: 2, name: "In process", completed: true },
    { id: 3, name: "Shipped", completed: true },
    { id: 4, name: "In transit", completed: false },
    { id: 5, name: "Received", completed: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10 md:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Track Order</h1>

      <div className="mb-6 space-y-2 text-sm md:text-base">
        <p className="font-semibold">
          Product Name: <span className="font-normal">Example Product A</span>
        </p>
        <p className="font-semibold">
          Seller Name: <span className="font-normal">Example Seller B</span>
        </p>
      </div>

      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Track your order progress
      </h2>

      {/* Responsive Step Tracker */}
      <div className="relative overflow-x-auto">
        <div className="flex items-start justify-between min-w-[600px] sm:min-w-full relative mb-8 px-2">
          {orderStatus.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center flex-1 min-w-[80px]"
            >
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-white z-10 ${
                  step.completed ? "" : "bg-gray-300"
                }`}
              >
                {step.completed ? (
                  <Image
                    src="/tik.svg"
                    alt="Checked"
                    fill
                    className="w-24 h-24"
                  />
                ) : (
                  <span className="text-sm font-medium text-gray-600">
                    {step.id}
                  </span>
                )}
              </div>
              <span
                className={`mt-2 text-center text-xs sm:text-sm ${
                  step.completed ? "text-primary font-medium" : "text-gray-600"
                }`}
              >
                {step.name}
              </span>

              {/* Horizontal line */}
              {index < orderStatus.length - 1 && (
                <div
                  className={`absolute top-4 left-[calc(${
                    index * (100 / (orderStatus.length - 1))
                  }%)] w-[calc(${100 / (orderStatus.length - 1)}%)] h-0.5 ${
                    step.completed ? "bg-primary" : "bg-gray-300"
                  }`}
                  style={{ transform: `translateX(50%)` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-4 text-sm md:text-base">
        <div>
          <p className="font-semibold">Order date</p>
          <p className="text-gray-600">12/05/25</p>
          <p className="text-gray-600">6:30 AM</p>
        </div>
        <div>
          <p className="font-semibold">Estimated Delivery Time</p>
          <p className="text-gray-600">15/05/25</p>
          <p className="text-gray-600">6:30 AM</p>
        </div>
      </div>
    </div>
  );
}
