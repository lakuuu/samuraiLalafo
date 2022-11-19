import { Link, } from "react-router-dom"
import css from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <h1>
                <Link className={css.logo} to="/">
                     SOLID.FA
                </Link>
            </h1>
            <div className={css.aboutUs}>
                  <h3>О нас</h3>
                  <h3>Контакты</h3>
                  <Link className={css.list} to="/LogInPage">Войти</Link>
            </div>
        </header>
    )
}

export default Header;