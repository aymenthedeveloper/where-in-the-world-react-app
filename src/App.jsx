import { useEffect, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    if (darkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [darkMode])
  return (
    <div className="wrapper">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
    </div>
  )
}

export default App
