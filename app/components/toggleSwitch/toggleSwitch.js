'use client'
import React, { useState } from 'react';

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (isChecked)
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light')
    else
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark')
  };

  return (
    <label className={`relative inline-block w-16 h-7 rounded-3xl ${isChecked ? 'bg-blue-500' : 'bg-gray-400'}`}>
      <input type="checkbox" className="hidden" checked={isChecked} onChange={handleToggle} />
      <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-transform rounded-[34px]">
        <span className={`absolute cursor-pointer w-5 h-5 bg-white rounded-full transition-transform ${isChecked ? 'transform translate-x-8' : ''}`} style={{ left: '4px', bottom: '4px', boxShadow: isChecked ? '0 0 1px #2196F3' : 'none' }}></span>
      </span>
    </label>
  );
}

export default ToggleSwitch;
