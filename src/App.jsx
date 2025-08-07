import React from 'react';
import talents from './data/talents';
import TalentCard from './components/TalentCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>תצוגת כישרונות</h1>
      <div className="talent-list">
        {talents.map(talent => (
          <TalentCard key={talent.id} talent={talent} />
        ))}
      </div>
    </div>
  );
}

export default App;
