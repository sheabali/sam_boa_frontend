import { UserIcon } from "lucide-react";

const Metric = () => {
  const totalUsers = 120;
  const totalSellers = 504;
  const listingAdded = 120;
  const newSignupsThisWeek = 10;

  const cardStyle =
    "flex flex-col items-center justify-center p-6 text-center border-2 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 py-6">
      <div className={cardStyle}>
        <div className="flex items-center gap-2 text-3xl sm:text-4xl font-semibold text-[#3cf551]">
          {totalUsers}
        </div>
        <p className="flex items-center text-[#14e92d] text-base sm:text-lg mt-2">
          {" "}
          <UserIcon className=" sm:w-8 sm:h-8" /> Total Users
        </p>
      </div>

      <div className={cardStyle}>
        <div className="flex items-center gap-2 text-3xl sm:text-4xl font-semibold text-[#ffc72e]">
          {totalSellers}
        </div>
        <p className="flex items-center text-[#ffc934] text-lg sm:text-lg mt-2">
          <UserIcon className=" sm:w-8 sm:h-8" /> Total Sellers
        </p>
      </div>

      <div className={cardStyle}>
        <div className="text-3xl sm:text-4xl font-semibold text-[#B20392]">
          {listingAdded}
        </div>
        <p className="text-[#B20392] text-base sm:text-lg mt-2">
          Listing Added
        </p>
      </div>

      <div className={cardStyle}>
        <div className="text-3xl sm:text-4xl font-semibold text-[#6E08DA]">
          {newSignupsThisWeek || 0}
        </div>
        <p className="text-[#6E08DA] text-base sm:text-lg mt-2">
          New Signups This Week
        </p>
      </div>
    </div>
  );
};

export default Metric;
