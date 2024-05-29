import logo from './logo.svg';
import './App.css';
import Announcement from './Components/Header/Announcement';
import Header from './Components/Header/Header';
import LandingPage from './pages/LandingPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Announcement />
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
