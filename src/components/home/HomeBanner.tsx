import { socialLinks } from "@/data/navData";
import Image from "next/image";
import Link from "next/link";
import homeBanner from "@/assets/home/home-banner.png";
import BlurFade from "@/components/magicui/blur-fade";

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center w-full mt-16 overflow-hidden p-4 md:p-2">
      {/* Image */}
      <BlurFade
        delay={0.25}
        inView
        className="flex-shrink-0 w-full md:w-1/2 h-auto relative"
      >
        <Image
          src={homeBanner}
          alt="Banner Image"
          layout="responsive"
          width={1000}
          height={500}
        />
      </BlurFade>

      {/* Content */}
      <div className="flex-1 relative z-10 p-4 md:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <BlurFade delay={0.25} inView>
          <h1 className="text-2xl font-bold text-brandy tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
            Welcome to Our Website
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-hummingBird text-base md:text-lg mb-4 md:mb-6">
            Discover amazing content and stay connected with us through our
            social media channels.
          </span>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView className="my-4 md:my-5">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="text-2xl p-2 text-center bg-blueStonePrim rounded-full text-hummingBird hover:text-peachOrange transition-transform duration-300 ease-in-out hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent />
                </Link>
              );
            })}
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default HomeBanner;
