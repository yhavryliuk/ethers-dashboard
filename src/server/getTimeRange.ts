import "server-only";

import type { Duration } from "@/shared/constants";

export function getTimeRange(duration: Duration) {
  const now = Math.floor(Date.now() / 1000);

  return {
    from: Math.max(now - duration.value, 0),
    to: now,
  };
}
