import React from 'react';

import cardStyles from './card.module.scss';

const CardHeader = ({imgSrc}) => {
    return (
        <header className={cardStyles.cardHeader} style={{backgroundImage: 'url(' + imgSrc + ')'}}/>
    );
};

const CardBody = ({title, content, url}) => {
    return (
        <div className={cardStyles.cardBody}>
            <h3>
                <a className={cardStyles.plain} href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </h3>
            <p className={cardStyles.bodyContent}>
                {content}
            </p>
        </div>
    );
};

const Card = ({title, imgSrc, url, content}) => {
    console.log(imgSrc);
    return (
        <article className={cardStyles.card}>
            <CardHeader imgSrc={imgSrc}/>
            <CardBody title={title} content={content} url={url}/>
        </article>
    );
};

export default Card;