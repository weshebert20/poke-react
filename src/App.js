import React from 'react';
import {Component} from 'react';
import "./App.css";
import PokeCard from './components/Cards/pokemon-card';

function searchingFor(term) {
    return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

function searchingWeakness(weaknesses) {
    return function(x) {
        return x.weaknesses.map(weakValue => {
            return weakValue.toLowerCase().includes(weakValue.toLowerCase()) || !weaknesses;
        })
    }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pokemons : [],
        term : '',
        weaknesses: '',
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.searchHandlerWeak = this.searchHandlerWeak.bind(this);
  }
  searchHandler(event) {
    this.setState({term: event.target.value})
  }

    searchHandlerWeak(event) {
        this.setState({weaknesses: event.target.value})
    }
  componentDidMount() {
    let url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
    fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({pokemons : data.pokemon}, () => {})
          }
        })
        .catch(console.log)
  }

  render() {
    const {pokemons, term, weaknesses} = this.state;

    const renderedPokemonList = pokemons.filter(searchingFor(term)).map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} />);
    });

    const renderedweaknessList = pokemons.filter(searchingWeakness(weaknesses)).map((pokemon, index) => {
        return (<PokeCard pokemon={pokemon} />);
    })

    return (
        <div>
        <form>
            <input type="text"
                onChange={this.searchHandler}
            />
            <label>
                Weakness:
                <select onChange={this.searchHandlerWeak}>
                    <option value="fire">Fire</option>
                    <option value="ice">Ice</option>
                    <option value="flying">Coconut</option>
                    <option value="Psychic">Psychic</option>
                </select>
            </label>
        </form>

        <div className="container">
            <div className="card-columns">
                {renderedPokemonList}
                {renderedweaknessList}
            </div>
        </div>
        </div>
    );
  }
}

export default App;
