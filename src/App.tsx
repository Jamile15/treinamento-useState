import React from 'react';
import { useState } from 'react';

function App() {
  const [name, setName]= useState("");
  const [number, setNumber] = useState(0);

  console.log(name);
  const altnumber = () => {
    // previous value usado pra alterar o valor anterior
    setNumber((prevNumber) => prevNumber +2)
    
  }

  return (
    <div className="App">

      <h2>Meu nome é {name}</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <div>
        
        <p>número:{number}</p>
        <button onClick={altnumber}>Mudar Número</button>
      </div>
     
    </div>
  );
}

export default App;
