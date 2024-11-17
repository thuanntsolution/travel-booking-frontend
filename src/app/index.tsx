import { AppProvider } from "./provider";
import { AppRouter } from "./router";

import "@/services/i18n";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
