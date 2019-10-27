import React from 'react';
import Img from 'gatsby-image';

import commonStyles from '../styles/common.module.scss';
import cardStyles from './card.module.scss';

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

const Card = ({title, fluid, url, content}) => {
    return (   
        <article className={cardStyles.card}>
            <a className={commonStyles.plain} href={url} target="_blank" rel="noopener noreferrer">
                <Img className={cardStyles.cardHeader} fluid={fluid}/>
                <CardBody title={title} content={content}/>
            </a>
        </article>
    );
};

export default Card;