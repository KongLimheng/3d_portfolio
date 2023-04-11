import { BrowserRouter as Routers } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

function App() {
  return (
    <Routers>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Routers>
  );
}

export default App;
