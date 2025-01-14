import React from 'react';
import { useEffect, useState } from "react"
import moonOutline from "../assets/moon-outline.png"
import moonFill from "../assets/moon-fill.png"

export default function Header() {
  const isDarkMode = (JSON.parse(localStorage.getItem('dark-mode')) || {value: false})
  const [darkMode, setDarkMode] = useState(isDarkMode.value);
  function persisetData(){
    localStorage.setItem('dark-mode', JSON.stringify({value: darkMode}))
  }
  useEffect(()=>{
    if (darkMode) {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove('dark')
    }
    persisetData()
  }, [darkMode])
  return (
    <header>
      <div className="logo">Where in the world?</div>
      <button className='theme-toggle' onClick={()=> setDarkMode(!darkMode)}>
        <img src={darkMode == true? moonFill: moonOutline} alt="moon icon " />
        Dark Mode
      </button>
    </header>
  )
}
