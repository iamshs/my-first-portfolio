import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useProject from '../../hooks/useProject';
import axios from 'axios'





const ProjectDetail = () => {
    const {id} = useParams()
   
    const [projects, setProjects] = useState({})
   useEffect(()=>{
   const func = async()=>{
    const {data} = await axios.get(`http://localhost:3000/projects.json`)
    setProjects(data)
    console.log(data)
   }
   func()
   },[id])
  


    return (
        <div >
        <h1>Detail of {projects.length}</h1>
        <div>
       
        </div>
        </div>
    );
};

export default ProjectDetail;