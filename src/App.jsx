// import { useState } from 'react'
import Plan from "./plan";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="plans">
        <Plan
          name="Free"
          price="0"
          user="Single"
          store={5}
          userStyle={["F"]}
          domain="Free"
          features={["F", "F", "F", "F"]}
        />
        <div className="plan">
          <Plan
            name="Plus"
            price="9"
            user="5"
            store={50}
            userStyle={["T"]}
            domain="Free"
            features={["T", "T", "T", "F"]}
          />
        </div>
        <div className="plan">
          <Plan
            name="Pro"
            price="49"
            user="Unlimited"
            store={150}
            userStyle={["T"]}
            domain="Unlimited"
            features={["T", "T", "T", "T"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
https://css-tricks.com/almanac/properties/t/translate/

https://www.w3schools.com/css/css3_2dtransforms.asp

*/
