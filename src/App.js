import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import Projects from "./Components/Projects/Projects";
import Webcam from "./Components/Safety/Webcam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/safety" element={<Webcam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
