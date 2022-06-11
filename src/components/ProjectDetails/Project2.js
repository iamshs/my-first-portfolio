import React from 'react';
import mo1 from '../../assets/ss/screenshot-mo.png'
import mo2 from '../../assets/ss/screenshot-mo-2.png'
import mo3 from '../../assets/ss/screenshot-mo-3.png'
import { Link } from 'react-router-dom';

const Project2 = () => {
    const liveSiteP2 =()=>{
        <Link to={window.open('https://warhouse-management.web.app/')}></Link>
      }
      const gitSiteP2 =()=>{
        <Link to={window.open("https://github.com/iamshs/warehouse-management-client")}></Link>
      }
    return (
        <div className="bg-gradient-to-r from-slate-900 to-violet-700">
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div className="grid grid-cols-1 gap-5">
            <div>
            <img
              src={mo1}
              class=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            <div>
            <img
              src={mo2}
              class=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            <div>
            <img
              src={mo3}
              class=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            </div>
            <div className="max-w-xl text-white">
              <h1 class="text-5xl font-bold text-purple-200 drop-shadow-xl">Motor House</h1>
               <article className="my-2 font-semibold text-xl">
               <p>
                  -This is a full stack warehouse management website where user can create an account by email password or google 
      
              </p>
              <p>
                  - It's a single page application where user can both add product abd delete.
              </p>
              <p>
                  -All kinds of services have shown on the website in details .
              </p>
              <p>
                  -A user can manage all the inventories
              </p>
              <p> <span className='font-bold text-2xl'>Technology Used :</span> React, React Bootstrap, React Router , React Query , Firebase ,
              MongoDB, Express.js , Heroku  etc.  </p>
               </article>
              <button class="btn btn-primary" onClick={liveSiteP2} >Live Site</button>
              <button class="btn btn-primary ml-2" onClick={gitSiteP2} >Git Repo</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Project2;