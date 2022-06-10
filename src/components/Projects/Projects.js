import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Projects = ({project}) => {
  
const navigate = useNavigate()
  const {live,git,name,img1,id}= project

  const liveSite =()=>{
    <Link to={window.open(live)}>Live</Link>
  }
  const gitSite =()=>{
    <Link to={window.open(git)}>Live</Link>
  }
const handleDetails=id=>{
      navigate(`/detail/${id}`)
}
  return (
   
  <>
  
  <div class="card max-w-xs bg-gradient-to-r from-purple-700 to-purple-500  shadow-xl ml-10 lg:ml-16 border-2">
  <img src={img1} alt="Shoes" />
  <div class="card-body">
    <h2 class=" text-3xl font-bold text-white text-center">
     {name}
     
    </h2>
    
    <div class="card-actions justify-center items-end">
      <button className="btn btn-xs btn-primary " onClick={liveSite}>
      Live Demo
      </button>
      <button className="btn btn-xs btn-primary" onClick={gitSite}>
      Git Repo
      </button>
      
    </div>
   
    <button onClick={()=>handleDetails(id)} class="btn btn-primary">Details</button>

    
  </div>
  
</div>
  
  </>
    
    
  );
};

export default Projects;
