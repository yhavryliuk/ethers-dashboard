import { PnLCardServer, PortfolioOverviewServer } from "@/features/dashboard/components";
import { InfoBlock } from "@/shared/ui";
import { DURATIONS } from "@/shared/constants";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Page from "./page";

vi.mock("@/features/dashboard/components", () => ({
  PnLCardServer: vi.fn(({ duration }) => (
    <div data-testid="pnl-card" data-duration={duration.label} />
  )),
  PortfolioOverviewServer: vi.fn(() => (
    <div data-testid="portfolio-overview" />
  )),
}));

vi.mock("@/shared/ui", () => ({
  InfoBlock: vi.fn(({ children, appearsDelay }) => (
    <div data-testid="info-block" data-delay={String(appearsDelay ?? 0)}>
      {children}
    </div>
  )),
}));

describe("dashboard page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders portfolio overview and PnL card inside info blocks", async () => {
    const ui = await Page();
    render(ui);

    expect(screen.getByTestId("portfolio-overview")).toBeTruthy();
    expect(screen.getByTestId("pnl-card")).toBeTruthy();
    expect(screen.getAllByTestId("info-block")).toHaveLength(2);
  });

  it("uses the default duration and applies the second block delay", async () => {
    const ui = await Page();
    render(ui);

    const pnlCardServerMock = vi.mocked(PnLCardServer);
    expect(pnlCardServerMock.mock.calls[0]?.[0]).toEqual({
      duration: DURATIONS[1],
    });

    const infoBlockMock = vi.mocked(InfoBlock);
    expect(infoBlockMock.mock.calls[0]?.[0]?.appearsDelay).toBeUndefined();
    expect(infoBlockMock.mock.calls[1]?.[0]?.appearsDelay).toBe(0.3);

    const portfolioOverviewMock = vi.mocked(PortfolioOverviewServer);
    expect(portfolioOverviewMock).toHaveBeenCalledTimes(1);
  });
});
