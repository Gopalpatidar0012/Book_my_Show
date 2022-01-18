
import './App.css';
import { Cardslider } from './Components/Cardslider';
import Footer  from './Components/Footer';
import Header  from './Components/Header/Header';
import { Premiers } from './Components/Premiers';
import Slider from './Components/Sliderimages/Slider';
//import { AllMovies } from './Components/AllMovies';
import FetchAllMovies from "./Components/FetchAllMovies"
// import { SingleMovie } from './Components/SingleMovie';
import { FetchSingleMovie } from './Components/FetchSingleMovie';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { Registration } from './Components/Registration';

function App() {
  return (
    <Router>
         <div>
         <Header/>
         <Routes>
         
          <Route  path="/" element={ <Cardslider/>}> 
          </Route>
          <Route  path="/" element={ <Premiers/> }>  
          </Route>
          <Route path="/" element={<Slider/> }>  
          </Route>
          {/* <Route exact path="/movies" element={<AllMovies/>}> */}
          <Route exact path="/movies" element={<FetchAllMovies/>}>
         </Route>
          <Route exact path="/movie/:movid" element={<FetchSingleMovie/>}>
         </Route>
         <Route exact path="/registred" element={<Registration/>}>
         </Route>
        </Routes>
        <Footer/>
           </div>
    </Router>

  );
}

export default App;
