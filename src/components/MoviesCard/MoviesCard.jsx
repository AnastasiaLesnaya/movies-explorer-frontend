import "./MoviesCard.css";

function MoviesCard(props) {
  const {icon, ariaLabel, onClick, buttonName} = props;

  return (
    <li className="card">
      <img
        src={require('../../images/snapshot.jpg')}
        alt="Стоп-кадр из фильма"
        className="card__snapshot"
      ></img>
      <div className="card__container">
        <p className="card__name">Фильм</p>
        <button type="button" name={buttonName} className={icon} aria-label={ariaLabel} onClick={onClick}></button>
      </div>
      <p className="card__duration">2ч 25м</p>
    </li>
  );
}

export default MoviesCard;