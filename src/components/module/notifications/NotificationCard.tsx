import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface NotificationCardProps {
  title: string;
  timeAgo: string;
  message: string;
}

export function NotificationCard({
  title,
  timeAgo,
  message,
}: NotificationCardProps) {
  return (
    <Card className="w-full rounded-lg shadow-sm">
      <CardContent className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Text Content */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold">
              {title}
            </h2>
            <span className="text-sm sm:text-base text-muted-foreground">
              {timeAgo}
            </span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground break-words">
            <span role="img" aria-label="sparkles">
              🎉
            </span>{" "}
            <strong>Good News!</strong>
            <br />
            {message}
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto">
          <Link href="/chat">
            <Button className="w-full md:w-auto bg-[#800020] hover:bg-[#6a001a] text-white px-6 py-2 rounded-3xl">
              Open Chat
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
