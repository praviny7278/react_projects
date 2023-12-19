import { useState } from 'react'
import Button from './componant/Button'

function App() {
  let [bgColour, setBgColour] = useState();

  let bgColourChng = (e)=> {
    setBgColour(e.target.value);
    //console.log("work", e.target.value);
  }

  return (
    <>
     <div className='w-screen h-screen relative' style={{backgroundColor:bgColour}}>
      <div className="absolute bottom-10 left-1/4 p-3 flex items-center w-3/5 m-auto rounded-xl bg-red-100 ">
        {/* This first Button only is the deffrent method for onClick behavior and chancge the state in onclick directly*/}
        <Button name="Yellow" colour="yellow" textColour="black" onclick={(e)=> setBgColour(e.target.value)}/>

        <Button name="White" colour="White" textColour='black' onclick={bgColourChng}/>
        <Button name="Red" colour="Red" onclick={bgColourChng}/>
        <Button name="Blue" colour="Blue" onclick={bgColourChng}/>
        <Button name="Green" colour="green" onclick={bgColourChng}/>
        <Button name="Black" colour="black" onclick={bgColourChng}/>
      </div>
     </div>
    </>
  )
}

export default App
