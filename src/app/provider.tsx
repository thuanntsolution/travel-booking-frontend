import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallBack } from "@/components/errors";

type TAppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: TAppProviderProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          Loading..
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallBack}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
