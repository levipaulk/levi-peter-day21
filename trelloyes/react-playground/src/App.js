import React from 'react';
import card from './Card';

function App() {
  const lCard = <card />;
  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
        
      </header>
      <card />
      <list /> 
    </main>
  );
}

export default App;
