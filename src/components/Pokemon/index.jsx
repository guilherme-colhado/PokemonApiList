import './style.css'
import functions from '../../Functions/functions'

export default function PokemonData({pokemon, setPokemonAtivo}){
    const typesPortuguese = {
        grass: 'Grama',
        fire: 'Fogo',
        water: 'Agua',
        bug: 'Inseto',
        normal: 'Normal',
        poison: 'Veneno',
        flying: 'Voador',
        dragon: 'Dragão',
        electric: 'Eletrico',
        ground: 'Terra',
        fairy: 'Fada',
        dark: 'Escuridão',
        ghost: 'Fantasma',
        psychic: 'Psiquico',
        fighting: 'Lutador',
        steel: 'Metal',
        rock: 'Pedra'
    }
    return <div className={`pokemonAtivo ${pokemon.types[0].type.name}Container`}>
        <h2>{functions.captalize(pokemon.name)}</h2>                
        <figure>
            <img src={pokemon.sprites.other[`official-artwork`].front_default} alt={pokemon.name} />
        </figure>
        <p>Index: {functions.tresNuns(pokemon.id)}</p>
        <section className='types'>{
            pokemon.types.map((type, index)=><div key={index} className={type.type.name}>
                <h4>{typesPortuguese[type.type.name]}</h4>
            </div>)
        }</section>
        <button onClick={()=>setPokemonAtivo({ativo:false, pokemon:{}})}>Voltar para Pokedex</button>
    </div>
}