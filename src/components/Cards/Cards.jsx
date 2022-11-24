import { Link } from "react-router-dom";
import API from "../../api/Api";
import css from "./cards.module.css";

function Cards(  { id, img, title, price, isAdmin }  ) {
  const onDelete = () => {
    const res = window.confirm("удалить?")
    if(res) {
      API.deleteAdById(id)
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
