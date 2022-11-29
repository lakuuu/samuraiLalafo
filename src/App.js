import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LogInPage/LogIn";
import AdPage from "./components/AdPage/AdPage";
import DashboarPage from "./pages/DashboardPage/DashboardPage";
import About from "./pages/About/About";
import { useEffect } from "react";
import API, {} from "./api/Api";
import { useDispatch } from "react-redux";
import { usersSliceActions } from "./redux/usersSlice"
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    API.getAllAds().then((res) => {
      dispatch( usersSliceActions.addHouses(res.data) )
    });


    // Api.get('users')
    //   .then((res) => setHouses(res.data))

    // axios.get(base_url + "users")
    // .then((res) => setHouses(res.data))
  // })

    // fetch(base_url + "users")
    // .then((res) => res.json())
    // .then((data) => setHouses(data))
  },[dispatch]);
 
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
