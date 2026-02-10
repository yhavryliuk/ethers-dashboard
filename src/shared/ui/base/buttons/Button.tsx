"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/shared/helpers/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.75 text-sm font-medium cursor-pointer border",
  {
    variants: {
      variant: {
        primary: "bg-app-highlight text-white border-app-highlight",
        secondary: "bg-app-secondary text-black border-app-border-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  variant,
  whileHover = { scale: 1.03 },
  whileDrag = { scale: 0.96 },
  drag = false,
  dragConstraints = { left: 0, right: 0 },
  dragElastic = 0.15,
  ...props
}: ButtonProps) => {
  const isDisabled = props.disabled;

  return (
    <motion.button
      className={cn(buttonVariants({ variant, className }))}
      whileHover={whileHover}
      whileDrag={whileDrag}
      drag={isDisabled ? false : drag}
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      {...props}
    />
  );
};
