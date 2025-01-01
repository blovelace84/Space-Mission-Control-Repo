import React from 'react';
import MissionControl from './MissionControl';
import missionsData from './missions.json'; // Adjust the path as needed
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Space Mission Control</h1>
      </header>
      <main>
        {/* Pass the mission data to MissionControl */}
        <MissionControl missionsData={missionsData} />
      </main>
      <footer>
        <p>© 2024 Space Exploration Program</p>
      </footer>
    </div>
  );
};

export default App;

