import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function Meta({ data, image }) {
  const {
    title,
    description,
    tags,
    contentType,
    author,
    articleSection,
    articleTags,
    publishedTime,
    pageUrl,
  } = data;

  return (
    <Helmet>
      {process.env.REACT_APP_MY_ENV !== 'production' && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="tags" content={tags} />
      <meta name="canonical" content={pageUrl} />
      {/* <!-- OG TAGS --> */}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={contentType} />
      {contentType === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={articleSection} />
          <meta property="article:tag" content={articleTags} />
          <meta property="article:published_time" content={publishedTime} />
        </>
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`${process.env.REACT_APP_URL}${pageUrl}`}
      />
      <meta property="og:site_name" content="Pauleira Guitars" />
      <meta
        property={
          process.env.REACT_APP_MY_ENV === 'production'
            ? 'og:image:secure'
            : 'og:image'
        }
        content={`${process.env.REACT_APP_URL}${image}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

Meta.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    pageUrl: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired,
    author: PropTypes.string,
    articleSection: PropTypes.string,
    articleTags: PropTypes.string,
    publishedTime: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

export default Meta;
