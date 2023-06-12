
import './App.css';
import {Routes, Route} from 'react-router-dom'
import SneakersList from "./components/SneakersList";
import SneakersDetails from "./components/SneakersDetails";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
<Navbar />
      <Routes>
        <Route path="/" element={<SneakersList />}/>
        <Route path="/sneakers/:id" element={<SneakersDetails />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
  <Footer/>


    </div>
  );
}

export default App;
