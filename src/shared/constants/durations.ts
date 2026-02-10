export type Duration = {
  label: string;
  extendedLabel: string;
  value: number;
};

export const DURATIONS: Duration[] = [
  {
    label: "1H",
    extendedLabel: "Past Hour",
    value: 60 * 60,
  },
  {
    label: "6H",
    extendedLabel: "Past 6 Hours",
    value: 6 * 60 * 60,
  },
  {
    label: "1D",
    extendedLabel: "Past Day",
    value: 24 * 60 * 60,
  },
  {
    label: "1W",
    extendedLabel: "Past Week",
    value: 7 * 24 * 60 * 60,
  },
  {
    label: "1M",
    extendedLabel: "Past Month",
    value: 30 * 24 * 60 * 60,
  },
  {
    label: "All",
    extendedLabel: "All Time",
    value: Number.MAX_VALUE,
  },
];
