import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="landing-page">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
