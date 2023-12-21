import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState()
  const [charAllowed, setCharAllowed] = useState()
  const [password, SetPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerate = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str+= "!@#$%^&*()_+=-[]{}`~"

    for (let x = 1; x <=length; x++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    SetPassword(pass)

  },[length, numberAllowed, charAllowed, SetPassword])

  //////////////////////////
  const copyPassOnClipBoard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  /////////////////////////////
  useEffect(() => {
    passwordGenerate()
  }, [length, numberAllowed, charAllowed, passwordGenerate])

  

  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-500 shadow-md rounded-lg px-4 py-3 my-8 text-orange-500' >
        <h2 className='justify-center text-center mb-3'>Password Generater</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          className=' outline-none w-full py-1 px-3 bg-white'
          type="text"
          value={password}
          placeholder='Password'
          ref={passwordRef}
          readOnly
          />
          <button 
          className='p-2 shadow-xl bg-blue-600 text-slate-200'
          onClick={copyPassOnClipBoard}
          >
            Copy
          </button>
        </div> 
        <div className="flex text-sm gap-px-2">
          <div className="flex items-center gap-x-2">
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              onChange={(e) => {setlength(e.target.value)}}
              className='cursor-pointer'
              id='rangeInput'
            />
            <label htmlFor="rangeInput">Length: {length}</label>
          </div>
          <div className="flex ml-4">
            <input 
              type="checkbox"
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={()=> {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex ml-4">
            <input 
              type="checkbox"
              defaultChecked = {setCharAllowed}
              id='charInput'
              onChange={()=> {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>     
      </div>
    </>
  )
}

export default App
