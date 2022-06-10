import React from 'react';
import me from '../../assets/me.jpg'

const About = () => {
    return (
        <div class="hero min-h-screen bg-gradient-to-r mx-auto from-slate-900 to-violet-800 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="avatar">
  <div class="w-64 rounded-full">
    <img src={me} alt='' />
  </div>
</div>
          <div className='max-w-xl text-white'>
            <h1 class="text-5xl font-bold">About ME:</h1>
            <p class="py-6 font-bold text-xl">My Name is Md Sholayman.I am a full-stack developer.I have experience in front-end web development, working with technologies like React,Tailwind CSS, React Bootstrap , express.js , firebase, MongoDB.Until now,I am enjoying every part of my journey in Programming World.</p>
           
          </div>
        </div>
      </div>
    );
};

export default About;