"use client";

import clsx from "clsx";
import type React from "react";
import { DURATIONS } from "@/shared/constants";
import { ArrowUp, IconSize, LoadOut } from "@/shared/ui/base/icons";
import {
  PnLDurationPicker,
  type PnLDurationPickerProps,
} from "./PnLDurationPicker";

export type PnLHeaderProps = Omit<PnLDurationPickerProps, "durations"> & {
  isPositive: boolean;
  onClickExport: () => void;
};

export const PnLHeader: React.FC<PnLHeaderProps> = ({
  isPositive,
  onClickExport,
  ...pickerProps
}) => {
  return (
    <div className="flex justify-between text-app-muted">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.25">
          <ArrowUp
            size={IconSize.Small}
            className={clsx(
              "transition-transform",
              isPositive ? "text-app-positive" : "text-app-negative rotate-180",
            )}
          />
          <span className="text-sm leading-4.5">Profit/Loss</span>
        </div>
        <div>
          <button
            type="button"
            className="cursor-pointer"
            onClick={onClickExport}
          >
            <LoadOut size={IconSize.Small} />
          </button>
        </div>
      </div>
      <div>
        <PnLDurationPicker {...pickerProps} durations={DURATIONS} />
      </div>
    </div>
  );
};
