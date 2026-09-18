import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="py-5">
      <div className="container flex justify-between items-center">
        <div>ReachOut</div>
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
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
