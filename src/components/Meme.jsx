import React from 'react'

function Meme() {
  return (
    <main className="mt-9 px-9 font-karla">
      <form action="">
        <input type="text" id="" name="" placeholder="Top text" className="w-[230px] bg-gray-100 rounded border border-gray-300 focus:border-[#672280] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-4" />

        <input type="text" id="" name="" placeholder="Bottom text" className="w-[230px] bg-gray-100 rounded border border-gray-300 focus:border-[#672280] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <button className="font-bold text-white bg-gradient-to-r from-[#672280] to-[#A626D3] hover:to-[#672280] border-0 py-2 px-6 focus:outline-none rounded text-lg mt-4 w-full">Get a new meme image  🖼</button>
      </form>
    </main>
  )
}

export default Meme