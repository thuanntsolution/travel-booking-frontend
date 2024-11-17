import React from "react";

type TAuthLayoutProps = {
  children: React.ReactNode;
};
export const AuthLayout = ({ children }: TAuthLayoutProps) => {
  return (
    <div>
      AuthLayout
      {children}
    </div>
  );
};
