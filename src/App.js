import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LogInPage/LogIn";
import AdPage from "./components/AdPage/AdPage";
import DashboarPage from "./pages/DashboardPage/DashboardPage";
import About from "./pages/About/About";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { initialize } from "./redux/usersSlice";
import Preloader from "./components/Loader/Loader";


function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector( (state) => state.users.loading)

  useEffect(() => {
    dispatch( initialize() )
    }, [dispatch]);

    if (isLoading) return <Preloader full />

    // Api.get('users')
    //   .then((res) => setHouses(res.data))

    // axios.get(base_url + "users")
    // .then((res) => setHouses(res.data))
  // })

    // fetch(base_url + "users")
    // .then((res) => res.json())
    // .then((data) => setHouses(data))
    
  return (
    <div className="App">
      <Header />
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/LogInPage" element={ <PublicRoute> <LoginPage/> </PublicRoute>  } />
              <Route path="/AdPage" element={<PrivateRoute><AdPage/></PrivateRoute> } />
              <Route path='/DashboardPage' element={ <PrivateRoute> <DashboarPage/> </PrivateRoute> }/>
              <Route path="/About/:id" element={<About/>} />
          </Routes>
    </div>
  
  );
}

export default App;
