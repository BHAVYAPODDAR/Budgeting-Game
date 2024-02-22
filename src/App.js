import "./App.css";
import Activities from "./pages/Activities";
import Start from "./pages/Start";
import Story from "./pages/Story";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/story" element={<Story />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
