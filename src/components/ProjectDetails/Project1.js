import React from "react";
import de1 from "../../assets/ss/de1.png";
import de2 from "../../assets/ss/screenshot (1).png";
import de3 from "../../assets/ss/screenshot.png";
import { Link } from "react-router-dom";

const Project1 = () => {
  const liveSiteP1 = () => {
    <Link to={window.open("https://buy-smart-bcec1.web.app/")}></Link>;
  };
  const gitSiteP1 = () => {
    <Link to={window.open("https://github.com/iamshs/buy-smart")}></Link>;
  };

  return (
    <div className="bg-gradient-to-r ml-0 from-slate-900 to-violet-700">
      <div className="hero min-h-screen ml-0 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-1 gap-5">
            <div className="">
              <img
                src={de1}
                className=" rounded-lg max-w-xs lg:max-w-sm  shadow-2xl"
                alt=""
              />
            </div>
            <div>
              <img
                src={de2}
                className=" rounded-lg max-w-xs lg:max-w-sm  shadow-2xl"
                alt=""
              />
            </div>
            <div>
              <img
                src={de3}
                className=" rounded-lg max-w-xs lg:max-w-sm  shadow-2xl"
                alt=""
              />
            </div>
          </div>
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold text-white mb-5  drop-shadow-xl">
              Buy Smart
            </h1>
            <article className="my-2 font-semibold text-xl">
              <p>
                -This is a front end E-commerce website where user can create an
                account by email and password or google
              </p>
              <p>
                - A user can order products which are available in the website
                and they can contact from the contact page.
              </p>
              <p>
     
                <span className="font-bold text-xl">
                  Technology Used :
                </span>
                React, Tailwind CSS, CSS3 , React Router , 
                Firebase etc.
              </p>
            </article>
            <button className="btn btn-primary" onClick={liveSiteP1}>
              Live Site
            </button>
            <button className="btn btn-primary ml-2" onClick={gitSiteP1}>
              Git Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
