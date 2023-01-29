import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Skill from '../Skills/Skill';
import './Home.css'



const Home = () => {

  
    
 
    return (
        <div className="">
          <Banner></Banner> 
          <div>
          <div>
          <h1 className="text-6xl ani-title font-light  text-center    my-20 font-serif">MY PROJECTS</h1>
          </div>
         <div className='flex items-center justify-around flex-cols lg:flex-row py-10 bg '>
        <Projects></Projects>
         </div>
         <div className=''>
        <h2 className=' text-6xl ani-title font-light  text-center  my-20 font-serif'>
           MY SKILLS
        </h2>
          <Skill></Skill>
        </div>
          </div> 
        </div>
    );
};

export default Home;