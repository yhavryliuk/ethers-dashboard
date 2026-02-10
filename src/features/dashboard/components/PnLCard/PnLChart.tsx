import type React from "react";
import { useCallback } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartPoint } from "@/server/buildBalanceChart";

export type PnLChartProps = {
  cumulativeData: ChartPoint[];
  updateHoveredValue: (hoveredValue: number | null) => void;
};

export const PnLChart: React.FC<PnLChartProps> = ({
  cumulativeData,
  updateHoveredValue,
}) => {
  const tooltipContentHandler = useCallback(
    (data: { activeIndex: string | undefined | null }) => {
      const point = cumulativeData[Number(data.activeIndex)];
      if (point) {
        return new Date(point.timestamp).toLocaleString();
      }
      return undefined;
    },
    [cumulativeData],
  );

  const hasData = cumulativeData.length > 0;

  return (
    <div className="h-22 -ml-1" style={{ width: "calc(100% + 8px)" }}>
      {!hasData && (
        <div className="text-app-highlight h-full w-full font-medium flex justify-center items-center">
          NO DATA FOR SELECTED PERIOD
        </div>
      )}
      {hasData && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={cumulativeData}
            onMouseMove={(state) => {
              if (state.activeIndex) {
                const segment = cumulativeData[Number(state.activeIndex)];
                updateHoveredValue(segment.value);
              }
            }}
            onMouseLeave={() => {
              updateHoveredValue(null);
            }}
          >
            <defs>
              <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF510050" stopOpacity={1} />
                <stop offset="100%" stopColor="#FF510050" stopOpacity={0} />
              </linearGradient>
            </defs>

            <YAxis hide domain={["auto", "auto"]} />
            <XAxis
              dataKey="timestamp"
              type="number"
              scale="time"
              domain={["dataMin", "dataMax"]}
              tick={{ fill: "#71717a", fontSize: 12 }}
              tickFormatter={(ts) => new Date(ts).toLocaleDateString()}
              hide
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              content={tooltipContentHandler}
              cursor={{ stroke: "var(--color-app-highlight)", strokeWidth: 1 }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-app-highlight)"
              strokeWidth={2}
              fill="url(#pnlGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "var(--color-app-highlight)" }}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
