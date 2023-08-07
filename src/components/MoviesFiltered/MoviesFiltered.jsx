import "./MoviesFiltered.css";

function MoviesFiltered() {
  return (
    <div className="movies-filtred">
        <label className="movies-filtred__label">
      <input
        type="checkbox"
        name="switch"
        id="switch"
        className="movies-filtred__switch"
      />
      <p className="movies-filtred__container"></p>
      Короткометражки</label>
    </div>
  );
}

export default MoviesFiltered;