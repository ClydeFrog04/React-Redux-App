import * as React from "react";
import {connect} from "react-redux";
import {getSpecies} from "../actions";
import {useEffect} from "react";

const SpeciesSectionTSX = (props) =>{
    //useEffect: if currentPokemon && !isFetching => workaround for adding endless amounts of isFetching vars
    /*
    /*
useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${currentPokemonIndex}/`)
            .then(response => {
                setPokemonSpecies(response.data);
            })
            .catch(console.log);
    }, [currentPokemonIndex]);
 */
    if(props.isFetching){
        return <h2>Loading...</h2>;
    }
    useEffect(() =>{
        props.getSpecies();
    }, props.getSpecies);

    return(
        <div className="speciesSection">

        </div>
    );
}

const mapStateToProps = state =>{
    return{
        currentPokemon: state.currentPokemon,
        currentSpecies: state.currentSpecies,
        isFetching: state.isFetching
    }
}

const mapDispatchToProps = {getSpecies};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesSectionTSX);



/*return (
        <div className="speciesSection">
            <CardSubtitle>Pokemon no. {props.speciesData.id.toString().padStart(3, '0')}</CardSubtitle>
            <CardSubtitle>{props.speciesData.genera[2].genus}</CardSubtitle>
        </div>
    );
};
 */
