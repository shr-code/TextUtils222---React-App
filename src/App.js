// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// let name =<i>Shraddha</i>
function App() {
  // return (
  // <>
  // <h1> this is Shraddha</h1>
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React with Shraddha
  //     </a>
  //   </header>
  // </div>
  // </>
  <>
    { /* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis, voluptate incidunt cupiditate omnis facere error fugit in quos mollitia voluptatum fugiat non ducimus, quisquam beatae atque! Beatae soluta ea molestiae quo?
    </div> */}
  </>
  // );
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils222 - Dark Mode"
      // setInterval(() => {
      //   document.title="TextUtils222 is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install now!"
      // }, 1500); //for blinking effect in the document title
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils222 - Light Mode"

    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
      <Router>
        <Navbar title="TextUtils222" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
// if you're using jsx in react you can return only one element here it is (div)app or use jsx fragment <>....</>
export default App;
// props are read only