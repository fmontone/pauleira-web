import React, { useState } from 'react';

import {
  MdFullscreen,
  MdFullscreenExit,
  MdChevronLeft,
  MdChevronRight,
  MdClose,
} from 'react-icons/md';

import history from '~/services/history';

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
  PostNav,
} from './styles';

export default function Gallery() {
  const [zoom, setZoom] = useState(false);

  return (
    <Wrapper>
      <CloseGallery
        onClick={() => {
          history.push('/galerias');
        }}
        zoom={zoom}
      >
        <MdClose size="32px" color={colors.greyHeavy} />
      </CloseGallery>
      <ClickWrapper
        onClick={e => {
          e.stopPropagation();
          history.push('/galerias');
        }}
      />

      <Container>
        <header>
          <h1>Johnny Ramone Tribute Amazing</h1>
          <h4>
            By <span>Pauleira Guitars</span>
          </h4>
        </header>
        <section className="gallery__images">
          <BigPicture zoom={zoom}>
            <div className="big-picture__wrapper">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/30/16/38/music-2902891_960_720.jpg"
                alt="Guitarra Maluca"
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
          <ThumbSlider zoom={zoom}>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2017/10/30/16/38/music-2902891_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2017/11/17/11/39/guitar-2957224_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2015/08/29/14/18/bass-913092_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/06/07/28/instrument-2589863_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2016/03/26/22/36/music-1281642_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2017/11/07/00/18/guitar-2925274_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2017/05/01/18/18/guitar-2276181_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
            <li>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/28/23/13/guitar-2183684_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </li>
          </ThumbSlider>
        </section>
        <section className="gallery__social">
          <ButtonLike />

          <ShareBlock />
        </section>
        <section className="gallery__text">
          <Article padding="0">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut.
            </p>
          </Article>
        </section>
        <section className="gallery__nav">
          <PostNav onClick={() => history.push('/galerias/2/galeria-teste')}>
            <span>
              <MdChevronLeft color={colors.terceary} />
            </span>
            Guitarra Les Paul V8 Little Darling Amazing
          </PostNav>
          <PostNav onClick={() => history.push('/galerias/3/galeria-teste')}>
            Johnny Ramone Tribute e se o texto for de duas linhas{' '}
            <span>
              <MdChevronRight color={colors.terceary} />
            </span>
          </PostNav>
        </section>
      </Container>
    </Wrapper>
  );
}
