import React from 'react';
import './App.css';
import { BrowserRouter , Switch, Route, Link } from "react-router-dom"
import Home from "./Screens/Home"
import Students from "./Screens/Students"

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={Students} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
