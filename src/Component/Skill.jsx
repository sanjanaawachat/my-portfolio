import React from 'react'
import uiux from '../Assets/uiux design.png'
import website from '../Assets/website design.jpg'
import app from '../Assets/app developer.jpg'
const Skill = () => {
    return (
        <section id='skills'>
            <span className='skilltitle'>What I Do</span>
            <span className='skillDesc'>I am a Skilled and passinate web Developer and web designer with experience in creating visually appealing and user-friendly websites. 
            I have strong understanding of web developer technologies.I am proficient in HTML,CSS, Javascript.I have worked with Front End Developer Projects .And I have Handson Experience also.  </span>
            <div className="skillsbars">
              

                <div className="skillbar">
                    <img src={uiux} alt="" className='skillbarimg' />
                    <div className="skillbartext">

                        <h2>UI/UX Design</h2>
                        <p>This is a demo text .you can write the own content here.</p>
                    </div>
                </div>

                <div className="skillbar">
                    <img src={website} alt="" className='skillbarimg' />
                    <div className="skillbartext">

                        <h2>Website Design</h2>
                        <p>Website are most be preety , interactive.</p>
                    </div>
                </div>

                <div className="skillbar">
                    <img src={app} alt="" className='skillbarimg' />
                    <div className="skillbartext">

                        <h2>App Developer</h2>
                        <p>Ionic Developer/Angular Developer/React developer . </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill