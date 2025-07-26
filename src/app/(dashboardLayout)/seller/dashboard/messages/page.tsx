/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import MessagesPage from "@/components/module/seller/dashboard/messages";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  console.log("id", id);
  return (
    <div>
      <MessagesPage />
    </div>
  );
};

export default page;
