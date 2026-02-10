"use client";

import { motion } from "framer-motion";
import type React from "react";
import type { PropsWithChildren } from "react";

export type InfoBlockProps = PropsWithChildren<{
  appearsDelay?: number;
}>;

export const InfoBlock: React.FC<InfoBlockProps> = ({
  children,
  appearsDelay = 0,
}) => {
  return (
    <motion.div
      className="p-5 bg-white w-159.75 max-w-159.75 rounded-lg outline-info-block outline"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: appearsDelay }}
    >
      {children}
    </motion.div>
  );
};
