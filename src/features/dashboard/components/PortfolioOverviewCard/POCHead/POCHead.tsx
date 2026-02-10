"use client";

import type React from "react";
import { MainAccountInfo, type MainAccountInfoProps } from "./MainAccountInfo";
import { PortfolioInfo, type PortfolioInfoProps } from "./PortfolioInfo";

export type POCHeadProps = MainAccountInfoProps & PortfolioInfoProps;

export const POCHead: React.FC<POCHeadProps> = ({
  walletName,
  walletImageSrc,
  onChangeWalletImage,
  onChangeWalletName,
  joinTimestamp,
  notUSDCPortfolio,
  portfolioWithUSDC,
}) => {
  return (
    <div className="flex justify-between items-center">
      <MainAccountInfo
        walletName={walletName}
        walletImageSrc={walletImageSrc}
        onChangeWalletImage={onChangeWalletImage}
        onChangeWalletName={onChangeWalletName}
        joinTimestamp={joinTimestamp}
      />
      <PortfolioInfo
        portfolioWithUSDC={portfolioWithUSDC}
        notUSDCPortfolio={notUSDCPortfolio}
      />
    </div>
  );
};
