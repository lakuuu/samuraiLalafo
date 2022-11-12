import Cards from "../../components/Cards/Cards";
import Title from "../../components/title/title";
import css from "./DashboardPage.module.css"

const DashboarPage = () => {
  return (
    <div className="container">
      <Title position="center">Мои обьявление</Title>
      <button className="btn">+Добавить</button>
      <div className={css.cardsWrapper}>
        <Cards  isAdmin/>
        <Cards  isAdmin/>
        <Cards  isAdmin/>
        <Cards  isAdmin/>
        <Cards  isAdmin/>
        <Cards  isAdmin/>
      </div>
    </div>
  );
};

export default DashboarPage;
