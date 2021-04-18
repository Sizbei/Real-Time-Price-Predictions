import './App.css';
import React from "react";
import Chart from "./component/chart";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
      <Route exact path="/" component={Home}/>
      <Route exact path="/404" component={PageNotFound}/>
      <Route exact path='/chart' component={Chart}/>
   </Switch>
  </BrowserRouter>
);

function Home() {

    const history = useHistory();
    return (
        <div className="home center">
            <Container>
                <Row>
                    <Col>
                        <HomePage/>
                    </Col>
                    <Col>
                        <img
                            src={'assets/Crypto_the_Clam.png'}
                            alt="main-img"
                            onClick={
                                () => {
                                    history.push('/chart');
                                }
                            }
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const chart = () => (
    <Chart/>
)


const PageNotFound = () => (
  <div className="error">
    <ErrorPage/>
    <p/>
  </div>
);


export default App;
