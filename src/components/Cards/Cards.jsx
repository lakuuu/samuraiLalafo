import css from "./cards.module.css";

function Cards(  { img, title, price, isAdmin }  ) {
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img src={img} alt="#" />
      </div>
        <div className={css.content}>
          <h2>{title}</h2>
          <h3>{price}$</h3>
          <div>
          {
            isAdmin
            ?<button className="btn danger">Удалить</button>
            :<button className="btn">Подробнее</button>
          }
          </div>
        </div>
    </div>
  );
}

export default Cards;
