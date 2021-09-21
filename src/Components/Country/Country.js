import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const { name, flag, capital, region, area } = props.country
    return (
        <div className='country'>
            <h1>Name: {name}</h1>
            <img src={flag} alt="" />
            <h3>Capital: {capital}</h3>
            <h4>Region: {region} </h4>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;