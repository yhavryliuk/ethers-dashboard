import { IconBase, type IconProps } from "@/shared/ui/base/icons/IconBase";

export const Deposit = (props: IconProps) => {
  return (
    <IconBase viewBox="0 0 20 20" {...props}>
      <path
        d="M3.33334 10C3.33334 13.6819 6.31811 16.6667 10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 3.33334L10 11.6667M10 11.6667L12.5 9.16667M10 11.6667L7.5 9.16667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};
