import { IconBase, type IconProps } from "@/shared/ui/base/icons/IconBase";

export const Withdraw = (props: IconProps) => {
  return (
    <IconBase viewBox="0 0 20 20" {...props}>
      <path
        d="M3.33332 10C3.33332 13.6819 6.31809 16.6667 9.99999 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 11.6667L10 3.33333M10 3.33333L12.5 5.83333M10 3.33333L7.5 5.83333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};
