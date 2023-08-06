import "./MoviesLoad.css";

function MoviesLoad() {
  return (
    <div className="movies-load">
        <button type="button" name="load-more" id="load" className="movies-load__btn" aria-label="Показать" onClick={() => alert("Пока что всё:(")}>Ещё</button>
    </div>
  );
}

export default MoviesLoad;