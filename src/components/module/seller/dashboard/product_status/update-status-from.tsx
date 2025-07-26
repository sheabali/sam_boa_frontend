"use client";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function UpdateStatusForm() {
  const [formData, setFormData] = useState({
    productName: "",
    sellerName: "",
    updateProgress: "in-transit",
    estimatedDate: "12/05/25",
    estimatedTime: "06:30 am",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving changes:", formData);
    // Add API call or other logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold">Update Product Status</h2>

      <div className="flex items-center space-x-2"></div>

      <div className="space-y-4 border-2  p-6 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="productName" className="text-sm font-medium">
            Product Name :
          </Label>
          <Input
            id="productName"
            value={formData.productName}
            onChange={(e) =>
              setFormData({ ...formData, productName: e.target.value })
            }
            className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sellerName" className="text-sm font-medium">
            Seller Name :
          </Label>
          <Input
            id="sellerName"
            value={formData.sellerName}
            onChange={(e) =>
              setFormData({ ...formData, sellerName: e.target.value })
            }
            className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Update Progress</Label>
          <Select
            value={formData.updateProgress}
            onValueChange={(value) =>
              setFormData({ ...formData, updateProgress: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in-transit">In transit</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="received">Received</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Estimated Date</Label>
          <Select
            value={formData.estimatedDate}
            onValueChange={(value) =>
              setFormData({ ...formData, estimatedDate: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12/05/25">12/05/25</SelectItem>
              <SelectItem value="13/05/25">13/05/25</SelectItem>
              <SelectItem value="14/05/25">14/05/25</SelectItem>
              <SelectItem value="15/05/25">15/05/25</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Estimated Time</Label>
          <Select
            value={formData.estimatedTime}
            onValueChange={(value) =>
              setFormData({ ...formData, estimatedTime: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="06:30 am">06:30 am</SelectItem>
              <SelectItem value="07:00 am">07:00 am</SelectItem>
              <SelectItem value="07:30 am">07:30 am</SelectItem>
              <SelectItem value="08:00 am">08:00 am</SelectItem>
              <SelectItem value="08:30 am">08:30 am</SelectItem>
              <SelectItem value="09:00 am">09:00 am</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          type="submit"
          className="bg-red-800 hover:bg-red-900 text-white px-8"
        >
          Save Changes
        </Button>
        <Button
          type="button"
          className="text-gray-600 hover:text-gray-800"
          onClick={() => {
            // Handle cancel or reset
            console.log("Cancelled");
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
