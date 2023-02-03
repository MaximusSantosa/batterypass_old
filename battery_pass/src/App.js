import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
    <div className="App">
      <Router basename={"/test"}>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
