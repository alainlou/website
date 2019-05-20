import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import Layout from '../components/layout';
import contactStyles from './contact.module.scss';

const ContactPage = () => {
    return (
        <Layout>
            <a className={contactStyles.link} href="https://github.com/alainlou" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a className={contactStyles.link} href="mailto:azlou@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
            </a>
            <a className={contactStyles.link} href="https://linkedin.com/in/alainlou">
                <FaLinkedin />
            </a>
        </Layout>
    );
};

export default ContactPage;