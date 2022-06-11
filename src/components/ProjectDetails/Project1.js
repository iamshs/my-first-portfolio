import React from "react";
import de1 from "../../assets/ss/screenshot-de.png";
import de2 from "../../assets/ss/screenshot-de-2.png";
import de3 from "../../assets/ss/screenshot-de-3.png";

const Project1 = () => {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-violet-800">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-1 gap-5">
          <div>
          <img
            src={de1}
            class="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          </div>
          <div>
          <img
            src={de2}
            class="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          </div>
          <div>
          <img
            src={de3}
            class="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          </div>
          </div>
          <div className="max-w-xl text-white">
            <h1 class="text-5xl font-bold">De Wild</h1>
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
            <p> Technology Used: React, Tailwind CSS, Daisy UI , React Router , React Query , Firebase ,
            MongoDB, Express.js , Heroku , Stripe-Payment etc.  </p>
             </article>
            <button class="btn btn-primary">Live Site</button>
            <button class="btn btn-primary ml-2">Git Repo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
