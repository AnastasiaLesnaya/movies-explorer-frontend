import "./Technologies.css";

function Technologies() {
  return (
    <section className="technologies" id="technologies">
      <h3 className="technologies__title">Технологии</h3>
      <p className="technologies__subtitle">7 технологий</p>
      <p className="technologies__description">
        На курсе веб-разработки мы освоили технологии, которые применили в&nbsp;дипломном проекте.
      </p>
      <ul className="technologies__list">
        <li className="technologies__item">
          <span className="technologies__content">HTML</span>
        </li>
        <li className="technologies__item">
          <span className="technologies__content">CSS</span>
        </li>
        <li className="technologies__item">
          <span className="technologies__content">JS</span>
        </li>
        <li className="technologies__item">
          <span className="technologies__content">React</span>
        </li>
        <li className="technologies__item">
          <span className="technologies__content">Git</span>
        </li>
        <li className="technologies__item">
          <span className="technologies__content">Exress.js</span>
        </li>
        <li className="technologies__item">
          <span className="technologies__content">MongoDB</span>
        </li>
      </ul>
    </section>
  );
}

export default Technologies;