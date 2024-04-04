import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import './Assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;