export interface TBidNotification {
  id: string;
  title: string;
  username: string;
  amount: string;
  product: string;
  timestamp: string;
  type: "pending" | "accepted";
}
