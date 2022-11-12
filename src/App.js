import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LogInPage/LogIn";
import AdPage from "./components/AdPage/AdPage";
import DashboarPage from "./pages/DashboardPage/DashboardPage";
import { useEffect, useState } from "react";

function App() {
  const[houses, setHouses] = useState([])

  useEffect(() => {
    fetch("https://6346a1989eb7f8c0f88109b3.mockapi.io/users")
    .then((res) => res.json())
    .then((data) => setHouses(data))
  },[]);

  return (
    <div className="App">
      <Header />
          <Routes>
              <Route path="/" element={<HomePage houses={houses}/>} />
              <Route path="/LogInPage" element={<LoginPage/>} />
              <Route path="/AdPage" element={<AdPage/>} />
              <Route path='/LogInPage/DashboardPage' element={<DashboarPage/>}/>
          </Routes>
    </div>
  
  );
}

export default App;
