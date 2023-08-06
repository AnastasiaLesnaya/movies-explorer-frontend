import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import "./Profile.css";

function Profile({
  isClickMenu,
  handleMenu,
  name = "Anastasia",
  email = "lesnyasha@yandex.ru",
}) {
  const firstName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  return (
    <article className="profile">
      <Header className={"header"} click={isClickMenu}>
        <Menu
          click={isClickMenu}
          handleMenu={handleMenu}
        ></Menu>
        {isClickMenu && <div className="background"></div>}
        <Navigation className={`navi navi_desktop ${isClickMenu && "navi_active"}`} handleMenu={handleMenu}/>
      </Header>
      <div className="profile__container">
        <div className="profile__info">
          <p className="profile__hello-name">{`Привет, ${firstName}!`}</p>
          <ul className="profile__user">
            <li className="profile__list-item_name profile__list-item">
              <p className="profile__text">Имя</p>
              <p className="profile__text">{firstName}</p>
            </li>
            <li className="profile__list-item_email profile__list-item">
              <p className="profile__text">E-mail</p>
              <p className="profile__text">{email}</p>
            </li>
          </ul>
        </div>
        <div className="profile__settings">
          <button
            className="profile__btn profile__btn_edit"
            type="button"
            onClick={() => alert("not a button yet")}
          >
            Редактировать
          </button>
          <Link to="/signin" className="profile__logout">
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Profile;