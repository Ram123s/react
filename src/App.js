
import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Landing_page_3 from './components/Landing_page_3';
import Landing_page_4 from './components/Landing_page_4';
import Landingpage from './components/Landingpage';
import TVSection from './components/TVSection';

function App() {
  return (
    <div>
      <Header/>
      <Home/> 
      <TVSection/>
      <Landingpage/>
      <Landing_page_3 />
      <Landing_page_4/>
      <Faq/>
      <Footer/>
    </div>
    
  );
}

export default App;
