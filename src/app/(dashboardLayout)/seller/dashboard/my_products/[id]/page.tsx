import UpdateProductForm from "@/components/module/seller/dashboard/updateProduct";

const page = () => {
  const product = {
    id: "123",
    productName: "Classic Sneakers",
    description: "Comfortable and stylish sneakers perfect for everyday wear.",
    hashtag: "#sneakers #fashion #casual",
    gender: "both",
    productType: "footwear",
    condition: "brand-new",
    brand: "Nike",
    secondaryBrand: "",
    size: "US 9",
    setPrice: "99.99",
    setDiscount: "10.00",
    selectedColors: ["#ef4444", "#3b82f6"],
    mainImageUrl:
      "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
    additionalImageUrl:
      "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
  };

  return (
    <div>
      <UpdateProductForm product={product} />;
    </div>
  );
};

export default page;
