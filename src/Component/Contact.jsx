import React from 'react'
import walmart from '../Assets/walmart.png'
import adobe from '../Assets/Adobe_1.jpg'
import microsoft from '../Assets/Microsoft_logo.png'
import facebook from '../Assets/Facebook-logo.png'
import youtube from '../Assets/youtube_logo.jpg'
import instagram from '../Assets/Instagram-app-logo.jpg'

import facebook_icon from '../Assets/facebook-icon.avif'
import twitter_icon from '../Assets/twitter-icon.webp'
import insta_icon from '../Assets/Instagram-app-logo.jpg'
import youtube_icon from '../Assets/youtube-icon.png'
const Contact = () => {
  return (
<section className='contactpage'>
    <div id="clients">
        <h1 className='contactpagetitle'>My Clients</h1>
        <p className='clientDesc'>I have had the apportunity to work with a diverse group of companies.some of notable companies i have work with includes.</p>
    
  
      <marquee behavior="" direction="">
      <div className='clientImgs'>
        <img src= {walmart} alt="clientImg" />
        <img src= {adobe} alt="clientImg" />
        <img src= {microsoft} alt="clientImg" />
        <img src= {facebook} alt="clientImg" />
        <img src= {youtube} alt="clientImg" />
        <img src= {instagram} alt="clientImg" />
    </div>
    </marquee>
   </div>

   <div id='contact'>
    <h1 className='contactpagetitle'>Contact Me</h1>
    <span className='contactdesc'>Please fill out the form below to discuss any work app</span>
    <form className='contactform'>
      <input type="text" className='name' placeholder='Enter your name' /><br />
      <input type="email" className='email' placeholder='Enter your email...' /><br />
      <textarea className='msg' name="message" id="" cols="30" rows="10" placeholder='your message'></textarea><br />
      <button className="submitbtn">Submit</button>

      <div className="links">
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={youtube_icon} alt="" />
      
      </div>
    </form>
   </div>
</section>
  )
}

export default Contact