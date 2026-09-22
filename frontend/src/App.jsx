import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AdminLoginForm from "./components/admin/Login";
import ReportIssue from "./components/ReportIssue";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route path="/admin-login" element={<AdminLoginForm />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
