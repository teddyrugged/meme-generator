import React from 'react'
// import { useNavigate } from 'react-router-dom';
import IMG from '../images/memeimg.svg';
import "../meme.css"

const section = () => {
    // const handleClick = (e) => {
    //     console.log('i was clicked')
    //   };

  return (
    <main>
      <form className='body--full'>
            <input  className= "input--1" type="text"  name="fname"></input>
            <input className= "input--1" type="text" name="fname"></input>
            <button onClick={() => ("page")}>Get a new meme image!</button>
            <img src={ IMG } alt = "a pic" className="an--image" />

      </form>

    </main>

  )
}

export default section