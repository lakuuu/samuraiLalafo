import css from "./HomePage.module.css";
import Title from "../../components/title/title";
import Card from "../../components/Cards/Cards";
import image from "./image.png";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

const HomePage = () => {
  const houses = useSelector((state) => state.users.data);
  return (
    <div>
      <div className="container">
        <Title textShadow="greenyellow 1px 0 10px" position="center">
          Последнее обьявление
        </Title>
        <div className={css.cardsWrapper}>
            {
                houses.map((item) => <Card key={item.id} {...item} /> )
            }
        </div>
        <div className="container">
          <Title position="center" marginTop="3%" marginBottom="5%">
            О нас
          </Title>
        </div>
        <div className={css.aboutUs}>
          <img className={css.img} src={image} alt="#" />
          <div className={css.who}>
            <h1>Кто мы?</h1>
            <h4>
              Президентская кампания Бориса Ельцина на выборах 1996 года{" "}
              началась де-юре 15 февраля 1996 года, когда действовавший
              президент Российской Федерации объявил о своём решении
              баллотироваться на второй президентский срок. Несмотря на свой
              возраст (ему было 65 лет на момент избрания), серьёзные проблемы
              со здоровьем и низкий предвыборный рейтинг, Ельцин решил принять
              участие в Президентская кампания Бориса Ельцина на выборах 1996
              года началась де-юре 15 февраля 1996 года, когда действовавший
              президент Российской Федерации объявил о своём решении
              баллотироваться{" "}
            </h4>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
