import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const telega = window.Telegram.WebApp;
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    telega.ready()
  })

  return (
    <>
    <div className='wrapper'>

    <h1 className='name'>Regasa Ibrahim</h1>
    <h2>I am Web Designer And Deve lovelopr</h2>
    <a href="https://t.me/RegasaIbrahim">
    <span onclick="openTelegramLink('https://t.me/RegasaIbrahim')">Contact Me</span>
    </a>
    </div>
    </>
  )
}

export default App
