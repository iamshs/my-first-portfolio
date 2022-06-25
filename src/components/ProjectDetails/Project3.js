import React from 'react';
import bi1 from '../../assets/ss/s.png'
import bi2 from '../../assets/ss/s2.png'
import bi3 from '../../assets/ss/s-3.png'
import { Link } from 'react-router-dom';

const Project3 = () => {
    const liveSiteP3 =()=>{
        <Link to={window.open('https://classy-cobbler-36ef30.netlify.app')}></Link>
      }
      const gitSiteP3 =()=>{
        <Link to={window.open("https://github.com/iamshs/product-analysis-website")}></Link>
      }
    return (
        <div className="bg-gradient-to-r from-slate-900 to-violet-700">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="grid grid-cols-1 gap-5">
            <div>
            <img
              src={bi1}
              className=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            <div>
            <img
              src={bi2}
              className=" max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            <div>
            <img
              src={bi3}
              className="max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt=""
            />
            </div>
            </div>
            <div className="max-w-xl text-white">
              <h1 className="text-5xl ani-title font-bold text-purple-200 drop-shadow-xl ">BigBrand Reviews</h1>
               <article className="lg:my-2 my-0 font-semibold text-xl text-purple-100 ">
               <p>
                  -Big Brand is a product analysis website 
      
              </p>
              <p>
                  - All Reviews have shown in the Reviews Route
              </p>
              <p>
                  -In Dashboard product analysis chart have shown.
              </p>
              <p>
                  -A user can explore full website without creating a account.
              </p>
              <p> <span className='font-bold text-2xl'>Technology Used :</span> React, React Router , Rechart , Vanilla CSS etc.  </p>
               </article>
              <button className="btn btn-primary"  onClick={liveSiteP3} >Live Site</button>
              <button className="btn btn-primary ml-2" onClick={gitSiteP3} >Git Repo</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Project3;