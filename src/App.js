import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Global.css'
import Navigation from './Components/Navbar.js'
import logo from './logo.svg';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import BookNow from './Components/BookNow';
import Gallery from './Components/Gallery';
import TheHome from './Components/TheHome';
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
       <div className='page-container'>
        <div className='page-content pb-5'>
      <HashRouter>
          <Navigation logo={logo} />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thehome" element={<TheHome />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/booknow" element={<BookNow />} />
          </Routes>
        </HashRouter>
 
        </div>
        <hr className='text-center' style={{width:"15%", margin:"auto"}}></hr>

        <footer className="footer">
          <img
                    src={logo}
                    width="35"
                    height="35"
                    class=""
                    alt="willow logo"
                    />  
        </footer>
      </div>

    </>
  );
}

export default App;
