import MoviesFiltered from '../MoviesFiltered/MoviesFiltered';
import './Search.css';

function Search() {
  return (
    <form name="search" id="search" className="search-form" onSubmit={() => alert('not submit')}>
      <div className="search-form__container">
        <input type="search" className="search-form__input" id="search" name="search" placeholder="Фильм" required></input>
        <button type="submit" className="search-form__btn search-form__icon" aria-label="Найти">
        </button>
      </div>
      <MoviesFiltered/>
    </form>
  );
}

export default Search;