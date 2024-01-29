  import React from 'react'; // Import React
  import FAQAccordion from './components/FAQAccordion.jsx';
  import Weather from './components/Weather.jsx'; // Import the Weather component
  import logo from './logo.svg'; // Import the logo (adjust the path as necessary)
  import './App.css';

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Chase',
    lastName: 'Coles'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  function App() {
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
            whatssup, Chase Coles!
          </a>
        </header>
        <body>
          <div style={{ border: '2px', borderColor: 'black', margin: '3px'}}>
            <div style={{ alignContent: 'center'}}>
              <Weather /> {/* Correctly using the Weather component */}
            </div>
          
          </div>
          
          {/* FAQ Accordion Component */}
          <div style={{ padding: '20px' }}>
            <FAQAccordion />

          </div>
        </body>
        
      </div> 
    );
  }

  export default App; // Export the App component
