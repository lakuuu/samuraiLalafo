import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import css from "./AdPage.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../../api/Api";
import { useDispatch } from "react-redux";
import { usersSliceActions } from "../../redux/usersSlice";

export default function AdPage() {
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [isSending, setSending] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const navigateNew = () =>{
    navigate("/DashboardPage")
}

  const submit = (e) => {
    e.preventDefault()
    setSending(true)
    const data = {
        title: title,
        price: price,
        description: desc,
        img: img
    }
    API.createAd(data)
    .then((res)=>{
        dispatch(usersSliceActions.addHouse(res.data))
        notify()
      setTimeout(navigateNew, 2000)  

    })
}

const notify = () => toast("Lorem ipsum dolor");

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
          <button disabled={isSending} className={css.btnsec}>Save</button>
        </div>
        <ToastContainer/>
        </form>
      </div>
      <Footer />
    </div>
  );
}
