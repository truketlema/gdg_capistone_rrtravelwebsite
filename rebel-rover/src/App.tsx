import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './Pages/AboutUs';
import { Blog } from './Pages/Blog';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Profile } from './Pages/Profile';
import { Packages } from './Pages/Packages';
import { SignUp } from './Pages/SignUp';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
