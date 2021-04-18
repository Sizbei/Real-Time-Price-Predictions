import Card from "react-bootstrap/Card";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory();

    return (
        <div>
          <Card className="box" style={{ "border-radius": "8px" }}>
            <Card.Body>
              <h2 style={{ "font-weight": "900" }}>Predict Cytoprices for the Future</h2>
              <Card.Text>
                <p>
                  Take Advantage of the Fleeting Machine Learning Models and Regressions to track future prices.
                </p>
                
               
              </Card.Text>
            </Card.Body>
          </Card>{" "}
        </div>
      );
    };
    
    export default HomePage;
    