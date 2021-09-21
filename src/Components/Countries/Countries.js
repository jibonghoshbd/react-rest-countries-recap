import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countires, setCoutries] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(res => res.json())
            .then(data => setCoutries(data))
    }, [])
    return (
        <div>
            <h1>Traveling The Word!!!!!!!</h1>
            <h3>Avialable Countries: {countires.length}</h3>
            <div className='countries-container'>
                {
                    countires.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;