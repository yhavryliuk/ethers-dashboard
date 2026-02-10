import { forwardRef, type SVGProps } from "react";

export enum IconSize {
  XXSmall = 12,
  XSmall = 14,
  Small = 16,
  Medium = 20,
}

export type IconTypes = "filled" | "stroke";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  size?: number | string | IconSize;
  fill?: string;
  width?: number | string;
  height?: number | string;
  type?: IconTypes;
  className?: string;
};

export const IconBase = forwardRef<SVGSVGElement, IconProps>(function IconBase(
  {
    children,
    size = IconSize.Medium,
    fill = "none",
    width = size,
    height = size,
    viewBox,
    ...properties
  },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...properties}
    >
      {children}
    </svg>
  );
});
