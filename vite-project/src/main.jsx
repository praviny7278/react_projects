import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Another way to excute reactElement
const MyApp = ()=> {
  return (
    <h1>
      function call
    </h1>
  )
}


// Another way to excute reactElement
const Myway = (
  <a href='https://google.com' target='_balnk'>visit google</a>
)

// Another way to excute reactElement
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me visit'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <MyApp /> */}
  </React.StrictMode>
     
    // MyApp()
    //  Myway
    //  reactElement

)
