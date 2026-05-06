import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
        {MultiButton(10)}
      </div>
    </div>
    </>
  );
}

export default App
