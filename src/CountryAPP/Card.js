import React from 'react';

const Card = ({ data, removeData }) => {
    const {
        name: { common },
        flags: { png: countryFlag },
        capital,
        population,
        area
    } = data;
    const removeItem = (name) => {
        removeData(name);
    };
    return (
        <div>
            <div className="p-10 space-y-3">
                <img src={countryFlag} alt={common} className="w-[300px] h-[250px] hover:scale-110 transition-all" />

                <h1 className="text-2xl font-bold ">Name: {common}</h1>
                <h1 className="text-2xl font-bold ">Capital: {capital}</h1>
                <h3 className="text-xl font-bold">Population: {population}</h3>
                <h3 className="text-xl font-bold">Area: {area}</h3>

                <button
                    type="button"
                    className="px-5 py-2 rounded-md bg-violet-600 text-white font-bold text-xl active:px-4 active:py-1"
                    onClick={() => {
                        removeItem(common);
                    }}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Card;
