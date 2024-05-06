import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ReportIncident from "./pages/ReportIncident.jsx";
import ViewIncidents from "./pages/ViewIncidents.jsx";
import IncidentDetails from "./pages/IncidentDetails.jsx";
import Toolbar from "./components/Toolbar.jsx";

function App() {
  return (
    <Router>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/report" element={<ReportIncident />} />

        <Route path="/details/:id" element={<IncidentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
