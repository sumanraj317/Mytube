import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router, 
} from "react-router-dom";
import { useState } from 'react';
import AllRoutes from './Components/AllRoutes';
import DrawSidebar from './Components/LeftSidebar/DrawSidebar';

function App() {
  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      settoggleDrawerSidebar({
        display:"flex"
      })
    }
    else{
      settoggleDrawerSidebar({
        display:"none"

    })
    }
  };
  
    return (
    <Router>

      <Navbar
        toggleDrawer={toggleDrawer}
        />
      {
        <DrawSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}

        />
      }
      <AllRoutes/>
     </Router>
    
  );
}

export default App;
