import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AdminLoginForm from "./components/admin/Login";
import ReportIssue from "./components/ReportIssue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route element={<AdminLoginForm />} path="/admin-login" />
    </Routes>
  );
}

export default App;
