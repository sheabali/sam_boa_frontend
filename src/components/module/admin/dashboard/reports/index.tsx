import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import Link from "next/link";

interface Report {
  id: string;
  avatarSrc: string;
  name: string;
  description: string;
  date: string;
  time: string;
}

const reports: Report[] = [
  {
    id: "1",
    avatarSrc: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "2",
    avatarSrc: "https://i.ibb.co/Rkp8d1qq/Rectangle-23854-1.png",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "3",
    avatarSrc: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "4",
    avatarSrc: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "5",
    avatarSrc: "https://i.ibb.co/Rkp8d1qq/Rectangle-23854-1.png",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "6",
    avatarSrc: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
];

export default function ReportsPage() {
  return (
    <div className="md:p-10 lg:p-12">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="grid gap-4">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}

function ReportCard({ report }: { report: Report }) {
  return (
    <Card className=" py-4 px-2 md:px-6 md:py-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center  gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src={report.avatarSrc || "/placeholder.svg"}
              alt={report.name}
            />
            <AvatarFallback>{report.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <div className="flex items-baseline gap-1 text-sm">
              <span className="font-semibold">{report.name}</span>
              <span className="text-gray-600">{report.description}</span>
            </div>
            <div className="text-xs text-gray-500">
              <span>{report.date}</span>
              <span className="ml-1">{report.time}</span>
            </div>
          </div>
        </div>

        <Link href={`/admin/dashboard/reports/${report.id}`}>
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:text-white"
          >
            Report
          </Button>
        </Link>
      </div>
    </Card>
  );
}
