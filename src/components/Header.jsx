import React from 'react'
import Troll from '../Images/troll-face.svg'

function Header() {
  return (
    <div className="header--nav h-16 p-5 flex font-karla items-center bg-gradient-to-r from-[#672280] to-[#A626D3]">
      <img src={Troll} alt="Troll_face" />
      <h2 className="text-white font-bold text-xl -tracking-widest ml-2">Meme Generator</h2>
    </div>
  )
}

export default Header