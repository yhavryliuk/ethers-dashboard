import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Duration } from "@/shared/constants";
import { PnLDurationPicker } from "./PnLDurationPicker";

const durations: Duration[] = [
  { label: "1D", value: 1, extendedLabel: "Day" },
  { label: "1W", value: 2, extendedLabel: "Week" },
];

describe("PnLDurationPicker", () => {
  it("calls onSelectDuration", () => {
    const onSelect = vi.fn();

    render(
      <PnLDurationPicker
        durations={durations}
        selectedDuration={durations[0]}
        onSelectDuration={onSelect}
      />,
    );

    fireEvent.click(screen.getByText("1W"));

    expect(onSelect).toHaveBeenCalledWith(durations[1]);
  });
});
