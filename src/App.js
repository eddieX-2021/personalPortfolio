import Footer from './components/Footer/Footer'
import ContactMe from './components/ContactMe/ContactMe'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Profile />
      <AboutMe />
      <Project />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
