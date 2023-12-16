import { useState } from 'react'
import Button from './componant/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <div className="bg-white relative bottom-5">
        <Button name={"Red"}/>
      </div>
     </div>
    </>
  )
}

export default App
