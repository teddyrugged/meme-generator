import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from '../images/memeimg.svg';
import memesData from "../memeData";
import "../meme.css";

const Section = () => {
  const [memeImage, setMemeImage] = useState('');

    const getMemeImage =()=> {
       const memesArray = memesData.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       setMemeImage(memesArray[randomNumber].url)

  }
  return (
    <main>
      <form className='body--full'>
            <input  className= "input--1" type="text"  placeholder="Top text"></input>
            <input className= "input--1" type="text" placeholder="Buttom text"></input>
            <button onClick={getMemeImage}>Get a new meme image!</button>
            {/* <img src={ memeImage } alt = "a pic" className="an--image" /> */}

      </form>
      <img src={memeImage} alt = "a pic" className = 'img--link'  />

    </main>

  )
}

export default Section