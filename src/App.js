import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import Header from  "./Header";
import PokemonCard from  "./components/Cards/PokemonCard";
import SearchField from "./components/Search/Search";
import WeaknessesFilter from "./components/Filter/Weaknessess";
import TypeFilter from "./components/Filter/Type";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {types} from "@babel/core";



const POKEMON_LIST_URL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            displayedPokemons: [],
            query: "",
            weaknessFilter: "",
            typesFilter: ""
        };
    }

    componentDidMount() {
        fetch(POKEMON_LIST_URL).then((response) => {
            response.json().then((data) => {
                this.setState({
                    pokemons: data.pokemon,
                    displayedPokemons: data.pokemon
                })
            });
        });
    }

    handleSearch(event) {
        console.log(event);
        let query = event.target.value;

        let displayedPokemons = this.state.pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase()) || pokemon.type.join().toLowerCase().includes(query.toLowerCase())
        );

        this.setState({
            displayedPokemons: displayedPokemons
        })
    }

    filterAll(event) {

        let weak = 0;
        let typeOf = 0;
        let displayedPokemons
        if (event.target.name === "type-filter") {
            typeOf = event.target.value;
            this.setState({
                typesFilter: typeOf
            })
        }
        if (event.target.name === "weakness-filter") {
            weak = event.target.value;
            this.setState({
                weaknessFilter: weak
            })
        }
        if (event) {
            if (typeOf === 0 || weak === 0) {
                this.setState({
                    displayedPokemons: this.state.pokemons
                })
            }
            if (typeOf !== 0 ) {
                displayedPokemons = this.state.displayedPokemons.filter(pokemon =>
                    pokemon.type.join().toLowerCase().includes(typeOf.toLowerCase())
                );
                this.setState({
                    displayedPokemons: displayedPokemons
                });
            } else if (weak !== 0) {
                displayedPokemons= this.state.displayedPokemons.filter(pokemon =>
                    pokemon.weaknesses.join().toLowerCase().includes(weak.toLowerCase()) && pokemon.type.join().toLowerCase().includes(this.state.typesFilter.toLowerCase())
            );
                this.setState({
                    displayedPokemons: displayedPokemons
                });
            }

        }

    }


    render() {
        const { displayedPokemons } = this.state;
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography fontWeight="fontWeightBold" letterSpacing={15} variant="h5" noWrap style={{width: '50%'}}>
                            POKEMON SEARCH
                        </Typography>
                        <SearchField onChange={this.handleSearch.bind(this)} value={this.state.query}/>
                        <TypeFilter onChange={this.filterAll.bind(this)} value={this.state.typesFilter}/>
                        <WeaknessesFilter onChange={this.filterAll.bind(this)} value={this.state.weaknessFilter} />
                    </Toolbar>
                </AppBar>
                <main>
                    <Toolbar />
                    <Grid  container spacing={2} justify="space-evenly" style={{paddingTop:'2%'}}>
                        {displayedPokemons.map(pokemon =>
                            <Grid key={pokemon.id} item xs={2}>
                                <PokemonCard name={pokemon.name} img={pokemon.img} weaknesses={pokemon.weaknesses} type={pokemon.type}/>
                            </Grid>
                        )}
                        <div style={{content: "", flex: 'auto'}} />
                    </Grid>
                </main>
            </div>
        );
    }
}
export default App;
