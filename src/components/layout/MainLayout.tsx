import React from "react";

type TMainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: TMainLayoutProps) => {
  return (
    <div>
      MainLayout
      {children}
    </div>
  );
};
