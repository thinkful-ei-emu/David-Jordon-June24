import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';
function App() {
  const lists = STORE.lists.map((list)=>{

    return <List key={list.id} header={list.header} cards={list.cardIds}/>
  });
    return (
      <main className="App">
        <header className="App-header">

          <h2>Welcome to React</h2>
        </header>
        <div className="app-list">
        {lists}
        </div>
      </main>
    );
}

export default App;
