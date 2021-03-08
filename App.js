
import './App.css';
import Headers from './components/Headers';
import CardResult from './components/CardResult';
import NavMenu from './components/NavMenu';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import FooterPage from './components/FooterPage';




function App() {
      return (
  <div className="App">
    <NavMenu />
    <Headers />
    <Slider />
    <AboutUs />
    <CardResult />
    <FooterPage />
    </div>
  );
}

export default App;
