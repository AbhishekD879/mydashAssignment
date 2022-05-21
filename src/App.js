
import './App.css';
import { HomePageLeft } from './Components/HomepageLeft/HomepageLeft';
import HomePageRight from './Components/HomepageRight/HomePageRight';
import Homepage from './PagesLayout/Homepage';
import Chart from './PagesLayout/Chart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
  <BrowserRouter basename='/mydashAssignment'>
    <Routes>
      <Route exact path="/" element={<Homepage homepageRight={<HomePageLeft/>} homepageLeft={<HomePageRight/>} />}/>
      <Route path="/chart" element={<Chart/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
