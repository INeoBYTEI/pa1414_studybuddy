// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages and Components
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Create from './pages/Create';
import Navbar from './components/Navbar';
import Deck from './pages/Deck';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Catalog"
              element={<Catalog />}
            />
            <Route
              path="/Create"
              element={<Create />}
            />
            <Route
              path="/Deck/:deckID"
              Component={Deck}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
