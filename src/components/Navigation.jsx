// components/Navigation.js
import { Link, useLocation } from "react-router-dom";
function Navigation() {
  const location = useLocation();
  return (
    <nav className="main-navigation">
      <div className="nav-brand">
        <Link to="/">
          <h2>🚀 Трекер технологий</h2>
        </Link>
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="/TechnologyList.jsx"
            className={
              location.pathname === "/TechnologyList.jsx" ? "active" : ""
            }
          >
            Все технологии
          </Link>
        </li>
        <li>
          <Link
            to="/AddTechnology.jsx"
            className={
              location.pathname === "/AddTechnology.jsx" ? "active" : ""
            }
          >
            Добавить технологию
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
