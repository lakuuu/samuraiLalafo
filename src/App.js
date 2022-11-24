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
import { usersSliceActions } from "./redux"


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
  },[]);
 
  return (
    <div className="App">
      <Header />
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/LogInPage" element={<LoginPage/>} />
              <Route path="/AdPage" element={<AdPage/>} />
              <Route path='/LogInPage/DashboardPage' element={<DashboarPage/>}/>
              <Route path="/About/:id" element={<About/>} />
          </Routes>
    </div>
  
  );
}

export default App;
