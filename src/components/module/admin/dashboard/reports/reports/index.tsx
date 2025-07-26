"use client";

import Button from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Reports</h1>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold">Saler Name:</span>{" "}
            <a href="#" className="text-red-700 underline">
              atc_shops.
            </a>
          </p>
          <p>
            <span className="font-semibold">User Name:</span>{" "}
            <a href="#" className="text-red-700 underline">
              Anna Rossiuer
            </a>
          </p>
          <p>
            <span className="font-semibold">Report About:</span> Rude Behaviour
          </p>
          <p>
            <span className="font-semibold">Report Description:</span> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <p className="font-semibold">Take Action</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Select defaultValue="send-warning">
              <SelectTrigger className="w-[240px] h-12 text-base">
                <SelectValue placeholder="Select an action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="send-warning">Send Warning</SelectItem>
                <SelectItem value="permanent-block">Permanent Block</SelectItem>
                <SelectItem value="temporary-block">Temporary Block</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#8B0000] hover:bg-[#6A0000] text-white px-6 py-3 h-12 text-base rounded-md shadow-md">
              Take Action
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
