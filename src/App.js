import './App.css';
import './Global.css';
import { useState } from 'react';
import PokemonData from './components/Pokemon';
import Pokedex from './components/Pokedex';

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [info, setInfo] = useState([])
  const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon/?limit=18 ')
  const [pokemonAtivo, setPokemonAtivo] = useState({ativo:false, pokemon:{}})
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokédex</h1>        
      </header>
      {pokemonAtivo.ativo ? <PokemonData pokemon={pokemonAtivo.pokemon} setPokemonAtivo={setPokemonAtivo}/> : <Pokedex pokemons={pokemons} setPokemons={setPokemons} info={info} setInfo={setInfo} page={page} setPage={setPage} setPokemonAtivo={setPokemonAtivo}/>}
    </div>
  );
}
