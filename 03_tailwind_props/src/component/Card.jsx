import React from 'react'


// {btnText="not available"} Used for assign dedault value in parameter
export default function Card({channel, btnText="not available"}) {
    // console.log("props", props);
    console.log(channel);
  return (
    <div className=' flex-auto m-5 p-10 bg-green-200 text-black'>
        <img className='w-60 h-30' src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww" alt="as" />
        <p>{channel}</p>
        <p>price</p>
        <button className='bg-green-100 text-center'>{btnText}</button>
    </div>
  )
}
