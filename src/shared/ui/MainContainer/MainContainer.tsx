import type React from "react";
import type { PropsWithChildren } from "react";

export const MainContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-background">
      {children}
    </main>
  );
};
