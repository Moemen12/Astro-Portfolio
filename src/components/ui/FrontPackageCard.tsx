import { PackagesParams } from "../@/types/index.d.ts";
// Image replaced;
import React from "react";

const FrontPackageCard = ({ pkg }: { pkg: PackagesParams }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-tertiary rounded-[20px]">
      <h3 className="text-white text-[20px] font-bold text-center">
        {pkg.name}
      </h3>
      <img src={pkg.image} alt={pkg.name} className="w-16" />
    </div>
  );
};

export default FrontPackageCard;
