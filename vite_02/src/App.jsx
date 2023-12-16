import { useState } from "react";
import './App.css'

function App() {

  // ReactHook use of useState
  let [count, setCount] = useState(15)
  //let counter = 15;

  const addValue = ()=> {
    if (count < 20) {
      count ++;
      setCount(count)

      // setCount(preCount => preCount+1)
      // setCount(preCount => preCount+1)
    } else {
      setCount(20);
    }
    
    
    //console.log("value : ", count);
  }

  const removeValue = ()=> {
    if (count > 0) {
      count --;
      setCount(count)
    } else {
      setCount(0);
    }
  }

  return (
    <>
      <h1>welcome</h1>
      <h2>counter value : {count}</h2>
      <button
        onClick={addValue}
        >add: {count}</button> 
      <br />
      <button onClick={removeValue}>remove: {count}</button>
    </>
  );
}

export default App
