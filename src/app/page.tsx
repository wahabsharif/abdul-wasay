import dynamic from "next/dynamic";

const HomeSlider = dynamic(() => import("@/components/home/HomeSlider"));

export default function HomePage() {
  return (
    <>
      <HomeSlider />
    </>
  );
}
