import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Solution from './components/Solution/Solution.jsx';
import Audience from './components/Audience/Audience.jsx';
import PhoneStrip from './components/PhoneStrip/PhoneStrip.jsx';
import Features from './components/Features/Features.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="landing-page">
        <Hero />
        <Solution />
        <Audience />
        <PhoneStrip />
        <Features />
        <Gallery />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
