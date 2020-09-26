import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import content from '../../content/get-started.yaml';

export default () => (
  <section id="get-started">
    <div className="row">
      <div className="twelve columns">
        <div className="hero-text">
          <h1 className="responsive-headline">{content.headline}</h1>
        </div>
        <div className="flex-center downloads">
          <div className="flex-center horizontal">
            <a
              href={content.button1.to}
              className="button full-width"
              style={{ margin: '10px' }}
              download
            >
              <FontAwesomeIcon icon={faFilePdf} size="lg" />
              {` ${content.button1.label} `}
            </a>
          </div>
          <div className="flex-center horizontal">
            <a
              className="button full-width"
              href={content.button2.to}
              style={{ margin: '10px' }}
              download
            >
              <FontAwesomeIcon icon={faFilePdf} size="lg" />
              {` ${content.button2.label} `}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
