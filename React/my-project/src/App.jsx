// import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Contaxt from './Contaxt/Contaxt'
import ContactBig from './ContaxtBig/ContactBig'
import Api from './Api/Api'
import TextContext from './TestContext/TestContext'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='main'>
        <TextContext/>
        {/* <Api/> */}
        {/* <ContactBig/> */}
        {/* <Contaxt/> */}
        {/* <Login/> */}
      </div>
    
    </>
  )
}

export default App
