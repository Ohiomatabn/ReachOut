import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="py-5 fixed left-0 right-0 top-0 bg-white">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-700">
          ReachOut
        </Link>
        <ul>
          <li className="hover:text-blue-700 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-700 hover:font-bold">
            <Link to="/report-issue">Report an Issue</Link>
          </li>
          <li className="hover:text-blue-700 hover:font-bold">
            <Link to="/admin-login">Admin</Link>
          </li>
          <Link
            to="/admin-dashboard"
            className="hover:text-blue-700 hover:font-bold"
          >
            Dashboard
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
