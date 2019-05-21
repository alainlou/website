import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/SEO';

import contactStyles from './contact.module.scss';

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact"/>
            <div className={contactStyles.block}>
                <a className={contactStyles.link} href="mailto:azlou@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope /> Feel free to reach out on email! I'm most responsive here.
                </a>
            </div>
            <div className={contactStyles.block}>
                <a className={contactStyles.link} href="https://github.com/alainlou" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> I put the source code of my personal projects on Github.
                </a>
            </div>
            <div className={contactStyles.block}>
                <a className={contactStyles.link} href="https://linkedin.com/in/alainlou">
                    <FaLinkedin /> Connect with me on LinkedIn for job/professional things.
                </a>
            </div>
        </Layout>
    );
};

export default ContactPage;