"use client";

import Image from "next/image";
import type React from "react";
import { EditImage, IconSize } from "@/shared/ui/base/icons";

export type EditImageButtonProps = {
  imageSrc: string;
  onClick: () => void;
};

export const EditImageButton: React.FC<EditImageButtonProps> = ({
  imageSrc,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="p-3 rounded-full relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <Image
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        src={imageSrc}
        alt="Wallet Image"
        width={40}
        height={40}
      />
      <span className="bg-[#FF510099] inset-0 absolute w-full h-full"></span>
      <EditImage size={IconSize.Small} className="text-white relative z-1" />
    </button>
  );
};
