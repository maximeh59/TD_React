import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useEffect } from 'react'
//import './App.css'
import superheros from './assets/SuperHerosComplet.json'

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setFilter] = useState('');

  const superherosFiltered = superheros.filter(superhero =>
    superhero.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
    .map(superhero => <li>{superhero.name}</li>);

  const nom = 'Toto';
  const nb_superheros = superheros.length;
  //let superheros_noms = superheros.map(superhero => <li>{superhero.name}</li>);

  useEffect(() => {
    document.title = `Cliqué ${count} fois`
  }, [count])

  return (
    <>
      <div>
        <p>Bonjour {nom}, je découvre React !</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Réinitialiser</button>
        <p>Il y a {nb_superheros} super héro(s) !</p>
        <input onChange={e => {setFilter(e.target.value), console.log(superherosFiltered)}} />
        <ul>{superherosFiltered}</ul>
      </div>
    </>
  )
}

export default App
