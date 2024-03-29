import './App.scss';
import 'animate.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Login from './views/Login';
import Translate from './views/Translate';
import Profile from './views/Profile';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
