"use client";

import clsx from "clsx";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";
import type { Duration } from "@/shared/constants";

const LOCAL_STORAGE_KEY = "pnlDurationOrder";

export type PnLDurationPickerProps = {
  durations: Duration[];
  selectedDuration: Duration;
  onSelectDuration: (duration: Duration) => void;
};

export const PnLDurationPicker: React.FC<PnLDurationPickerProps> = ({
  durations,
  selectedDuration,
  onSelectDuration,
}) => {
  const [order, setOrder] = useState<Duration[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as string[];
      const newOrder = parsed
        .map((val) => durations.find((d) => d.value === Number(val)))
        .filter(Boolean) as Duration[];
      const missing = durations.filter(
        (d) => !newOrder.some((n) => n.value === d.value),
      );
      setOrder([...newOrder, ...missing]);
    } else {
      setOrder(durations);
    }
  }, [durations]);

  const handleReorder = (newOrder: Duration[]) => {
    setOrder(newOrder);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newOrder.map((d) => d.value)),
    );
  };

  return (
    <Reorder.Group
      axis="x"
      values={order}
      onReorder={handleReorder}
      className="flex items-center gap-1.25 text-xs font-euclid"
    >
      {order.map((duration) => {
        const isActive = duration.value === selectedDuration.value;

        return (
          <Reorder.Item
            key={duration.value}
            value={duration}
            whileDrag={{ scale: 1.1 }}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
          >
            <motion.button
              layout
              type="button"
              onClick={() => onSelectDuration(duration)}
              className={clsx(
                "relative py-[4.5px] rounded-[70px] outline-none transition-colors duration-300",
                isActive
                  ? "text-app-highlight px-3"
                  : "text-app-muted px-1.5 cursor-pointer",
              )}
            >
              <span className="relative z-10">{duration.label}</span>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-bg"
                    className="absolute inset-0 bg-[#FF51001A] rounded-[70px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                      mass: 1,
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};
