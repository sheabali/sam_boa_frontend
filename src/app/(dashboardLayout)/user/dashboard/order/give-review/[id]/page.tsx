/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import GiveReviewPage from "@/components/module/user/OrderHistory/GiveReview";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  console.log("id", id);

  return (
    <div>
      <GiveReviewPage />
    </div>
  );
};

export default page;
