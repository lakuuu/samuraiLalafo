import { Link } from "react-router-dom";
import css from "./cards.module.css";

function Cards(  { id, img, title, price, isAdmin }  ) {
  const onDelete = () => {
    const res = window.confirm("удалить?")
    if(res) {
      fetch(`https://6346a1989eb7f8c0f88109b3.mockapi.io/users/${id}`, {
        method: "delete"
      })
      .then(() => {
        alert("вы успешно удалили" + id);
        window.location.reload();
      })
    }
  }
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
            ?<button onClick={onDelete} className="btn danger">Удалить</button>
            :<Link to={`/About/${id}`}><button className="btn">Подробнее</button></Link>
          }
          </div>
        </div>
    </div>
  );
}

export default Cards;
