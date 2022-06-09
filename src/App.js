import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
    
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       </Routes> 
    </div>
  );
}

export default App;
