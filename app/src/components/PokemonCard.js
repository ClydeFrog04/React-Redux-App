/*
return (
        <div className="pokemonCard">
            <Card body inverse style={{backgroundColor: bgColor, borderColor: "#333"}}>
                <CardTitle>{props.pokemonData.name}</CardTitle>
                <CardImg top width="100%" src={props.pokemonData.sprites.front_default}/>
                <CardSubtitle>Height: {props.pokemonData.height}"</CardSubtitle>
                <CardSubtitle>Weight: {props.pokemonData.weight}lbs</CardSubtitle>
                <SpeciesSection speciesData={props.speciesData}/>
            </Card>
        </div>
    );
 */
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPokemon} from "../actions";
import SpeciesSection from "./SpeciesSection";

export const PokemonCard = ({getPokemon, isFetching, currentPokemon, currentSpecies}) => {

    useEffect(() => {
        getPokemon();
    }, [getPokemon]);

    if (isFetching) return <h2>Loading...</h2>;

    let bgColor;
    switch (currentSpecies.color.name) {
        case "red":
            bgColor = "#bd0e02";
            break;
        case "blue":
            bgColor = "#002897";
            break;
        case "yellow":
            bgColor = "#ffd333";
            break;
        case "white":
            bgColor = "#aaa";
            break;
        default:
            bgColor = currentSpecies.color.name;
    }

    console.log(currentSpecies.color.name);
    return (
        <div className="pokemonCard columns is-centered">
            <div className={`card column is-one-quarter`} style={{backgroundColor: bgColor}}>
                <div className="card-content">
                    <p className="title">{currentPokemon.name}</p>
                    <div className="card-image">
                        <figure className="image is-4by3">{/*todo: check this size is right*/}
                            <img src={currentPokemon.sprites.front_default}
                                 alt={currentPokemon.name}/>{/*todo: use image url from state*/}
                        </figure>
                    </div>
                    <SpeciesSection/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentPokemon: state.currentPokemon,
        isFetching: state.isFetching,
        currentSpecies: state.currentSpecies
    };
}

const mapDispatchToProps = {getPokemon};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);