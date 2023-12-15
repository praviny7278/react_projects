import { useState } from 'react'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  let userobj = {
    name: "aman",
    age: 23,
  }

  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-900 m-auto flex'>Tailwind test</h1>
      < Card channel="Aman" user={userobj} newarr={arr} btnText="Click To Buy"/>
      <Card btnText="Click To Sell"/>
      {/* <button className=' bg-red-600 padding-10 text-center justify-center block m-auto'>Click</button> */}
    </>
  )
}

export default App
