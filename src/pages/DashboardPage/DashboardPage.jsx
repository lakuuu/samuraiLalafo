import Title from "../../components/title/title";
import css from "./DashboardPage.module.css"
import { Link, } from "react-router-dom"
import Card from "../../components/Cards/Cards";



const DashboarPage = (  { houses }  ) => {
  console.log(houses)
  return (
    <div className="container">
      <Title position="center">Мои обьявление</Title>
      <Link className={css.ad} to="/AdPage">
      <button className="btn">+Добавить</button>
      </Link>
      <div className={css.cardsWrapper}>
            {
                houses.map((item) => <Card key={item.id} {...item} isAdmin /> )
            }
        </div>
    </div>
  );
};

export default DashboarPage;
