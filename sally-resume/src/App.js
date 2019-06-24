import React from "react";
import sally from "../src/pictures/Sally.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <section>
          <h1>Education</h1>
        </section>

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
