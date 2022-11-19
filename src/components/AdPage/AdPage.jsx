import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import css from "./AdPage.module.css";

export default function AdPage() {
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    const data = {
        title: title,
        price: price,
        description: desc,
        img: img
    }
    fetch("https://6346a1989eb7f8c0f88109b3.mockapi.io/users", {
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "aplplication/json"
        }
    })
    .then(() => {
        navigate("/LogInPage/DashboardPage")
    })
}

  return (
    <div>
      <div className="container d-grid">
        <form onSubmit={submit}>
        <div className={css.add}>
          <h1>Создать объявления</h1>
          <div className={css.gap}>
            <h5>Название</h5>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={css.name}
              type="text"
            />
          </div>
          <div className={css.gap}>
            <h5>Description</h5>
            <h6>
              The description will be included on the item's detail page
              underneath its image.
            </h6>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="description  "
              rows="10"
              cols="68"
            ></textarea>
          </div>
          <div>
            <h5>Цена </h5>
            <h6>This link will be hidden from public.</h6>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={css.cost}
              type="number"
            />
          </div>
          <div>
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="image"
              type="text"
              accept=".png"
            />
          </div>
          <Link to="/LoginPage/DashboardPage">
            <button className={css.btnone}>Close</button>
          </Link>
          <button className={css.btnsec}>Save</button>
        </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
