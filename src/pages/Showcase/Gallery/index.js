import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdFullscreen, MdFullscreenExit, MdClose } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { LikesProvider } from '~/hooks/likesContext';

import ThumbSlider from './ThumbSlider';
import ButtonLike from '~/components/ButtonLike';
import ShareBlock from '~/components/ShareBlock';

import colors from '~/styles/colors';

import {
  Wrapper,
  Container,
  CloseGallery,
  ClickWrapper,
  BigPicture,
  ExpandPicture,
  Article,
} from './styles';

function Gallery() {
  const [zoom, setZoom] = useState(false);
  const [gallery, setGallery] = useState({});
  const [fetched, setFetched] = useState(false);
  const [sortedImages, setSortedImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    // Fetch Data
    async function fetchGallery() {
      const { data } = await api.get(`/galleries/${id}`);

      if (!data)
        alert('A galeria procurada não existe ou não está mais disponível'); /*eslint-disable-line*/

      setGallery(data);
      setFetched(true);
    }

    if (!fetched) fetchGallery();
  }, [fetched, gallery, id]);

  useEffect(() => {
    // Set Data if Fetched
    if (fetched && gallery) {
      setSortedImages(gallery.images.sort((a, b) => a.position - b.position));
      setSelectedImage(gallery.images.find(image => image.position === '1'));
      setLoading(false);
    }
  }, [fetched, gallery, sortedImages]);

  function handleSelectImage(position) {
    setSelectedImage(sortedImages.find(img => img.position === position));
  }

  return (
    <Wrapper>
      {loading ? (
        <h3>LOADING</h3>
      ) : (
        <>
          <CloseGallery
            onClick={() => {
              history.push('/showcase');
            }}
            zoom={zoom}
          >
            <MdClose size="32px" color={colors.statusDanger} />
          </CloseGallery>
          <ClickWrapper
            onClick={e => {
              e.stopPropagation();
              history.push('/showcase');
            }}
          />

          <Container>
            <header>
              <h1>{gallery.title}</h1>
              <h4>
                By <span>{gallery.user.name}</span>
              </h4>
            </header>
            <section className="gallery__images">
              <BigPicture zoom={zoom}>
                <div className="big-picture__wrapper">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.description || gallery.description}
                  />
                  <ExpandPicture role="button" zoom={zoom}>
                    {!zoom ? (
                      <MdFullscreen
                        size="24px"
                        color="#fff"
                        onClick={() => setZoom(!zoom)}
                      />
                    ) : (
                      <MdFullscreenExit
                        size="24px"
                        color="#fff"
                        onClick={() => setZoom(!zoom)}
                      />
                    )}
                  </ExpandPicture>
                </div>
              </BigPicture>

              {sortedImages.length > 1 && (
                <ThumbSlider zoom={zoom}>
                  {sortedImages &&
                    sortedImages.map(image => (
                      <li key={String(image.id)}>
                        <button
                          type="button"
                          onClick={() => handleSelectImage(image.position)}
                        >
                          <img src={image.url} alt={image.description} />
                        </button>
                      </li>
                    ))}
                </ThumbSlider>
              )}
            </section>
            <section className="gallery__social">
              <LikesProvider>
                <ButtonLike likes={gallery.likes} />
              </LikesProvider>

              <ShareBlock
                media={selectedImage.url}
                title={gallery.title}
                description={gallery.description}
              />
            </section>
            <section className="gallery__text">
              <Article padding="0">{gallery.description}</Article>
            </section>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

export default Gallery;
