import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="py-5 fixed left-0 right-0 top-0 bg-white">
      <div className="container flex justify-between items-center">
        <Link to="/">ReachOut</Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/report-issue">Report an Issue</Link>
          </li>
          <li>
            <Link to="/admin-login">Admin</Link>
          </li>
          <Link to="/admin-dashboard">Dashboard</Link>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
