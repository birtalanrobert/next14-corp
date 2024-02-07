import Hero from "@/components/hero";
import relianilityImg from "../../../public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgData={relianilityImg}
        imgAlt="welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
