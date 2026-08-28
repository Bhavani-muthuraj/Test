import { Routes, Route } from "react-router-dom";
import { Intro } from "./pages/Intro";
import { LearningVideos } from "./pages/LearningVideos";
import { OldVideos } from "./pages/OldVideos";
import { Community } from "./pages/Community";
import { Chatbot } from "./pages/Chatbot";

// This is the full list of pages/URLs in the site. To add a new page:
//   1. Create a new file in src/pages/
//   2. Import it above
//   3. Add a <Route> line below
//   4. Add it to the `tabs` array in src/components/PageShell.tsx
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/videos" element={<LearningVideos />} />
      <Route path="/old-videos" element={<OldVideos />} />
      <Route path="/community" element={<Community />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}
