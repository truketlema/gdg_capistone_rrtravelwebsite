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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about_us' Component={AboutUs} />
        <Route path='/packages' Component={Packages} />
        <Route path='/contact' Component={Contact} />
        <Route path='/blog/:id' Component={Blog}/>
        <Route path='/profile/:username' Component={Profile}/>
        <Route Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
