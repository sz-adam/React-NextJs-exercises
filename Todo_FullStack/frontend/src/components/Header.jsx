import React from 'react'
import { ModeToggle } from "../components/DarkMode/mode-toggle";
import { Logo } from './Logo';


function Header() {
  return (
    <div className="flex justify-between w-full p-5">
      <Logo className="mb-4" />
      <ModeToggle />
    </div>
  );
}

export default Header