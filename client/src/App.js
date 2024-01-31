import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Explore from './pages/Explore';
import PortfolioState from './context/PortfolioState';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ViewPortfolioPdf from './pages/ViewPortfolioPdf';

function App() {
  return (
    <>
      <PortfolioState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/ViewPortfolioPdf/:id" element={<ViewPortfolioPdf/>} />
          </Routes>
        </BrowserRouter>
      </PortfolioState>
    </>
  );
}

export default App;
