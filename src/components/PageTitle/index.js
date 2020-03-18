import React from 'react';
import PropTypes from 'prop-types';

import PageTitleImage from '~/assets/pauleira-guitars-page-title-image.jpg';
import { ContainerWrapper, Container, Title, Overlay, BgImage } from './styles';

export default function PageTitle({ children, image }) {
  return (
    <>
      <ContainerWrapper>
        <Container>
          <Title>{children}</Title>
        </Container>
        <Overlay />
        <BgImage src={image} alt="Pauleira Guitars Top header background" />
      </ContainerWrapper>
    </>
  );
}

PageTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string]).isRequired,
  image: PropTypes.element,
};

PageTitle.defaultProps = {
  image: PageTitleImage,
};
