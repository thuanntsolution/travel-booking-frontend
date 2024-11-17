import { MainLayout } from "@/components/layout";
import { Outlet } from "react-router-dom";

export const AppRoot = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const AppRootErrorBoundary = () => {
  return <div>Something went wrong</div>;
};
