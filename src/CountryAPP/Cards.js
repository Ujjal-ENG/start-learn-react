import React from 'react';

import uuid4 from 'uuid4';
import Card from './Card';

const Cards = ({ datas }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  xl:grid-cols-4 justify-items-center">
            {datas &&
                datas.map((data) => {
                    const countryNew = { data, id: uuid4() };
                    return <Card {...countryNew} key={countryNew.id} />;
                })}
        </section>
    );
};

export default Cards;
