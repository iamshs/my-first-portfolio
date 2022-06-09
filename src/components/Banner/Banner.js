import React from 'react';
import { Link } from 'react-router-dom';
import homeMain from '../../assets/home-main.svg'
import pdf from '../../assets/Md Sholayman.pdf'
const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-[url('/src/assets/home-bg.jpg')]">
        <div className="hero-content flex-col flex-1  lg:flex-row-reverse">
          <img className='lg:max-w-md max-w-xs my-4 ' src={homeMain} alt='' />
          <div >
            <h1 className="text-6xl text-secondary my-1 font-bold">Hi There!!</h1>
            <h1 className="text-3xl text-purple-400 my-1 font-bold">I am Md Sholayman</h1>
            <h2 className='text-2xl text-secondary font-semibold'> Junior Web Developer</h2>
            <p className="py-6 text-white"> Full-Stack Developer || React Developer</p>
            <button className="btn btn-primary mx-2">
                <Link to={'/contact'}>Contact</Link>
            </button>
            <button className="btn btn-primary">
                <Link style={{marginLeft: "5px"}} to={pdf} target="_blank" download >
           DOWNLOAD RESUME
          </Link></button>
          </div>
        </div>
      </div>
    );
};

export default Banner;