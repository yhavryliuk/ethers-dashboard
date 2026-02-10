"use client";

import type React from "react";
import { useCallback } from "react";
import {
  PortfolioOverviewView,
  type PortfolioOverviewViewProps,
} from "./PortfolioOverviewView";

export type PortfolioOverviewCardProps = Omit<
  PortfolioOverviewViewProps,
  | "onChangeWalletImage"
  | "onChangeWalletName"
  | "onClickDeposit"
  | "onClickWithdraw"
>;

export const PortfolioOverviewCard: React.FC<PortfolioOverviewCardProps> = (
  props,
) => {
  const handleChangeWalletImage = useCallback(() => {
    alert("Here must be upload image modal (crop/progressbar)");
  }, []);
  const handleChangeWalletName = useCallback(() => {
    alert("Here must modal with change wallet name input");
  }, []);
  const handleClickDeposit = useCallback(() => {
    alert("deposit flow");
  }, []);
  const handleClickWithdraw = useCallback(() => {
    alert("withdraw flow");
  }, []);

  const handlers = {
    onChangeWalletName: handleChangeWalletName,
    onChangeWalletImage: handleChangeWalletImage,
    onClickDeposit: handleClickDeposit,
    onClickWithdraw: handleClickWithdraw,
  };

  return <PortfolioOverviewView {...props} {...handlers} />;
};
