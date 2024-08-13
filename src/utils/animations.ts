import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4"),
  ];

  if (banners.every(Boolean)) {
    gsap.set(banners, { yPercent: 0 });
    gsap.to(banners, {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4"),
  ];

  if (banners.every(Boolean)) {
    gsap.set(banners, { yPercent: -100 });
    gsap.to(banners, {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
