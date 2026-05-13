import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello'
import CGU_Login from './cgu_login'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="App">
      <div>
        {CGU_Login()}
      </div>
    </div>
    </>
  );
}

export default App
