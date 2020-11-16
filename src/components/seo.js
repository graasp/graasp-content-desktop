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
    metaImage,
  } = useSiteMetadata();
  const image = `${siteUrl}/images/feature-image-3.png`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords.join(','),
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: siteUrl,
        },
        {
          name: 'twitter:creator',
          content: authorName,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:image:width',
          content: metaImage.width,
        },
        {
          property: 'og:image:height',
          content: metaImage.height,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]}
    />
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
