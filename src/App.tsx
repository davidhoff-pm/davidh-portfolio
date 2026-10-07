import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Une seule page : les routes /projets/:slug et /parcours/:slug ouvrent le panneau de détail.
const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projets/:slug" element={<Index panel="projet" />} />
      <Route path="/parcours/:slug" element={<Index panel="parcours" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
