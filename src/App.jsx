import { useEffect, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main";

function App() {
  const isDarkMode = (JSON.parse(localStorage.getItem('dark-mode')) || {}).darkMode
  const [darkMode, setDarkMode] = useState(isDarkMode || false);
  function persiseData(){
    localStorage.setItem('dark-mode', JSON.stringify({darkMode}))
  }
  useEffect(()=>{
    if (darkMode) {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove('dark')
    }
    persiseData()
  }, [darkMode])
  return (
    <div className="wrapper">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
    </div>
  )
}

export default App
