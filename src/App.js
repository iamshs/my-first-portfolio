import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ProjectDetail from './components/ProjectDetails/ProjectDetail';

function App() {
  return (
    <div>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
       <Route path='/detail/:id' element={<ProjectDetail></ProjectDetail>}></Route>
       </Routes> 
    </div>
  );
}

export default App;
