/* eslint-disable import/no-default-export */
// App.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigation/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient= new QueryClient();

const App = () => {
  return (
   <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
   </QueryClientProvider> 
    
  );
};

export default App;
