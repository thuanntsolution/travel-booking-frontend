import { paths } from "@/config/paths";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoot, AppRootErrorBoundary } from "./routes/app/root";

// eslint-disable-next-line react-refresh/only-export-components
export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { Landing } = await import("./routes/landing");
        return { Component: Landing };
      },
    },
    {
      path: paths.auth.register.path,
      lazy: async () => {
        const { Register } = await import("./routes/auth/register");
        return { Component: Register };
      },
    },
    {
      path: paths.auth.login.path,
      lazy: async () => {
        const { Login } = await import("./routes/auth/login");
        return { Component: Login };
      },
    },
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.profile.path,
          lazy: async () => {
            const { Profile } = await import("./routes/app/profile");
            return { Component: Profile };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFound } = await import("./routes/not-found");
        return { Component: NotFound };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
