import React from 'react';
import html from '../../assets/icon/icons8-html-5.svg'
import css from '../../assets/icon/icons8-css3.svg'
import bootstrap from '../../assets/icon/icons8-bootstrap.svg'
import tailwind from '../../assets/icon/tailwindcss-icon.svg'
import js from '../../assets/icon/javascript-1.svg'
import react from '../../assets/icon/icons8-react.svg'
import './Skill.css'

const Skill = () => {
    return (
       <div className=' bg p-10' >
          <div className='my-10 lg:ml-40  gap-8 grid lg:grid-cols-3 grid-cols-2
          '>
          <div id="spinning-circle">
          <img class="rotate" width="150" height="150" src= {html} alt='' />  
          </div>
          <div id="spinning-circle">
          <img class="rotate" width="150" height="150" src= {css} alt='' />  
          </div>
          <div id="spinning-circle">
          <img class="rotate" width="150" height="150" src= {tailwind} alt='' />  
          </div>
          <div id="spinning-circle">
          <img class="rotate" width="150" height="150" src= {bootstrap} alt='' />  
          </div>
          <div id="spinning-circle">
          <img class="rotate" width="150" height="150" src= {js} alt='' />  
          </div>
          <div id="spinning-circle">
          <img class="rotate" width="150" height="150" src= {react}
          alt='' />  
          </div>
          </div>

       </div>
    );
};

export default Skill;