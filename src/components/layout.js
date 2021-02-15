import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useSiteMetadata } from '../hooks/use-site-metadata';

import Header from './header';
import Footer from './footer';

import '../styles/default.css';
import '../styles/layout.css';
import '../styles/media-queries.css';
import '../styles/animate.css';
import '../styles/prettyPhoto.css';

import 'typeface-open-sans';
import 'typeface-montserrat';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

function Layout({ children }) {
  const { title, description, author, favicon } = useSiteMetadata();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author.name} />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <link rel="shortcut icon" href={`/${favicon}`} type="image/png" />
      </Helmet>

      <Header />

      <main id="top">{children}</main>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="gatsby-gdpr-google-analytics"
        buttonStyle={{ background: '#fafafa', fontSize: '13px' }}
        onAccept={() => {
          initializeAndTrack(location);
        }}
        sameSite="lax"
      >
        We use cookies and other tracking technologies to improve your browsing
        experience on our website, to analyze our website traffic, and to
        understand where our visitors are coming from. By browsing our website,
        you consent to our use of cookies and other tracking technologies.
      </CookieConsent>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
