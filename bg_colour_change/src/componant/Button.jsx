
import React from 'react'

export default function Button({name, colour, textColour="white", onclick}) {
  return (
    <button className="px-8 py-2 rounded-md mx-auto" 
    style={{backgroundColor:colour, color: textColour}} 
    value={colour}
    onClick={onclick}
    >
      {name}
    </button>
  )
}
