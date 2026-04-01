"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 120, height = 32 }: LogoProps) {
  return (
    <>
      <Image
        src="/logo/corweb-logo-dark.svg"
        alt="Corweb"
        width={width}
        height={height}
        className={`dark:hidden ${className ?? ""}`}
        priority
      />
      <Image
        src="/logo/corweb-logo-light.svg"
        alt="Corweb"
        width={width}
        height={height}
        className={`hidden dark:block ${className ?? ""}`}
        priority
      />
    </>
  );
}
