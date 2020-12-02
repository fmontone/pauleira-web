import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import history from '~/services/history';

import { useShowcase } from '~/store/showcaseContext';

import ThumbPlaceholder from '~/assets/pauleira_gallery_pic_placeholder.jpg';
import Gallery from './Gallery';
import Icon from '~/components/Icon';
import PageTitle from '~/components/PageTitle';

import { Container, ThumbGrid, Thumb, Image, Info } from './styles';

import colors from '~/styles/colors';

function Showcase({ modalGallery }) {
  const { galleries, loadingGalleries, setCanFetch } = useShowcase();

  useEffect(() => {
    if (!galleries.length) {
      console.log('NOW YOU CANFETCH');
      setCanFetch(true);
    }
  }, [galleries, setCanFetch]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (modalGallery) {
      body.classList.add('body-overflow-hidden');
    } else {
      body.classList.remove('body-overflow-hidden');
    }
  }, [modalGallery]);

  return (
    <>
      <PageTitle
        title="showcase"
        theTitle="Conheça a Pauleira através de imagens"
      />

      <Container>
        {loadingGalleries ? (
          <h4>LOADING...</h4>
        ) : (
          <ThumbGrid>
            {galleries &&
              !!galleries.length &&
              galleries.map(gallery => (
                <Thumb
                  key={String(gallery.id)}
                  onClick={() =>
                    history.push(
                      `/showcase/${
                        gallery.id
                      }/${gallery.title.toLowerCase().replace(' ', '-')}`
                    )
                  }
                >
                  <Image
                    src={
                      (!!gallery.images.length &&
                        gallery.images.find(img => img.position === '1').url) ||
                      ThumbPlaceholder
                    }
                  />
                  <Info>
                    <span className="info__title" title={gallery.title}>
                      {gallery.title}
                    </span>
                    <div>
                      <div className="info__likes-wraper">
                        <Icon
                          name="social-like-heavymetal"
                          color={colors.greyLighter}
                          size="40"
                        />
                        <span>{gallery.likes}</span>
                      </div>
                    </div>
                  </Info>
                </Thumb>
              ))}
          </ThumbGrid>
        )}
      </Container>

      {modalGallery && <Gallery />}
    </>
  );
}

Showcase.propTypes = {
  modalGallery: PropTypes.bool,
};

Showcase.defaultProps = {
  modalGallery: false,
};

export default Showcase;
