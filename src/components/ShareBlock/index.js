import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  LinkedinShareButton,
} from 'react-share';

import Icon from '~/components/Icon';

import { Container } from './styles';

export default function ShareBlock({ media, title, description }) {
  return (
    <Container>
      {/* <button type="button" color={colors.primary}>
        <Icon name="social-link" color="#fff" />
      </button> */}
      <FacebookShareButton
        resetButtonStyle={false}
        url={window.location.href}
        className="btn__facebook"
        quote={description}
      >
        <Icon name="social-facebook-thin" color="#fff" />
      </FacebookShareButton>
      <TwitterShareButton
        resetButtonStyle={false}
        url={window.location.href}
        className="btn__twitter"
        title={title}
      >
        <Icon name="social-twitter" color="#fff" />
      </TwitterShareButton>
      <PinterestShareButton
        resetButtonStyle={false}
        url={window.location.href}
        className="btn__pinterest"
        media={media}
        description={description}
      >
        <Icon name="social-pinterest" color="#fff" />
      </PinterestShareButton>
      <LinkedinShareButton
        resetButtonStyle={false}
        url={window.location.href}
        className="btn__linkedin"
        title={title}
        summary={description}
        source="Pauleira Guitars"
      >
        <Icon name="social-linkedin" size="20" color="#fff" />
      </LinkedinShareButton>
    </Container>
  );
}

ShareBlock.propTypes = {
  media: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
