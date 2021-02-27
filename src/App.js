import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import './App.module.css'
import {Context} from "./index";
import {useContext} from "react";
import {observer} from "mobx-react-lite";

const App = observer(() => {
const {user} = useContext(Context)

  return (
    <BrowserRouter>
        {user.isAuth &&
        <Navbar/>
        }
        <AppRouter />
    </BrowserRouter>
  );
})

export default App;
