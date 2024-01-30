import React, { useState, useEffect } from 'react'; // Import React and hooks
import FAQAccordion from './components/FAQAccordion.jsx';
import Weather from './components/Weather.jsx'; // Import the Weather component
import logo from './logo.svg'; // Import the logo
import './App.css';
import DarkModeToggle from './components/DarkModeToggle.jsx';



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' || false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          whatssup, Max Butthole!
        </a>
      </header>

      <div>
        <h1>Hello, {formatName(user)}!</h1>
      </div>

      <div style={{ border: '2px', borderColor: 'black', margin: '3px' }}>
        <div style={{ alignContent: 'center' }}>
          <Weather />
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <FAQAccordion />
      </div>

      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* You can place the DarkModeToggle wherever it fits in your layout */}
    </div>
  );
};

export default App;
