import React from 'react';
import Trol from '../images/download.png';
import "../meme.css"

const header = () => {
  return (
    <>
        <header className='top--head'>
          <img src={ Trol } alt = "a trol" className="an--trol" />
            <h1>Meme Generator</h1>
            <h3>React Course - Project 3</h3>
        </header>
    </>
  )
}

export default header