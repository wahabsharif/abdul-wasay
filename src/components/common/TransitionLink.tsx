"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

interface Props {
  href: string;
  label: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string; // Add this line
  style?: React.CSSProperties;
}

const TransitionLink: React.FC<Props> = ({
  href,
  label,
  children,
  onClick,
  className, // And this line
  style, // Destructure the style prop here
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      onClick={() => {
        handleClick();
        if (onClick) onClick(); // Call the onClick prop if provided
      }}
      className={className} // Use the className prop here
      style={style} // Apply the style prop here
    >
      {label}
      {children} {/* Render children if passed */}
    </button>
  );
};

export default TransitionLink;
