"use client";

import { Slider } from "@/components/ui/slider";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  value: number[];
  onChange: (value: number[]) => void;
};

const PriceRangePopover = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [tempPrice, setTempPrice] = useState<number[]>(value);

  const applyPrice = () => {
    onChange(tempPrice);
    setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal>
      <Popover.Trigger asChild>
        <button className="appearance-none text-left px-3 py-2 pr-8 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm relative bg-white w-full sm:w-auto">
          Price
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="start"
          sideOffset={8}
          className="bg-white border p-4 rounded-lg shadow-lg w-[90vw] max-w-xs z-50"
        >
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between gap-2">
              <input
                type="number"
                value={tempPrice[0]}
                onChange={(e) =>
                  setTempPrice([Number(e.target.value), tempPrice[1]])
                }
                className="w-1/2 border border-gray-300 rounded-md py-1 px-2 text-sm"
                min={0}
                placeholder="Min"
              />
              <input
                type="number"
                value={tempPrice[1]}
                onChange={(e) =>
                  setTempPrice([tempPrice[0], Number(e.target.value)])
                }
                className="w-1/2 border border-gray-300 rounded-md py-1 px-2 text-sm"
                min={0}
                placeholder="Max"
              />
            </div>

            <Slider
              min={0}
              max={500}
              step={5}
              value={tempPrice}
              onValueChange={setTempPrice}
              className="mb-1"
            />

            <div className="flex items-center justify-between">
              <span>₵{tempPrice[0]}</span>
              <span>₵{tempPrice[1]}+</span>
            </div>

            <button
              onClick={applyPrice}
              className="mt-2 w-full bg-[#800020] text-white py-1.5 rounded-md text-sm hover:bg-[#660018]"
            >
              Apply
            </button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PriceRangePopover;
