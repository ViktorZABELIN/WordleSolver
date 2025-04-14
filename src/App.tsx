import { useState } from 'react';
import './App.css'
import { Minus } from './components/minus';
import { Plus } from './components/plus';
import { Show } from './components/show';

function App() {
  const [a, setA] = useState(0);

  return (
    <>
      <h1>Wordle solver</h1>
      <Minus value={a} onClick={setA}/>
      <Plus value={a} onClick={setA}/>
      <Show value={a} />
    </>
  )
}

export default App
