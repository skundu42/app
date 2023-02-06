import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import './App.css';
import {AppContext} from "./store/Context.js"
import LoginPage from './pages/Login/LoginPage';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Course from './pages/Course/course';

function App () {

  const [appData] = useContext(AppContext)

  return(
    <>
        <Router>
        <div>
          { appData.loggedIn ? 
           <div>
           <Routes>
               <Route exact path="/" element={<div>App</div>} />
               <Route exact path="/locations" element={<div>location</div>} />
               <Route exact path="/profile" element={<div>profile</div>} />
           </Routes>
       </div> : <Routes>
           <Route exact path="/" element={<div><Home/></div>} />
           <Route exact path="/course" element={<div className='bg-[#1B1B1B]'><Course/></div>} /></Routes>
           }
           
        </div>
        
      </Router>
    </>
  )
}

export default App;