import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ className, handleMenu }) {
  return (
    <nav className={className}>
      <div className="navi__container">
        <NavLink
          to="/"
          className="navi__link navi__link_main"
          onClick={handleMenu}
        >
          Главная
        </NavLink>
        <NavLink to="/movies" className="navi__link" onClick={handleMenu}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="navi__link" onClick={handleMenu}>
          Сохранённые фильмы
        </NavLink>
      </div>
      <div className="navi__profile navi__profile_container">
        <NavLink
          to="/profile"
          className="navi__link navi__link_profile navi__navlink navi__navlink_active navi__navlink_border"
          onClick={handleMenu}
        >
          <p className="navi__profile-link navi__profile-link_type_text">
            Аккаунт
          </p>
          <div className="navi__profile-link navi__profile-link_type_icon"></div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;