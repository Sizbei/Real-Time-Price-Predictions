import './App.css';
import React from "react";
import Chart from "./component/chart";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import HomePage from "./component/homepage.js";
import ErrorPage from "./component/errorpage.js";



const App = () => (
  <div className="app">
    
    <Main />
  </div>
);

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/404" component={PageNotFound}></Route>
   </Switch>
  </BrowserRouter>
);

const Home = () => (
  <div className="home center">
    <Container>
      <Row>
        <Col>
          <HomePage></HomePage>
        </Col>
        <Col>
          <img src={"./assets/Cryto_the_Clam.png"} alt="main-img" class="mainpage-img center" />
        </Col>
      </Row>
    </Container>
  </div>
);



const PageNotFound = () => (
  <div className="error">
    <ErrorPage></ErrorPage>
    <p></p>
  </div>
);


export default App;
