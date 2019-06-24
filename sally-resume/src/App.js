import React from "react";
import sally from "../src/pictures/Sally.jpg";
import Education from '../src/education.js';
import Empolyment from '../src/employment.js';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <main>
          <Empolyment/>
          <Education/>

        <address>
          Sally
          <br />
          <a href="mailto:">SallyStudent@gmail.com</a>
          <br />
          123 Seseame St.
          <br />
          (410)-000-0000
          <br />
          <img src={sally} alt="sallypic" />
        </address>
      </main>
    </div>
  );
}

export default App;
