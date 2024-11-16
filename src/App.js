// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Main from './Components/Main.jsx';
import Nav from './Components/Nav.jsx';
import Enroll from './Components/Sub-Components/Enroll.jsx';
import Feature from './Components/Sub-Components/Features.jsx';
import Services from './Components/Sub-Components/Services.jsx';
import Assistence from './Components/Sub-Components/Assistance.jsx';
import Faq from './Components/Sub-Components/Faq.jsx';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <Main />
      <Enroll />
      <Feature />
      <Services />
      <Assistence />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
