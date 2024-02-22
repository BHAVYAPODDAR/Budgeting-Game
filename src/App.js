import "./App.css";
import Activities from "./pages/Activities";
import Start from "./pages/Start";
import Story from "./pages/Story";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/story" element={<Story />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
