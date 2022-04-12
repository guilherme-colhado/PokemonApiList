import './style.css'
import { useEffect } from 'react';
import CardPokemon from '../CardPokemon';

export default function Pokedex({pokemons, setPokemons, info, setInfo, page, setPage, setPokemonAtivo}){
    useEffect(()=>{fetch(page)
        .then( (response) => response.json())
        .then( (response) => {
          setPokemons([])
          const results = response.results
          results.map(poke => fetch(poke.url).then(res=>res.json()).then(res=>setPokemons(previous=>[...previous,{url:poke.url,...res}])))
          setInfo({next : response.next, previous : response.previous})
        })
        .catch(err => console.log(err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [page])
    
      const proximaPagina = () => setPage(info.next)
      
      const paginaAnterior = () => setPage(info.previous)

    return <div className='pokedex'>
        <div className='pokemons'>
            {pokemons.sort((a,b)=>a.id - b.id).map(pokemon => <CardPokemon key={pokemon.id} pokemon={pokemon} setPokemonAtivo={setPokemonAtivo}/>)}
        </div>
        {info.previous && <button onClick={paginaAnterior}>Anterior</button>}
        {info.next && <button onClick={proximaPagina}>Proximo</button>}
    </div>
}