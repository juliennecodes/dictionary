import {useState} from 'react';
import {WordAndDefinition} from './WordAndDefinition';

function App() {
  const [word, setWord] = useState(null);

  return (
    <div className="App">
      <input onChange={(e)=> setWord(e.target.value)} type="text" ></input>
      <WordAndDefinition word={word}/>
    </div>
  );
}

export default App;
