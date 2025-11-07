import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlateformeTelesurveillance from "./pages/projects/PlateformeTelesurveillance";
import DispositifMedicalParkinson from "./pages/projects/DispositifMedicalParkinson";
import ApplicationSuiviRCH from "./pages/projects/ApplicationSuiviRCH";
import PlateformePanelAnticorps from "./pages/projects/PlateformePanelAnticorps";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projets/plateforme-telesurveillance" element={<PlateformeTelesurveillance />} />
          <Route path="/projets/dispositif-medical-parkinson" element={<DispositifMedicalParkinson />} />
          <Route path="/projets/application-suivi-rch" element={<ApplicationSuiviRCH />} />
          <Route path="/projets/plateforme-panel-anticorps" element={<PlateformePanelAnticorps />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
