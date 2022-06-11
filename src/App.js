import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project1 from './components/ProjectDetails/Project1';
import Project2 from './components/ProjectDetails/Project2';
import Project3 from './components/ProjectDetails/Project3';

function App() {
  return (
    <div>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/projectDe' element={<Project1 />} > </Route>
      <Route path='/projectMo' element={<Project2 />} > </Route>
     <Route path='/projectBi' element={<Project3></Project3>} ></Route>
       </Routes> 
    </div>
  );
}

export default App;
