import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import myProjects from '../../projects';

const Home = () => {
    return (
        <div className="">
          <Banner></Banner> 
          <div>
          <div>
          <h1 className="text-3xl text-center font-extrabold  my-5 font-serif">My Projects</h1>
          </div>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
         {
            myProjects.map((project,i)=><Projects
            key={i}
            project={project}
            ></Projects>)
          }
         </div>
          </div> 
        </div>
    );
};

export default Home;