import ContactForm from "@/components/module/Contact";
import DynamicBanner from "@/components/shared/DynamicBanner";

const page = () => {
  return (
    <div>
      <DynamicBanner title="Let’s Connect — We’re Here to Help" subtitle="" />
      <div className="mt-10 mb-[160px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
