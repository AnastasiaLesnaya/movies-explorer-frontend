import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Technologies from "../Technologies/Technologies";
import Footer from "../Footer/Footer";
import "./Main.css";

function Main() {
  return (
    <>
      <Header className={"header header_place_main"}>
        <nav className="header__navigation header__navigation_place_main">
          <Link
            to="/signup"
            className="header__btn header__btn_transparent"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="header__btn header__btn_green"
          >
            Войти
          </Link>
        </nav>
      </Header>
      <main className="main">
        <Promo></Promo>
        <NavTab></NavTab>
        <AboutProject></AboutProject>
        <Technologies></Technologies>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Main;