import { useState } from 'react';
import './App.css'
import { Minus } from './components/minus';
import { Plus } from './components/plus';
import { Show } from './components/show';
import { Action } from './components/action';
import { Kor } from './components/kor';

function App() {
  const [a, setA] = useState(0);


  const addOne = () => {
    setA(a + 1);
  }

  const subOne = () => {
    setA(a - 1);
  }

  const addTen = () => {
    setA(a + 10);
  }

  const subTen = () => {
    setA(a - 10);
  }

  return (
    <>
      <h1>Wordle solver</h1>
      <Minus value={a} onClick={setA}/>
      <Plus value={a} onClick={setA}/>
      <Kor/>
      <div>
        <Action action={addOne} label='plus 1' />
        <Action action={subOne} label='minus 1' />
      </div>
      <div>
        <Action action={addTen} label='plus 10' />
        <Action action={subTen} label='minus 10' />
      </div>
      <Action action={() => alert(4534)} label='alert' />
      <Show value={a} />
    </>
  )
}

export default App
