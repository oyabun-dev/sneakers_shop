import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
import Home from './routes/Home';
import Collections from './routes/Collections';
import About from './routes/About';
import Contact from './routes/Contact';
import Dashboard from './routes/Dashboard';
import Cart from './routes/Cart';
import Men from './routes/Men';
import Women from './routes/Women';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import PageNotFound from './routes/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/women" element={<Women />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
