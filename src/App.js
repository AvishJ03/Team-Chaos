import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "../src/Components/Dashboard/Dashboard"
import BaseWorker from "../src/Components/Workers/BaseWorker"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/worker" element={<BaseWorker />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
