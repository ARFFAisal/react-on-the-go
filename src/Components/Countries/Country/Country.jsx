import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false);
    

    const handleclicked = () =>{
        if(visited===true){
            setVisited(false);
        }
        else{
            setVisited(true);
        }
        handleVisitedCountries(country);
    }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name:{country.name.common}</h3>
            <img src={country.flags.png}></img>
            <h3>Population: {country.population}</h3>
            <h3>Continents: {country.continents}</h3>
            <button onClick={handleclicked}>{
                visited ? 'Visited' : 'Not Visited'
                }</button>
                <button onClick={() => handleVisitedFlag(country.flags.png)}>add visited Flag</button>
        </div>
    );
};

export default Country;