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

function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/gallery":
      component = <Gallery/>
      break
    case "/reviews":
      component = <Reviews/>
      break
    case "/booknow":
      component = <BookNow/>
      break
    case "/thehome":
      component = <TheHome/>
      break
  }

  return (
    <>
      <Navigation logo={logo} />
      <div className='page-container'>
        <div className='page-content pb-5'>
          {component}
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
