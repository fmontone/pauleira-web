import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';

import ThumbPlaceholder from '~/assets/pauleira_gallery_pic_placeholder.jpg';
import Gallery from './Gallery';
import Icon from '~/components/Icon';
import PageTitle from '~/components/PageTitle';

import { Container, ThumbGrid, Thumb, Image, Info } from './styles';

import colors from '~/styles/colors';

export default function Galleries({ modalGallery }) {
  const [galleries, setGalleries] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function fetchGalleries() {
      const { data } = await api.get('/galleries');
      setGalleries(data);
      setFetched(true);
    }

    if (!fetched) fetchGalleries();
  }, [galleries, fetched]);

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
      <PageTitle>Galeria</PageTitle>

      <Container>
        <ThumbGrid>
          {galleries &&
            !!galleries.length &&
            galleries.map(gallery => (
              <Thumb
                key={String(gallery.id)}
                onClick={() =>
                  history.push(
                    `/galerias/${
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
                  <span
                    className="info__title"
                    title={`Este é o título da galeria bem grande ${gallery.title}`}
                  >
                    Este é o título da galeria bem grande {gallery.title}
                  </span>
                  <div className="info__likes-wraper">
                    <span>240</span>
                    <Icon
                      name="social-like-heavymetal"
                      color={colors.greyHeavy}
                    />
                  </div>
                </Info>
              </Thumb>
            ))}
        </ThumbGrid>
      </Container>

      {modalGallery && <Gallery fetched={fetched} />}
    </>
  );
}

Galleries.propTypes = {
  modalGallery: PropTypes.bool,
};

Galleries.defaultProps = {
  modalGallery: false,
};
