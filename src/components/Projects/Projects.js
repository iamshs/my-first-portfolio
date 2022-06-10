import React from "react";
import { Link } from "react-router-dom";

const Projects = ({project}) => {
  const {live,git,name}= project

  const liveSite =()=>{
    <Link to={window.open(live)}>Live</Link>
  }
  const gitSite =()=>{
    <Link to={window.open(git)}>Live</Link>
  }

  return (
   
  <>
  
  <div class="card max-w-xs bg-gradient-to-r from-purple-700 to-purple-500  shadow-xl ml-10 lg:ml-16">
  {/* <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure> */}
  <div class="card-body">
    <h2 class=" text-3xl font-bold text-white text-center">
     {name.toString()}
     
    </h2>
    
    <div class="card-actions justify-center items-end">
      <button className="btn btn-xs btn-primary " onClick={liveSite}>
      Live Demo
      </button>
      <button className="btn btn-xs btn-primary" onClick={gitSite}>
      Git Repo
      </button>
    </div>
  </div>
</div>
  
  </>
    
    
  );
};

export default Projects;
