import type React from "react";

export type PortfolioStatProps = {
  label: React.ReactNode;
  value: React.ReactNode;
};

export const PortfolioStat: React.FC<PortfolioStatProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <span className="text-app-muted text-xs">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};
