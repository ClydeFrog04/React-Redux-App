import React from "react";
import {connect} from "react-redux";

const SpeciesSection = (props) =>{
    if(props.isFetching){
        return <h2>Loading...</h2>;
    }

    return(
        <div className="speciesSection">
            <p className="subtitle">Pokemon no. {props.currentSpecies.id.toString().padStart(3, '0')}</p>
            <p className="subtitle">{props.currentSpecies.genera[7].genus}</p>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesSection);



/*return (
        <div className="speciesSection">
            <CardSubtitle>Pokemon no. {props.speciesData.id.toString().padStart(3, '0')}</CardSubtitle>
            <CardSubtitle>{props.speciesData.genera[2].genus}</CardSubtitle>
        </div>
    );
};
 */
