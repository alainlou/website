import React from "react"
import {
  FaCalendarAlt,
  FaDev,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import * as commonStyles from "../styles/common.module.scss"
import * as contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className={contactStyles.block}>
        <OutboundLink
          className={commonStyles.link}
          href="mailto:alainzlou@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> Email (best way)
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink
          className={commonStyles.link}
          href="https://linkedin.com/in/alainlou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink
          className={commonStyles.link}
          href="https://github.com/alainlou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink
          className={commonStyles.link}
          href="https://www.youtube.com/@alainzlou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube /> YouTube
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink
          className={commonStyles.link}
          href="https://devpost.com/alainlou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDev /> Devpost
        </OutboundLink>
      </div>
    </Layout>
  )
}

export default ContactPage
