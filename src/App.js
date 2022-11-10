import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LogInPage/LogIn";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <LoginPage />
      <div>  
          <Routes>
              <Route path="/HomePage" element={<HomePage/>} />
              <Route path="/LogInPage" element={<LoginPage/>} />
          </Routes>
      </div>
  
    </div>
  
  );
}

export default App;
