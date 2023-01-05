import logo from './logo.svg';
import './App.css';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
