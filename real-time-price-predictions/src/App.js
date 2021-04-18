import './App.css';
import React from "react";
import Chart from "./components/chart";
import { NavLink, Switch, Route, useParams } from "react-router-dom";
import "./App.css";
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
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/404" component={PageNotFound}></Route>
  </Switch>
);

const Home = () => (
  <div className="home center">
    <Container>
      <Row>
        <Col>
          <HomePage></HomePage>
        </Col>
        <Col>
          <img src={https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9952dda1-e034-45e5-ae2b-f7b7ddb3e71b%2FCody_the_Crab.png?table=block&id=4d9b294f-6f5b-4895-aabf-0ca0dbef4d86&width=3000&userId=4cd70f1c-ea52-45c6-97bf-271c1228ac58&cache=v2} alt="main-img" class="mainpage-img center" />
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
