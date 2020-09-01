import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import content from '../../content/hero.yaml';

export default () => {
  const [macLatestRelease, setMacLatestRelease] = useState('');
  const [winLatestRelease, setWinLatestRelease] = useState('');
  const commonLink =
    'https://github.com/graasp/graasp-desktop/releases/download/v';
  useEffect(() => {
    fetch('https://api.github.com/repos/graasp/graasp-desktop/releases/latest')
      .then((response) => response.json()) // parse JSON from request
      .then((response) => {
        if (response && response.name) {
          const version = response.name;
          const windowsFile = `Graasp-Setup-${version}.exe`;
          const macosFile = `Graasp-${version}.dmg`;
          setWinLatestRelease(`${commonLink}${version}/${windowsFile}`);
          setMacLatestRelease(`${commonLink}${version}/${macosFile}`);
        }
      });
  }, []);

  return (
    <section id="hero">
      <div className="row">
        <div className="twelve columns">
          <div className="hero-text">
            <h1 className="responsive-headline">{content.headline}</h1>
            <p>{content.body}</p>
          </div>

          <div className="flex-center downloads">
            <div className="flex-center horizontal">
              <img
                src={content.windows}
                alt=""
                className="column platform-img"
              />
              <a href={winLatestRelease} className="button full-width">
                <FontAwesomeIcon icon={faArrowAltCircleDown} size="1x" />
                {` ${content.button1.label}`}
              </a>
            </div>
            <div className="flex-center horizontal">
              <img src={content.linux} alt="" className="column platform-img" />
              <a className="button full-width" href={content.button2.to}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} size="1x" />
                {` ${content.button2.label}`}
              </a>
            </div>
            <div className="flex-center horizontal">
              <img src={content.apple} alt="" className="column platform-img" />
              <a className="button full-width" href={macLatestRelease}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} size="1x" />
                {` ${content.button3.label}`}
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={content.image} alt="" className="animated fadeInUpBig" />
        </div>
      </div>
    </section>
  );
};
