
import './App.css';
import {Routes, Route} from 'react-router-dom'
import MovieList from "./components/MovieList"
import MovieDetails from "./components/MovieDetails";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
<Navbar />
      <Routes>
        <Route path="/" element={<MovieList />}/>
        <Route path="/movie/:id" element={<MovieDetails />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
  <Footer/>


    </div>
  );
}

export default App;
