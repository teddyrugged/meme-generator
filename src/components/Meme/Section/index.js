import React from 'react'
import IMG from '../images/memeimg.svg';
import "../meme.css"

const section = () => {
  return (
    <main>
      <form className='body--full'>
          <input  className= "input--1" type="text"  name="fname"></input>
          <input className= "input--2" type="text" name="fname"></input>
          <button onClick={""}>Get a new meme image!</button>
          <div className='body--image'>
            <img src={ IMG } alt = "a pic" className="an--image" />
          </div>
      </form>

    </main>

  )
}

export default section