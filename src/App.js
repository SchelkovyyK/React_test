// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Header from "./components/Header/header.jsx";
import Nav from "./components/nav/nav.jsx";
import Main from "./components/main/main.jsx";
const App = () => {
  return (
    <div className="grid">
      <Header />
      <Nav />
      <Main />
    </div>
  );
};

export default App;
// export default Header;
