export const formatJoinedDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const joinedAt = date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  return joinedAt;
};
