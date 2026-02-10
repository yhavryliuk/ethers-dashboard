import type React from "react";
import { DEFAULT_IMAGE_WALLET_PATH } from "@/shared/constants";
import { formatJoinedDate } from "@/shared/helpers";
import { Edit, IconSize } from "@/shared/ui/base/icons";
import { EditImageButton } from "./EditImageButton";

export type MainAccountInfoProps = {
  walletName?: string;
  walletImageSrc?: string;
  onChangeWalletImage: () => void;
  onChangeWalletName: () => void;
  joinTimestamp: number;
};

export const MainAccountInfo: React.FC<MainAccountInfoProps> = ({
  walletName = "My Wallet",
  walletImageSrc = DEFAULT_IMAGE_WALLET_PATH,
  onChangeWalletImage,
  onChangeWalletName,
  joinTimestamp,
}) => {
  const joinedAt = formatJoinedDate(joinTimestamp);

  return (
    <div className="flex gap-3 items-center">
      <EditImageButton
        imageSrc={walletImageSrc}
        onClick={onChangeWalletImage}
      />
      <div className="flex flex-col gap-0.5">
        <div className="font-medium text-black flex gap-1 items-center">
          {walletName}
          <button
            className="text-app-muted cursor-pointer"
            type="button"
            onClick={onChangeWalletName}
          >
            <Edit size={IconSize.XSmall} />
          </button>
        </div>
        <div className="text-app-muted text-xs">Joined {joinedAt}</div>
      </div>
    </div>
  );
};
