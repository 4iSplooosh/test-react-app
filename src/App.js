import React, { useState, useEffect } from 'react';
import FAQAccordion from './components/FAQAccordion.jsx';
import Weather from './components/Weather.jsx';
import logo from './logo.svg';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle.jsx';


const App = () => {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' || false;
  });

  // State for font size
  const [fontSize, setFontSize] = useState(16);

  // Effect for applying dark mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Functions for adjusting font size
  const increaseFontSize = () => setFontSize(fontSize + 1);
  const decreaseFontSize = () => setFontSize(fontSize - 1);

  // Helper function
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  // User object
  const user = {
    firstName: 'Max',
    lastName: 'Butthole'
  };

  return (
    <div className="App" style={{ fontSize: `${fontSize}px` }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Max Butthole!!
        </a>
        {/* Font size adjuster buttons */}
        <div>
          <button onClick={decreaseFontSize}>A-</button>
          <button onClick={increaseFontSize}>A+</button>
        </div>
      </header>

      <div>
        <h1>Hello, {formatName(user)}!</h1>
      </div>

      <div style={{ border: '2px', borderColor: 'black', margin: '3px' }}>
        <Weather />
      </div>

      <div style={{ padding: '20px' }}>
        <FAQAccordion />
      </div>

      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default App;
