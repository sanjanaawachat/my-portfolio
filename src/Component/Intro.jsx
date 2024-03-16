import React from 'react'
import profileimg from '../Assets/asian-professional-working-female-black-suit-is-working-ipad-tablet-table_477666-1389.avif'
const Intro = () => {
  return (
 <section id='intro'>
    <div className="introcontent">
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introname'>Sanjana</span><br />Full Stack Developer</span>
        <p className="intropara">I am a skilled front end Developer with experience of Angular Developer</p>
        <button className='btn'><span class="material-symbols-outlined">
work
</span>
          Hire Me</button>
    </div>
    <img src={profileimg} alt="profile" className='bg'/>
 </section>
  )
}

export default Intro