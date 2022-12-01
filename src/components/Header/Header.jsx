import { Link, } from "react-router-dom"
import { authSliceActions } from "../../redux/authSlice"
import { useDispatch, useSelector } from 'react-redux'
import css from "./Header.module.css"


const Header = () => {
    const auth = useSelector( (state) => state.auth.isAuth )
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( authSliceActions.logout() )
      }
      
    return(
        <header>
            <h1>
                <Link className={css.logo} to="/">
                     SOLID.FA
                </Link>
            </h1>
            <div className={css.aboutUs}>
                  <h3>О нас</h3>
                  <h3>Контакты</h3>
             
                  {
            auth ? 
            <>
                  <Link className={css.dash} to="/DashboardPage">Dashboard</Link>
                  <div className={css.dash} onClick={onLogout}>Logout</div>
            </> 
              : <Link className={css.list} to="/LogInPage">Войти</Link>
          }
            </div>
        </header>
    )
 }
export default Header;