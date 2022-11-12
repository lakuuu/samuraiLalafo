import Title from "../../components/title/title";
import css from "./LogIn.module.css";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault()
        if(login === "admin" && password === "admin"){
            navigate('./DashboardPage')
        } else {
            setError(true)
        }
    }

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
          <button>
            <Link>Войти</Link>
          </button>
          {isError && <div className="error">Login or Password is incorrect</div>}
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default LogIn;
