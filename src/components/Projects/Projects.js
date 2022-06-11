import React from "react";
import { Link} from "react-router-dom";
import de1 from '../../assets/ss/screenshot-de.png'
import mo1 from '../../assets/ss/screenshot-mo.png'
import bg1 from '../../assets/ss/s.png'

const Projects = () => {
  

  
  const liveSiteP1 =()=>{
    <Link to={window.open('https://de-walt-e12dc.web.app/')}></Link>
  }
  const gitSiteP1 =()=>{
    <Link to={window.open("https://github.com/iamshs/manufacturer-website-client")}></Link>
  }
  const liveSiteP2 =()=>{
    <Link to={window.open('https://warhouse-management.web.app/')}></Link>
  }
  const gitSiteP2 =()=>{
    <Link to={window.open("https://github.com/iamshs/warehouse-management-client")}></Link>
  }
  const liveSiteP3 =()=>{
    <Link to={window.open('https://classy-cobbler-36ef30.netlify.app')}></Link>
  }
  const gitSiteP3 =()=>{
    <Link to={window.open("https://github.com/iamshs/product-analysis-website")}></Link>
  }

  return (
   
  <>
  
  <div class="card max-w-xs bg-gradient-to-r from-purple-700 to-purple-500  shadow-xl ml-10 lg:ml-16 border-2">
  <img src={de1} alt="Shoes" />
  <div class="card-body">
    <h2 class=" text-3xl font-bold text-white text-center">
    De Wild
     
    </h2>
    
    <div class="card-actions justify-center items-end">
      <button className="btn btn-xs btn-primary " onClick={liveSiteP1}>
      Live Demo
      </button>
      <button className="btn btn-xs btn-primary" onClick={gitSiteP1}>
      Git Repo
      </button>
      
    </div>
   
    <button  class="btn btn-primary">
      <Link to='/project1' >Details</Link>
    </button>

    
  </div>
  
</div>
  <div class="card max-w-xs bg-gradient-to-r from-purple-700 to-purple-500  shadow-xl ml-10 lg:ml-16 border-2">
  <img src={mo1} alt="Shoes" />
  <div class="card-body">
    <h2 class=" text-3xl font-bold text-white text-center">
    Motor House
     
    </h2>
    
    <div class="card-actions justify-center items-end">
      <button className="btn btn-xs btn-primary " onClick={liveSiteP2}>
      Live Demo
      </button>
      <button className="btn btn-xs btn-primary" onClick={gitSiteP2}>
      Git Repo
      </button>
      
    </div>
   
    <button  class="btn btn-primary">
      <Link to='/project2' >Details</Link>
    </button>

    
  </div>
  
</div>
  <div class="card max-w-xs bg-gradient-to-r from-purple-700 to-purple-500  shadow-xl ml-10 lg:ml-16 border-2">
  <img src={bg1} alt="Shoes" />
  <div class="card-body">
    <h2 class=" text-3xl font-bold text-white text-center">
   BigBrand Reviews
     
    </h2>
    
    <div class="card-actions justify-center items-end">
      <button className="btn btn-xs btn-primary " onClick={liveSiteP3}>
      Live Demo
      </button>
      <button className="btn btn-xs btn-primary" onClick={gitSiteP3}>
      Git Repo
      </button>
      
    </div>
   
    <button  class="btn btn-primary">
      <Link to='/project3' >Details</Link>
    </button>

    
  </div>
  
</div>
  
  </>
    
    
  );
};

export default Projects;
