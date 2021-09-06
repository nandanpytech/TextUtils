
import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
 import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="black"
      showAlert('Darkmode enabled...','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert('Lightmode enabled...','success')
    }
  }
  return (
    <>
      
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
        <Textform showAlert={showAlert} mode={mode} />
      </div>
    
    </>
     
  );
}

export default App;
