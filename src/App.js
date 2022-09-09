import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import IsTriangle from "./components/IsTriangle";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/Hypotenuse";
import Area from "./components/Area";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<IsTriangle />} />
        <Route path="/isTriangle" element={<IsTriangle />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/hypotenuse" element={<Hypotenuse />} />
        <Route path="/area" element={<Area />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
