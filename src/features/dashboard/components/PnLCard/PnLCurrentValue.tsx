import NumberFlow from "@number-flow/react";
import Image from "next/image";
import type React from "react";

export type PnLCurrentValueProps = {
  value: number;
  durationName: string;
};

export const PnLCurrentValue: React.FC<PnLCurrentValueProps> = ({
  value,
  durationName,
}) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-1 grow">
        <div>
          <div className="text-4xl -my-[4.5px]">
            <NumberFlow
              value={value}
              format={{
                style: "currency",
                currency: "USD",
                signDisplay: "always",
              }}
              locales="en-US"
            />
          </div>
        </div>
        <div className="text-app-muted text-sm font-medium">{durationName}</div>
      </div>
      <Image src="/watermark.svg" width={30} height={20} alt="Watermark" />
    </div>
  );
};
