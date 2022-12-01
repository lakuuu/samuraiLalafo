import React from "react";
import css from "./preloader.module.css";

const Preloader = ({ full }) => {
  return (
    <div className={full ? css.wrapper : css.pad}>
      <div className={css.container}>
        <svg className={css.loader} viewBox="0 0 340 340">
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="160"
            stroke="black"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="135"
            stroke="purple"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="110"
            stroke="black"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="85"
            stroke="#purple"
          />
          <circle cx="170" cy="170" r="60" stroke="black"/>
        </svg>
        <img
          src="https://i.pinimg.com/564x/d1/ac/3a/d1ac3aa36120eaa3c22672aec4e91cd4.jpg"
          className={css.img}
          alt="NFTTRX"
        />
      </div>
    </div>
  );
};

export default Preloader;