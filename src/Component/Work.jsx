import React from 'react'
import Portfolio1 from '../Assets/Portfolio1.png'
import Portfolio2 from '../Assets/React Blog App.png'
import Portfolio3 from '../Assets/Digital clock.png'
import Portfolio4 from '../Assets/Ecommerce project.png'
import Portfolio5 from '../Assets/Library app.png'
import Portfolio6 from '../Assets/ToDoapp.png'
import Portfolio7 from '../Assets/react component.png'
import Portfolio8 from '../Assets/react forms.png'
import Portfolio9 from '../Assets/Employee intereactive form.png'
import Portfolio10 from '../Assets/table app.png'
const Work = () => {
  return (
    <section id='worked projects'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workDesc'>

        </span>
        <div className="workImgs">
          <a href="https://taupe-churros-23effb.netlify.app/">
          <img src={Portfolio1} alt="Portfolio1" className='workImg'/>
          </a>
          <br />

<a href="https://musical-malabi-a2df58.netlify.app/">
<img src={Portfolio2} alt="Portfolio2" className='workImg'/>
</a>
     <br />

            <a href="https://sanjanaawachat.github.io/DigitalClock/page.html">
            <img src={Portfolio3} alt="Portfolio3" className='workImg'/>
            </a>
         <br />
         <a href="https://sanjanaawachat.github.io/Ecommerce_project/">
         <img src={Portfolio4} alt="Portfolio4" className='workImg'/>
         </a>
          
         
         <br />

         <a href="https://admirable-cannoli-92908a.netlify.app/">
         <img src={Portfolio5} alt="Portfolio5" className='workImg'/>
         </a>


         <br />


      
<a href="https://sanjanaawachat.github.io/TODO_appjs2/practice.html">
         <img src={Portfolio6} alt="Portfolio6" className='workImg'/>
         </a>

         <br />

         <a href="https://cheery-mochi-876071.netlify.app/">
         <img src={Portfolio7} alt="Portfolio7" className='workImg'/>
         </a>

         <br />

         <a href="https://glowing-longma-fce8f4.netlify.app/">
         <img src={Portfolio8} alt="Portfolio8" className='workImg'/>
         </a>

         <a href="https://resonant-bienenstitch-3ce51b.netlify.app/">
         <img src={Portfolio9} alt="Portfolio9" className='workImg'/>
         </a>

         <a href="https://bucolic-figolla-9f0008.netlify.app/">
         <img src={Portfolio10} alt="Portfolio10" className='workImg'/>
         </a>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Work