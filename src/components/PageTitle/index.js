import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PageTitle({ title, theTitle, subTitle }) {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{theTitle}</h2>
      {subTitle && <h3>{subTitle}</h3>}
    </Container>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  theTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

PageTitle.defaultProps = {
  subTitle: null,
};
