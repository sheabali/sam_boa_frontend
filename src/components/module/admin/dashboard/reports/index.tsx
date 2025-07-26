import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";

import { Card } from "@/components/ui/card";

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
    avatarSrc: "/placeholder.svg?height=40&width=40",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "2",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "3",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "4",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "5",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
  {
    id: "6",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    name: "Anna Rossiuer",
    description: "report to atc_shops.",
    date: "05 Jan 2024",
    time: "10:00 AM",
  },
];

export default function ReportsPage() {
  return (
    <div className="p-6 md:p-10 lg:p-12">
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
    <Card className="flex items-center justify-between p-4 rounded-lg shadow-sm border border-gray-200 bg-white">
      <div className="flex items-center gap-4">
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
      <Button
        variant="outline"
        className="border-red-400 text-red-600 hover:bg-red-50 hover:border-red-500 hover:text-red-700 bg-transparent"
      >
        View Report
      </Button>
    </Card>
  );
}
