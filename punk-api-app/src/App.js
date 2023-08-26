import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Punk API Beers</h1>
        <input
          type="text"
          placeholder="Search by beer name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </header>
      <div className="card-container">
        {filteredBeers.map(beer => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
