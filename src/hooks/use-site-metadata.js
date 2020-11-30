import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            keywords
            siteUrl
            sections
            favicon
            logo
            menuItems {
              path
              label
            }
            social {
              service
              url
              fa
            }
            footer {
              text
              logo
            }
            address {
              line1
              line2
              line3
            }
            contacts {
              text
              url
            }
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};
