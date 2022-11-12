import React from 'react'
import css from "./AdPage.module.css"

export default function AdPage() {
  return (
    <div className='container'>
        <div className={css.add}>
            <h1>
                Создать объявления
            </h1>
            <div>
                 <h6>название</h6>
                 <input type="text" />
            </div>
            <div>
                <h6>description</h6>
                <h6>The description will be included on the item's detail page underneath its image.</h6>
                <input type="text" />
            </div>
            <div>
                <h6>Цена </h6>
                <h6>This link will be hidden from public.</h6>
                <input type="text" />
            </div>
        </div>
    </div>
  )
}

