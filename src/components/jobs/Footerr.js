import React from 'react'
import "./jobs.css"


const Footerr = () => {
  return (
    <div>
        <h1>Get in touch with us</h1>
        <form >
            <h2>Send us a message</h2>
            <input type= "text" id="text" name="firstname"/>
            <input type= "text" id="text" name="lastname"/>
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email"/>
            <input type= "text" id="text" name="message"/>

            <input type="submit" value="Submit"/>
        </form>
        <footer className='wid--foot'>
            <div className='middle--man'>
                <h2>FORESCUE</h2>
                <h3>subscribe to get alert</h3>
                <form className='d--forms'>
                    <input  className='input--1'   type= "text" id="text" name="enter your email address"/>
                    <input className='input--2' type="submit" value="Subsribe"/>
                </form>
                <div class="hl"></div>
            </div>



            <div>
                <p>© 2022 All Rights Reserved by Forescue</p>
                <li>Privacy Policy</li>
                <li>Term of use</li>
                <li>How it works</li>
                <li>Tutorial</li>
                <li>Site Map</li>
            </div>

        </footer>
    </div>
  )
}

export default Footerr