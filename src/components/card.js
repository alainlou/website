import React from 'react';
import Img from 'gatsby-image';

import cardStyles from './card.module.scss';

const CardBody = ({title, content, url}) => {
    return (
        <div className={cardStyles.cardBody}>
            <h3>{title}</h3>
            <p className={cardStyles.bodyContent}>
                {content}
            </p>
        </div>
    );
};

const Card = ({title, fluid, url, content}) => {
    return (   
        <article className={cardStyles.card}>
            <a className={cardStyles.plain} href={url} target="_blank" rel="noopener noreferrer">
                <Img className={cardStyles.cardHeader} fluid={fluid}/>
                <CardBody title={title} content={content} url={url}/>
            </a>
        </article>
    );
};

export default Card;