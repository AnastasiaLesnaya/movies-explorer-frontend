import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesLoad from "../MoviesLoad/MoviesLoad";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import "./MoviesSaved.css";

function MoviesSaved({isClickMenu, handleMenu}) {

  const items = [...Array(8)].map((item, index) => (<MoviesCard
    key={index}
    icon={"card__btn card__btn_remove"}
    ariaLabel="Удалить"
    onClick={() => console.log("remove")}
    buttonName="remove"
  ></MoviesCard>))

  return (
    <section className="saved-movies">
      <Header className={"header"} click={isClickMenu}>
        <Menu click={isClickMenu} handleMenu={handleMenu}></Menu>
        {isClickMenu && <div className="background"></div>}
        <Navigation className={`navi navi_desktop ${isClickMenu && "navi_active"}`} handleMenu={handleMenu}/>
      </Header>
      <Search></Search>
      <MoviesCardList>
        {items}
      </MoviesCardList>
      <MoviesLoad></MoviesLoad>
      <Footer></Footer>
    </section>
  );
}

export default MoviesSaved;