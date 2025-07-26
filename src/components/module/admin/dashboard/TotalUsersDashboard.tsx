export default function TotalUsersDashboard() {
  return (
    <div className="p-8 max-w-2xl mx-auto h-full     rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-bold mb-4">Total Users</h1>
      <p className="text-lg font-semibold text-[#8B5CF6]  mb-6">
        Total Users : 12450
      </p>

      <hr className="border-t border-gray-300 mb-6" />

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <p className="text-lg">Basic Plan:</p>
          <p className="text-lg font-bold text-[#8B5CF6]">4,000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg">Standard Plan:</p>
          <p className="text-lg font-bold text-[#8B5CF6]">4,000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg">Unlimited Plan:</p>
          <p className="text-lg font-bold text-[#8B5CF6]">4,450</p>
        </div>
      </div>

      <hr className="border-t border-gray-300 mb-6" />

      <div className="flex justify-end">
        <p className="text-lg font-semibold text-[#8B5CF6]">
          Total Users : 12450
        </p>
      </div>
    </div>
  );
}
