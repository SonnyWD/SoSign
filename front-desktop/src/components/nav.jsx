import { Link } from "react-router-dom";
import logo from "../assets/img/SVG/logo.svg"

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
  <div className="flex justify-between items-center py-6 px-7 text-sm text-gray-700 gap-6">
    <img src={logo} alt="" className="w-16"/>
    <Link to="/" className="px-4 hover:text-blue-600">Cours</Link>
    <Link to="/historique" className="px-4 hover:text-blue-600">Historique</Link>
    <Link to="/questionnaire" className="px-4 hover:text-blue-600">Questionnaire</Link>
  </div>
</nav>

  );
}

export default Nav;
