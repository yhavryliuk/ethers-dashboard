"use client";

import debounce from "lodash.debounce";
import type React from "react";
import { useCallback, useState } from "react";
import type { ChartPoint } from "@/server/buildBalanceChart";
import { getChart } from "@/server/getChart";
import type { Duration } from "@/shared/constants";
import { PnLChart } from "./PnLChart";
import { PnLCurrentValue } from "./PnLCurrentValue";
import { PnLHeader } from "./PnLHeader";

export type PnLCardProps = {
  initialData: ChartPoint[];
  initialDuration: Duration;
};

export const PnLCard: React.FC<PnLCardProps> = ({
  initialData,
  initialDuration,
}) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [selectedDuration, setSelectedDuration] =
    useState<Duration>(initialDuration);
  const [chartData, setChartData] = useState<ChartPoint[]>(initialData);
  const [loading, setLoading] = useState(false);

  const lastValue = chartData[chartData.length - 1]?.value ?? 0;
  const currentCumulativeValue = hoveredValue ?? lastValue;
  const isPositive = currentCumulativeValue >= 0;

  const handleHoverDebounce = useCallback(
    debounce((value: number | null) => {
      setHoveredValue(value);
    }, 50),
    [],
  );

  const handleDurationChange = useCallback(
    async (duration: Duration) => {
      if (duration === selectedDuration || loading) return;
      setSelectedDuration(duration);
      setLoading(true);

      try {
        const newData = await getChart(duration);
        setChartData(newData);
        setHoveredValue(null);
      } catch (err) {
        console.error("Failed to fetch chart:", err);
      } finally {
        setLoading(false);
      }
    },
    [selectedDuration, loading],
  );

  return (
    <div className="flex flex-col gap-1.25">
      <PnLHeader
        isPositive={isPositive}
        onSelectDuration={handleDurationChange}
        selectedDuration={selectedDuration}
      />
      <PnLCurrentValue
        durationName={selectedDuration.extendedLabel}
        value={currentCumulativeValue}
      />
      <PnLChart
        cumulativeData={chartData}
        updateHoveredValue={handleHoverDebounce}
      />
    </div>
  );
};
