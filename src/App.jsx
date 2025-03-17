import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Who from "./components/who";
import Where from "./components/where";
import Contact from "./components/contact";

import Navigation from "./components/navigation";
function App() {
  /* este es el comentario */
  return (
    <>
      <p>© 2025 Nuclio Digital School</p>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/who" element={<Who />} />
        </Routes>
        <Routes>
          <Route path="/where" element={<Where />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
