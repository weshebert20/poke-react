import React from 'react'

const PokeCard = ({pokemon}) => {

    const types = pokemon.type;
    const listItems = types.map((types) =>
        <li>{types}</li>
    );

    const weakness = pokemon.weaknesses;
    const listWeakness = weakness.map((weakness) =>
        <li>{weakness}</li>
    )

    return (
        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
            <div className="card-header"><b>{pokemon.name}</b></div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Number: {pokemon.num}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Type: {listItems}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Weakness: {listWeakness}</h6>
            </div>
        </div>
    )
};

export default PokeCard
