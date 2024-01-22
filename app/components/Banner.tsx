import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative h-[250px] sm:h-[350px] 2xl:h-[500px]">
      <Image
        src="/banner.webp"
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full space-y-1 text-center font-semibold">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
      </div>
    </div>
  );
}

export default Banner;
