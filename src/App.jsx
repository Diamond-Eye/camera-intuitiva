import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Solution from './components/Solution/Solution.jsx';
import Audience from './components/Audience/Audience.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="landing-page">
        <Hero />
        <Solution />
        <Audience />
      </main>
      <Footer />
    </>
  );
}

export default App;
