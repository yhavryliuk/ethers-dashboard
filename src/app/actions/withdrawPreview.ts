"use server";

import { getPublicKey } from "@/shared/helpers/getPublicKey";

export async function withdrawPreview(amount: number) {
  if (amount <= 0) {
    throw new Error("Invalid amount");
  }

  return {
    success: true,
    preview: {
      token: "USDC",
      amount,
      to: getPublicKey(),
      estimatedFee: 0.12,
    },
  };
}
