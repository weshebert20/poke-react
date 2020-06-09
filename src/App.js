import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import Header from  "./Header";
import PokemonCard from  "./components/Cards/PokemonCard";
import SearchField from "./components/Search/Search";
import WeaknessesFilter from "./components/Filter/weaknessess";
import TypeFilter from "./components/Filter/type";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const POKEMON_LIST_URL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            displayedPokemons: [],
            query: "",
            weaknessFilter: "",
            heightFilter: ""
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
        let query = event.target.value;

        let displayedPokemons = this.state.pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase()) || pokemon.type.join().toLowerCase().includes(query.toLowerCase())
        );

        this.setState({
            displayedPokemons: displayedPokemons
        })
    }

    filterByWeakness(event) {
        let weaknessFilter = event.target.value;
        this.setState({
            weaknessFilter: weaknessFilter
        });

        if (weaknessFilter === 0) {
            this.setState({
                displayedPokemons: this.state.pokemons
            })
        } else {
            let displayedPokemons = this.state.pokemons.filter(pokemon =>
                pokemon.weaknesses.join().toLowerCase().includes(weaknessFilter.toLowerCase())
            );

            this.setState({
                displayedPokemons: displayedPokemons
            });

        }
    }

    filterByType(event) {

        let types = event.target.value;
        this.setState({
            heightFilter: types
        });

        if (types === 0) {
            this.setState({
                displayedPokemons: this.state.pokemons
            })
        } else {
            let displayedPokemons = this.state.pokemons.filter(pokemon =>
                pokemon.type.join().toLowerCase().includes(types.toLowerCase())
            );
            this.setState({
                displayedPokemons: displayedPokemons
            });
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
                        <WeaknessesFilter onChange={this.filterByWeakness.bind(this)} value={this.state.weaknessFilter}/>
                        <TypeFilter onChange={this.filterByType.bind(this)} value={this.state.heightFilter}/>
                    </Toolbar>
                </AppBar>
                <main>
                    <Toolbar />
                        <Grid container spacing={2} justify="space-evenly" style={{paddingTop:'2%'}}>
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
