import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes >
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;