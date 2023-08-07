import { useState } from "react";
import Search from "../Search/Search";
import Preloader from "../Preloader/Preloader";
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesLoad from "../MoviesLoad/MoviesLoad";
import Footer from "../Footer/Footer";

import "./Movies.css";
import Header from "../Header/Header";

function Movies({ isClickMenu, handleMenu }) {
  const [like, setLike] = useState("♥︎");

  const handleLike = () => {
    alert(like);
    setLike(like === "♥︎" ? "♡" : "♥︎");
  };

  const items = [...Array(12)].map((item, index) => (
    <MoviesCard
      key={index}
      icon={`card__btn card__btn_like ${
        index % 3 === 0 && "card__btn_active"
      }`}
      ariaLabel="Нравится"
      onClick={handleLike}
      buttonName="like"
    ></MoviesCard>
  ));
  return (
    <div className="movies">
      <Header className={"header"}>
        <Menu
          click={isClickMenu}
          handleMenu={handleMenu}
        ></Menu>
        {isClickMenu && <div className="background"></div>}
        <Navigation
          className={`navi navi_desktop ${isClickMenu && "navi_active"}`}
          handleMenu={handleMenu}
        />
      </Header>
      <Search></Search>
      <Preloader></Preloader>
      <MoviesCardList>
        {items}
        <li>
          <p className="card-list__container card-list__container_empty card-list__container_empty_hidden">
            Нет результатов поиска
          </p>
        </li>
      </MoviesCardList>
      <MoviesLoad></MoviesLoad>
      <Footer></Footer>
    </div>
  );
}

export default Movies;