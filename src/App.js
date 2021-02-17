import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const [input, setInput] = useState("");
  const [cards, setCards] = useState([]);

  let realCards = cards;

  let url = `https://swapi.dev/api/planets/?search=${input}`;

  useEffect(()=>{
    if(input !== ''){
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {

          let planets = data.results;
          realCards = [];
          setCards(realCards);
          planets.forEach(planet => {
            setCards(cards => [...cards, { name: planet.name, population: planet.population, climate: planet.climate, terrain: planet.terrain }])
            
          });
        })
    } else {
      realCards = [];
      setCards(realCards);
    }
  }, [input])

  return (
    <div className="App">
      <header>
        <h1>Star Wars</h1>
        <p>Planet Seacher</p>
      </header>
      <main className="container">
        <section className="search-bar">
          <label className="sr-only" htmlFor="planet">Search</label>
          <input type="text" name="planet" placeholder="Search for a planet" onChange={(e) => setInput(e.target.value)}></input>
        </section>
        <section className="planets-container">
          {cards.map(card => {
            return (
              <div className="card">
                <h2>{card.name}</h2>
                <div className="category">Population: <span>{card.population}</span></div>
                <div className="category">Climate: <span>{card.climate}</span></div>
                <div className="category">Terrain: <span>{card.terrain}</span></div>
              </div>
            )
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
