// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
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
  return(
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
<Navbar title="TextUtils222" aboutText ="About Text-Utils"/> 
<div className="container my-3"><TextForm heading="Enter the text to analyze below"/></div>
{/* <About/> */}
 </>
  );
}
// if you're using jsx in react you can return only one element here it is (div)app or use jsx fragment <>....</>
export default App;
// props are read only