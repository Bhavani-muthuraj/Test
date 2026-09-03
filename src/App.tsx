import { Routes, Route } from "react-router-dom";
import { Intro } from "./pages/Intro";
import { ProductBasicTraining } from "./pages/ProductBasicTraining";
import { TrainingVideos } from "./pages/TrainingVideos";
import { KnowledgeArticle } from "./pages/KnowledgeArticle";
import { DigitalArchitecture } from "./pages/DigitalArchitecture";
import { ConfluencePage } from "./pages/ConfluencePage";
import { Community } from "./pages/Community";
import { Chatbot } from "./pages/Chatbot";
import { OldVideos } from "./pages/OldVideos";

// This is the full list of pages/URLs in the site. To add a new page:
//   1. Create a new file in src/pages/
//   2. Import it above
//   3. Add a <Route> line below
//   4. Add it to the `tabs` array in src/components/PageShell.tsx
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/product-training" element={<ProductBasicTraining />} />
      <Route path="/training-videos" element={<TrainingVideos />} />
      <Route path="/knowledge" element={<KnowledgeArticle />} />
      <Route path="/architecture" element={<DigitalArchitecture />} />
      <Route path="/confluence" element={<ConfluencePage />} />
      <Route path="/community" element={<Community />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/old-videos" element={<OldVideos />} />
    </Routes>
  );
}
