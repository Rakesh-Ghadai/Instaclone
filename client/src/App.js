import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landingpage from "./Components/Landingpage";
import Userform from "./Components/Userform";
import Main from "./Components/Main";

const App = ()=>{
 return( 
  
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/Main" element={<Main/>}/>
            <Route path="/userform" element={<Userform/>}/>

          </Routes>
      </BrowserRouter>
      );

}

export default App;