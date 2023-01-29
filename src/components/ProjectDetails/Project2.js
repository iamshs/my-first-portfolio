import React from 'react';
import mo1 from '../../assets/ss/mo1.png'
import mo2 from '../../assets/ss/fi2.png'
import mo3 from '../../assets/ss/fi3.png'
import { Link } from 'react-router-dom';

const Project2 = () => {
  const liveSiteP2 =()=>{
    <Link to={window.open('https://figgas.web.app/')}></Link>
  }
  const gitSiteP2 =()=>{
    <Link to={window.open("https://github.com/iamshs/figgas")}></Link>
  }
    return (
        <div className="bg-gradient-to-r from-slate-900 to-violet-700">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="grid grid-cols-1 gap-5">
            <div>
            <img
              src={mo1}
              className=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            <div>
            <img
              src={mo2}
              className=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            <div>
            <img
              src={mo3}
              className=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            </div>
            <div className="max-w-xl text-white">
              <h1 className="text-5xl  font-bold text-white mb-5 drop-shadow-xl">Figaas</h1>
               <article className="my-2 font-semibold text-xl">
               <p>
                  -This is a front end website 
      
              </p>
              <p>
                  - It's a single page application for cafe and food services.
              </p>
              <p>
                  -All kinds of services have shown on the website in details .
              </p>
             
              <p> <span className='font-bold text-xl'>Technology Used :</span> React, CSS3 , React Router , Swiper JS  etc.  </p>
               </article>
              <button className="btn btn-primary" onClick={liveSiteP2} >Live Site</button>
              <button className="btn btn-primary ml-2" onClick={gitSiteP2} >Git Repo</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Project2;