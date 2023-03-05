import React from 'react';
import style from "./App.module.scss"
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Fibonacci from "./components/Fibonacci/Fibonacci";
import ClickApp from "./components/ClickApp/ClickApp";
import Home from "./components/Home/Home";


function App() {

    return (
        <Router>
            <div className={style.header}>
              <Link className={style.linck} to="/">Home</Link>
              <Link className={style.linck} to="/Fibonacci">Fibonacci</Link>
              <Link className={style.linck} to="/ClickApp">ClickApp</Link>
            </div>
            <div className={style.frame}>
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/Fibonacci" element={<Fibonacci/>}/>
                  <Route path="/ClickApp" element={<ClickApp/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
