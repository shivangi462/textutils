import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React ,{ useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or npot
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setalert(null);
        }, 1000);
  }
  const togglemode=()=>{
      if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showalert("Dark mode enabled","success");
        // document.title="TextUtils - Dark Mode";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showalert("Light mode enabled","success");
        // document.title="TextUtils - Light Mode";
      }
  }
  return (
    <>
    <Router>    
    <Navbar title="TextUtils" aboutus="About Us" blog="Blog" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
     <div className="container my-3">
     <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
                {/* <Route path="/users">
                  <Users />
                </Route> */}
            <Route exact path="/">
            <TextForm showalert={showalert}  heading="Enter Your Text Here To Analyze" mode={mode} />
            </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
