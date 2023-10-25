'use client'
import React, { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs'


function ToggleSwitch() {
  const [theme, setTheme] = useState('light')

  const handleToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    console.log(theme)
    if (theme === 'dark')
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light')
    else
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark')
  };

  return (
    <div className='cursor-pointer text-2xl' onClick={handleToggle}>
      <BsSun className={`${theme==='light'?'visible':'hidden'}`}/>
      <BsMoon className={`${theme==='dark'?'visible':'hidden'}`}/>
    </div>
  );
}

export default ToggleSwitch;
