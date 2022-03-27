import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import BaseWorker from "../src/Components/Workers/BaseWorker";
import BaseProject from "../src/Components/Project/BaseProject"
import Cam from "./Components/Safety/Cam";
import BaseAttendance from "./Components/Attendance/BaseAttendance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/worker" element={<BaseWorker />} />
        <Route path="/safety" element={<Cam />} />
        <Route path="/project" element={<BaseProject />} />
        <Route path="/attendance" element={<BaseAttendance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
