import React from 'react';

import cardStyles from './card.module.scss';

const CardHeader = ({imgSrc}) => {
    return (
        <header className={cardStyles.cardHeader} style={{backgroundImage: 'url(' + imgSrc + ') '}}/>
    );
};

const CardBody = ({title, content}) => {
    return (
        <div className={cardStyles.cardBody}>
            <h3>{title}</h3>
            <p className={cardStyles.bodyContent}>
                {content}
            </p>
        </div>
    );
};

const Card = ({imgSrc, title, content}) => {
    return (
        <article className={cardStyles.card}>
            <CardHeader imgSrc={imgSrc}/>
            <CardBody title={title} content={content}/>
        </article>
    );
};

export default Card;