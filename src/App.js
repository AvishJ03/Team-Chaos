import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "../src/Components/Dashboard/Dashboard"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
