import React from "react";
import de1 from "../../assets/ss/screenshot-de.png";
import de2 from "../../assets/ss/screenshot-de-2.png";
import de3 from "../../assets/ss/screenshot-de-3.png";
import { Link } from "react-router-dom";

const Project1 = () => {
    const liveSiteP1 =()=>{
        <Link to={window.open('https://de-walt-e12dc.web.app/')}></Link>
      }
      const gitSiteP1 =()=>{
        <Link to={window.open("https://github.com/iamshs/manufacturer-website-client")}></Link>
      }


  return (
    <div className="bg-gradient-to-r ml-0 from-slate-900 to-violet-700">
      <div className="hero min-h-screen ml-0 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-1 gap-5">
          <div className="">
          <img
            src={de1}
            className=" rounded-lg max-w-xs lg:max-w-sm  shadow-2xl" alt=""
          />
          </div>
          <div>
          <img
            src={de2}
            className=" rounded-lg max-w-xs lg:max-w-sm  shadow-2xl" alt=""
          />
          </div>
          <div>
          <img
            src={de3}
            className=" rounded-lg max-w-xs lg:max-w-sm  shadow-2xl" alt=""
          />
          </div>
          </div>
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold ani-title text-purple-200 drop-shadow-xl">De Wild</h1>
             <article className="my-2 font-semibold text-xl">
             <p>
                -This is a full stack manufacturer tools website where user can create an account by email password or google 
    
            </p>
            <p>
                - A user can order from available product the company have and he
                 pay and delete his own order. All user can update his profile from Dashboard
            </p>
            <p>
                -From Dashboard an admin can make a user admin
            </p>
            <p>
                -An Admin can add product , can delete product and stock product
            </p>
            <p> <span className='font-bold text-2xl'>Technology Used :</span> React, Tailwind CSS, Daisy UI , React Router , React Query , Firebase ,
            MongoDB, Express.js , Heroku , Stripe-Payment etc.  </p>
             </article>
            <button className="btn btn-primary" onClick={liveSiteP1}  >Live Site</button>
            <button className="btn btn-primary ml-2" onClick={gitSiteP1} >Git Repo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
