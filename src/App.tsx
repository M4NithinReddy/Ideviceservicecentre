import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import IPhoneRepair from "./pages/IPhoneRepair";
import MacBookRepair from "./pages/MacBookRepair";
import IPadRepair from "./pages/IPadRepair";
import AppleWatchRepair from "./pages/AppleWatchRepair";
import IMacRepair from "./pages/IMacRepair";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/iphone-repair-hyderabad" element={<IPhoneRepair />} />
              <Route path="/macbook-repair-hyderabad" element={<MacBookRepair />} />
              <Route path="/ipad-repair-hyderabad" element={<IPadRepair />} />
              <Route path="/apple-watch-repair-hyderabad" element={<AppleWatchRepair />} />
              <Route path="/imac-repair-hyderabad" element={<IMacRepair />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
