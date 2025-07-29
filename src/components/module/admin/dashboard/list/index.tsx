import { SellerCard } from "./seller-card";

const sellers = [
  {
    name: "Darlene Robertson",
    username: "Seller name",
    shopName: "Shop name",
    isActive: true,
    avatarUrl: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
    avatarFallback: "DR",
  },
  {
    name: "Ronald Richards",
    username: "Seller name",
    shopName: "Shop name",
    isActive: false,
    avatarUrl: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
    avatarFallback: "RR",
  },
  {
    name: "Floyd Miles",
    username: "Seller name",
    shopName: "Shop name",
    isActive: true,
    avatarUrl: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
    avatarFallback: "FM",
  },
  {
    name: "Esther Howard",
    username: "Seller name",
    shopName: "Shop name",
    isActive: false,
    avatarUrl: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
    avatarFallback: "EH",
  },
  {
    name: "Jane Cooper",
    username: "Seller name",
    shopName: "Shop name",
    isActive: true,
    avatarUrl: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
    avatarFallback: "JC",
  },
];

export default function SellerList() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-xl lg:text-3xl font-bold mb-6">Seller List</h1>
      <div className="grid  gap-4">
        {sellers.map((seller, index) => (
          <SellerCard
            key={index}
            name={seller.name}
            username={seller.username}
            shopName={seller.shopName}
            isActive={seller.isActive}
            avatarUrl={seller.avatarUrl}
            avatarFallback={seller.avatarFallback}
          />
        ))}
      </div>
    </div>
  );
}
