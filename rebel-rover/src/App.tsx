import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./Pages/AboutUs";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import Home from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Profile } from "./Pages/Profile";
import { Packages } from "./Pages/Packages";
import "./App.css";
import { Signup } from "./Pages/SignUp";
import { Login } from "./Pages/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about_us" Component={AboutUs} />
        <Route path="/packages" Component={Packages} />
        <Route path="/contact" Component={Contact} />
        <Route path="/blog/:id" Component={Blog} />
        <Route path="/profile/:username" Component={Profile} />
        <Route path="/SignUp" Component={Signup}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/profile" Component={Profile}></Route>
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
