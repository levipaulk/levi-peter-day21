import React from 'react';
import List from './List';


function App(props) {

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        
      </header>
      <List store={props.store} />

     
    </main>
  );
}

export default App;
