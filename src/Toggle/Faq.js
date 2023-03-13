import React from 'react';
import Toggle from './Toggle';

const Faq = () => {
    const datas = [{ quesationg1: 'How can we reach you>' }, { quesationg1: 'How can we reach you>' }, { quesationg1: 'How can we reach you>' }, { quesationg1: 'How can we reach you>' }];
    return (
        <div>
            {datas.map((el, i) => (
                <Toggle data={el.quesationg1} key={i} />
            ))}
        </div>
    );
};

export default Faq;
