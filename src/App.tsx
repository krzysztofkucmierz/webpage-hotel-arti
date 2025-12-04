import { useState } from 'react';
import WidgetScript from './components/WidgetScript';
import './App.css';

function App() {
  const [fontStyle, setFontStyle] = useState<'playfair' | 'cormorant'>(
    'playfair'
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleFont = () => {
    setFontStyle((prev) => (prev === 'playfair' ? 'cormorant' : 'playfair'));
  };

  return (
    <div className={`landing-page font-${fontStyle}`}>
      <div className="hero-image">
        <img
          src="/algarve-hotel.jpg"
          alt="Algarve Hotel"
          className="background-image"
        />
      </div>

      <header className="header">
        <div className="logo-container">
          <img src="/hotel-logo.png" alt="Hotel Logo" className="logo" />
        </div>

        <nav className="menu">
          <div className="menu-item">Get In Touch</div>
          <div className="menu-item">Book A Room</div>
          <div className="menu-item">Gift Vouchers</div>
        </nav>
      </header>

      <div className="content">
        <h1 className="headline">
          Experience Five-Star Comfort in sunny Algarve Resort
        </h1>
        <h2 className="headline">Exotic nature and delicious food</h2>
      </div>

      {/* <button className="font-toggle" onClick={toggleFont}>
        Switch Font
      </button> */}
      <WidgetScript />
    </div>
  );
}

export default App;
