import Title from "../../components/title/title";
import css from "./LogIn.module.css";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../redux/authSlice";


const LogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  const dispatch = useDispatch(); 


    const submit = (e) =>{
        e.preventDefault()
        if(login === "admin" && password === "admin"){
            dispatch( authSliceActions.login() )
        } else {
            setError(true)
        }
    }

    const notify=() => toast ("wow so easy")

  return (
    <div>

      <div className="container">
        <Title position="center">Войти</Title>
        <form onSubmit={submit} onChange={() => setError(false)} className={css.inps}>
            <label>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Log-In"
          />
          </label>
          <label>
            <input value={password}
            onChange={(e) => setPassword(e.target.value)} 
            type="password"
             placeholder="password" />
          </label>
            <button onClick={notify} >Войти</button>
            <ToastContainer/>
          {isError && <div className="error">Login or Password is incorrect</div>}
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default LogIn;
