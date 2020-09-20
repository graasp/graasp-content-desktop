import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  // faMapMarkerAlt,
  faUsers,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export default () => {
  const {
    social,
    footer,
    // address,
    contacts,
  } = useSiteMetadata();
  return (
    <footer>
      <div className="row">
        <div className="six columns info">
          <div className="footer-logo">
            <AnchorLink to="/">
              <h2>Graasp Desktop</h2>
            </AnchorLink>
          </div>

          <p>{footer.text}</p>
        </div>

        <div className="six columns right-cols">
          <div className="row">
            {/* <div className="columns"> */}
            {/*   <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
            {/*   <h3 className="address">Come Visit</h3> */}
            {/*   <p> */}
            {/*     {address.line1} */}
            {/*     <br />  */}
            {/*     {address.line2} */}
            {/*     <br />  */}
            {/*     {address.line3} */}
            {/*   </p>  */}
            {/* </div>  */}

            <div className="columns">
              <FontAwesomeIcon icon={faUsers} />
              <h3 className="social">socialize</h3>
              <ul>
                {social.map((mySocial) => (
                  <li>
                    <a href={mySocial.url}>{mySocial.service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="columns last">
              <FontAwesomeIcon icon={faEnvelope} />
              <h3 className="contact">Contact Us</h3>
              <ul>
                {contacts.map((contact) => (
                  <li>
                    <a href={contact.url}>{contact.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="copyright">
          &copy; Graasp 2014-
          {`${new Date().getFullYear()} | `}
          <a
            title="Terms of Service"
            href="https://graasp.eu/views/terms_page.client.html"
          >
            Terms of Service
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          </a>
          {' | '}
          <a
            href="https://graasp.eu/views/privacy_policy.client.html"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
        </p>

        <div id="go-top">
          <button
            type="button"
            title="Back to Top"
            onClick={() => scrollTo('#top')}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </div>
    </footer>
  );
};
