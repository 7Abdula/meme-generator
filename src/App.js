import React from 'react'
import Header from './components/Header';
import Meme from './components/Meme';


function App() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className="w-[550px]">
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default App;
