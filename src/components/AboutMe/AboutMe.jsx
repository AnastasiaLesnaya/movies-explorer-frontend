import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__container">
        {/* фото и описание студента */}
        <img src={require('../../images/student.JPG')} alt="Фото студента" className="about-me__item about-me__photo"></img>
        <div className="about-me__item">
          <div className="about-me__description">
            <p className="about-me__name">Анастасия Лесная</p>
            <p className="about-me__subtitle">Начинающий фронтенд-разработчик, 25 лет</p>
            <p className="about-me__text">В школьные годы нравилось создавать простые сайты с помощью html и css. Уже во взрослой жизни решила прокачать свои навыки в этой сфере. Во время обучения в Яндекс Практикуме нашла работу в IT-компании (пока что на должности администратора проекта).</p>
          </div>
          <a target="_blank" rel="noreferrer" href="https://github.com/AnastasiaLesnaya" className="about-me__link">Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;