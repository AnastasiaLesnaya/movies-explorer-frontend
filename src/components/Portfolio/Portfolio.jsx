import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a target="_blank" rel="noreferrer" href="https://github.com/AnastasiaLesnaya/how-to-learn" className="portfolio__link">
            <p className="link link_text">Статичный сайт</p>
            <div className="link link_icon"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a target="_blank" rel="noreferrer" href="https://anastasialesnaya.github.io/russian-travel/index.html" className="portfolio__link">
            <p className="link link_text">Адаптивный сайт</p>
            <div className="link link_icon"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a target="_blank" rel="noreferrer" href="https://anastasialesnaya.github.io/mesto/" className="portfolio__link">
            <p className="link link_text">
              Одностраничное приложение
            </p>{" "}
            <div className="link link_icon"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;