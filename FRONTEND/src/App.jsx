import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Analyze from './components/Analyze';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Upload from './components/Upload';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-browncoffee'} min-h-screen text-white`}>
      <Nav setIsSignInOpen={setIsSignInOpen} toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <Features />
      <About />
      <Analyze />
      <Stats />
      <HowItWorks />
      <Upload />
      <Contact />
      <FAQ />
      <Footer />
      <SignInModal
        isOpen={isSignInOpen}
        setIsOpen={setIsSignInOpen}
        openSignUp={() => {
          setIsSignInOpen(false);
          setIsSignUpOpen(true);
        }}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        setIsOpen={setIsSignUpOpen}
        openSignIn={() => {
          setIsSignUpOpen(false);
          setIsSignInOpen(true);
        }}
      />
    </div>
  );
}

export default App;