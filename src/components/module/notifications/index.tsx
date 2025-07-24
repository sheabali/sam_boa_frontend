import { Separator } from "@/components/ui/separator";
import { NotificationCard } from "./NotificationCard";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Bid Accepted by Seller",
      timeAgo: "2 minutes ago",
      message:
        'Your bid on "Oversized Vintage Denim Jacket" has been accepted by @StyleVault. Mobile Money Number +88013265412581, please pay within 4 hours to get the product.',
    },
    {
      id: 2,
      title: "Bid Accepted by Seller",
      timeAgo: "2 minutes ago",
      message:
        'Your bid on "Oversized Vintage Denim Jacket" has been accepted by @StyleVault. Mobile Money Number +88013265412581, please pay within 4 hours to get the product.',
    },
    {
      id: 3,
      title: "Bid Accepted by Seller",
      timeAgo: "2 minutes ago",
      message:
        'Your bid on "Oversized Vintage Denim Jacket" has been accepted by @StyleVault. Mobile Money Number +88013265412581, please pay within 4 hours to get the product.',
    },
    {
      id: 4,
      title: "Bid Accepted by Seller",
      timeAgo: "2 minutes ago",
      message:
        'Your bid on "Oversized Vintage Denim Jacket" has been accepted by @StyleVault. Mobile Money Number +88013265412581, please pay within 4 hours to get the product.',
    },
    {
      id: 5,
      title: "Bid Accepted by Seller",
      timeAgo: "2 minutes ago",
      message:
        'Your bid on "Oversized Vintage Denim Jacket" has been accepted by @StyleVault. Mobile Money Number +88013265412581, please pay within 4 hours to get the product.',
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen mt-5 bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="container w-full bg-white rounded-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-bold text-center mb-4">Notifications</h1>
        <Separator className="mb-8" />
        <div className="space-y-6 text-2xl ">
          {notifications.length === 0 && (
            <p className="text-center">No notifications found.</p>
          )}
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              title={notification.title}
              timeAgo={notification.timeAgo}
              message={notification.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
