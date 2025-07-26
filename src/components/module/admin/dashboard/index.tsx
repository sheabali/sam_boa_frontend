"use client";

import Metric from "./Metric";
import { ChartAreaDefault } from "./Recharts";

import TotalUsersDashboard from "./TotalUsersDashboard";

const MechanicDashboard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="my-8 text-2xl font-bold text-center ">Admin Dashboard</h1>

      <div className="  p-4 mb-6">
        <Metric />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="">
          <ChartAreaDefault />
        </div>
        <div className="">
          <TotalUsersDashboard />
        </div>
      </div>
    </div>
  );
};

export default MechanicDashboard;
