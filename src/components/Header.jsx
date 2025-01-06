import React from 'react';
import moonOutline from "../assets/moon-outline.png"
import moonFill from "../assets/moon-fill.png"

export default function Header(props) {
  const {darkMode, setDarkMode} = props;
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
