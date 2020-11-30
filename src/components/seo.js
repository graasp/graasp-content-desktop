import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const Seo = ({ lang }) => {
  const {
    description,
    keywords,
    siteUrl,
    title,
    author: { name: authorName },
  } = useSiteMetadata();
  const image = `${siteUrl}/images/feature-image-3.png`;

  return (
    <Helmet>
      <meta property="fb:app_id" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content="" />
      <meta name="twitter:image:src" content={image} />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={authorName} />
      <title>{title}</title>
      <html lang={lang} />
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: 'en',
};

Seo.propTypes = {
  lang: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
};

export default Seo;
