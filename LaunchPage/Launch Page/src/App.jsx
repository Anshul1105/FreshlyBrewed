import { useState } from 'react'
import Title from './components/Title'
import Heading from './components/Heading'
import ShinyText from './components/ShinyText'
import Timer from './components/Timer'
import CountdownTimer from './components/CountdownTimer'

import './App.css'
import Msg from './components/Msg'
import Email from './components/Email'
import './CustomFont.css'
import BackgroundAnimation from './components/BackgroundAnimation'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={"main-container"}>
        <BackgroundAnimation />
        <div className="content">
          <Title></Title>
          <center>
            <div className="container">
              <Heading className="heading"></Heading>
              <ShinyText ></ShinyText>   
              <Timer></Timer>
              {/* <Msg></Msg> */}
              <Email></Email>
            </div>
          </center>
        </div>
      </div >
    </>
  )
}

export default App
