import { Link, } from "react-router-dom"
import css from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <h1>SOLID.FA</h1>
            <div className={css.aboutUs}>
                  <h3>О нас</h3>
                  <h3>Контакты</h3>
                <ul>
                    <li>
                      <Link path="LogInPage">Войти</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header