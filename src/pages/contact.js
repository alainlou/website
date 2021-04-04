import React from 'react';
import { FaCalendarAlt, FaDev, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from '../components/layout';
import SEO from '../components/SEO';

import * as commonStyles from '../styles/common.module.scss';
import * as contactStyles from './contact.module.scss';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className={contactStyles.block}>
        <OutboundLink className={commonStyles.link} href="mailto:az2lou@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> Feel free to reach out on email! I'm most responsive here.
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink className={commonStyles.link} href="https://linkedin.com/in/alainlou" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> Connect with me on LinkedIn for job/professional things.
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink className={commonStyles.link} href="https://calendly.com/alainlou" target="_blank" rel="noopener noreferrer">
          <FaCalendarAlt /> You can book a coffee chat with me on Calendly.
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink className={commonStyles.link} href="https://github.com/alainlou" target="_blank" rel="noopener noreferrer">
          <FaGithub /> I put the source code of my personal projects on Github.
        </OutboundLink>
      </div>
      <div className={contactStyles.block}>
        <OutboundLink className={commonStyles.link} href="https://devpost.com/alainlou" target="_blank" rel="noopener noreferrer">
          <FaDev /> I also write about my hackathon projects on Devpost.
        </OutboundLink>
      </div>
    </Layout>
  );
};

export default ContactPage;
