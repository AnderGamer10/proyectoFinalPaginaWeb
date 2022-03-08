//React
import React from "react";

import Card from "../components/Card";

//Components
import Navbar from "../components/Navbar";

//Views

//Data
import data from "../data/data.json";

//Styles

const Catalogue = () => {
  /*Logica*/
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {data.map((data) => (
            <div className="col-md-4" key={data.name}>
              <div key={data.name}>
                <Card data={data} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
