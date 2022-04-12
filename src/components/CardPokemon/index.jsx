import './style.css'

import functions from '../../Functions/functions'


export default function CardPokemon({pokemon, setPokemonAtivo }){
    return <div className='pokemon'>
        <figure>
            <img src={pokemon.sprites.other[`official-artwork`].front_default} alt={pokemon.name} />
        </figure>
        <p>#{functions.tresNuns(pokemon.id)}</p>
        <h3>{functions.captalize(pokemon.name)}</h3>
        <button onClick={()=>setPokemonAtivo({ativo:true, pokemon})}>Mais informações</button>

    </div>
}