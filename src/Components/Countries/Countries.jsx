import React, { use, useState } from 'react';
import './Countries.css';
import Country from './Country/Country';


const Countries = ({countriesFetch}) => {

    const[visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesFetch);

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountries = (country) => {
        console.log('Countries visited clicked to be added', country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
        }
    
    return (
        <div >
            <h1>Travelling Countries {countries.length}</h1>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <div className='visitedflag-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src = {flag}></img>) 
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca2} >{country.name.common}</li>)
                }
            </ol>
            <div className='Countries'>
                {
                countries.map(country=> <Country 
                    key={country.cca3}
                    handleVisitedCountries = {handleVisitedCountries} 
                    handleVisitedFlag = {handleVisitedFlag}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;