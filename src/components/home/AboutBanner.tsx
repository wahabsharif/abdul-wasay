import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

function AboutBanner() {
  return (
    <section>
      <div className="flex-1 relative z-10 p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold text-brandy tracking-tighter sm:text-5xl xl:text-6xl/none">
            Abdul wasay:
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView className="my-6">
          <span className="text-hummingBird text-lg md:text-xl">
            A professional graphic designer with experience in Adobe Photoshop
            since 2019, who has recently expanded his skills to include Adobe
            Illustrator, Adobe Premiere Pro, Adobe After Effects, and other
            Adobe software. He has also been working as a WordPress developer
            since 2020, with a strong command of Elementor. Now, he is here to
            share his expertise and assist with any queries related to graphic
            design and WordPress.
          </span>
        </BlurFade>
      </div>
    </section>
  );
}

export default AboutBanner;
