import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as commonStyles from "../styles/common.module.scss"
import * as cardStyles from "./card.module.scss"

const CardBody = ({ title, content, credit }) => {
  return (
    <div className={cardStyles.cardBody}>
      <h3>{title}</h3>
      <p className={cardStyles.bodyContent}>{content}</p>
      <p className={cardStyles.tinyText}>{credit}</p>
    </div>
  )
}

const Card = ({ title, fluid, url, content, credit }) => {
  return (
    <article className={cardStyles.card}>
      <a
        className={commonStyles.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyImage alt="" image={fluid} className={cardStyles.cardHeader} />
        <CardBody title={title} content={content} credit={credit} />
      </a>
    </article>
  )
}

export default Card
