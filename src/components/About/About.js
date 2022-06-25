import React from 'react';
import me from '../../assets/me.jpg'
import './About.css'

const About = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r mx-auto from-slate-900 to-violet-800 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
  <div className="w-80 rounded-full">
    <img className='avatar-img' src={me} alt='' />
  </div>
</div>
          <div className='max-w-xl text-white'>
            <h1 className="text-5xl font-bold">About ME:</h1>
            <p className="py-6 font-bold text-xl">My Name is Md Sholayman.I am a full-stack developer.I have experience in front-end web development, working with technologies like React,Tailwind CSS, React Bootstrap , express.js , firebase, MongoDB.Until now,I am enjoying every part of my journey in Programming World.</p>
           
          </div>
        </div>
      </div>
    );
};

export default About;