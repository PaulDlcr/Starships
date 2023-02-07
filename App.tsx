/* eslint-disable import/no-default-export */
// App.tsx

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    //<LoginScreen />
    //<TermsScreen />
    <QueryClientProvider client={queryClient}>
      <StarshipFeedScreen />
    </QueryClientProvider>
  );
};

export default App;
