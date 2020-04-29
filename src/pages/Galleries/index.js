import React, { useState, useEffect } from 'react';

import Gallery from './Gallery';

// import api from '~/services/api';
import { GalleryDropContext } from '~/contexts';

import Icon from '~/components/Icon';

import PageTitle from '~/components/PageTitle';
import {
  Container,
  Settings,
  BlockOne,
  BlockTwo,
  DisplaySettings,
  DropDownWrapper,
  IconButton,
  TabsCustom,
  TabOption,
  ImageGallery,
  GalleryLink,
  ButtonLoadMore,
} from './styles';

import colors from '~/styles/colors';

export default function Galleries({ modalGallery }) {
  // const [galleries, setGalleries] = useState([]);
  const [settingsType, setSettingsType] = useState('block');
  const [settingsTab, setSettingsTab] = useState('todos');
  const [dropActive, setDropActive] = useState(undefined);

  const dropOptions = [
    'Mais Recentes',
    'Mais Antigos',
    'Mais Comentados',
    'Menos Comentados',
  ];

  useEffect(() => {
    // It's ugly when a body scrolls behind a modal, don't you think?
    const body = document.querySelector('body');
    if (modalGallery) {
      body.classList.add('body-overflow-hidden');
    } else {
      body.classList.remove('body-overflow-hidden');
    }
  });

  function handleDropDownChange(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <PageTitle>Galeria</PageTitle>
      <GalleryDropContext.Provider value={{ dropActive, setDropActive }}>
        <Container>
          <Settings>
            <BlockOne>
              <DropDownWrapper>
                {/* <DropDown ref={} options={dropOptions} /> */}

                <select onChange={e => handleDropDownChange(e)}>
                  {dropOptions.map((item, index) => {
                    return <option key={String(index)}>{item}</option>;
                  })}
                </select>
              </DropDownWrapper>

              <DisplaySettings>
                <IconButton
                  onClick={() => {
                    setSettingsType('block');
                  }}
                >
                  <Icon
                    name="settings-block"
                    color={
                      settingsType === 'block'
                        ? colors.primary
                        : colors.greyLight
                    }
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setSettingsType('list');
                  }}
                >
                  <Icon
                    name="settings-list"
                    color={
                      settingsType === 'list'
                        ? colors.primary
                        : colors.greyLight
                    }
                  />
                </IconButton>
              </DisplaySettings>
            </BlockOne>
            <BlockTwo>
              <TabsCustom>
                <TabOption>
                  <button
                    type="button"
                    className={settingsTab === 'todos' ? 'active' : ''}
                    onClick={() => setSettingsTab('todos')}
                  >
                    Todos
                  </button>
                  <span className={settingsTab === 'todos' ? 'active' : ''} />
                </TabOption>
                <TabOption>
                  <button
                    type="button"
                    className={settingsTab === 'alunos' ? 'active' : ''}
                    onClick={() => setSettingsTab('alunos')}
                  >
                    Alunos
                  </button>
                  <span className={settingsTab === 'alunos' ? 'active' : ''} />
                </TabOption>
              </TabsCustom>
            </BlockTwo>
          </Settings>

          <ImageGallery settingsType={settingsType}>
            <GalleryLink to="/galerias/1/galeria-teste">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/30/16/38/music-2902891_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/11/17/11/39/guitar-2957224_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2015/08/29/14/18/bass-913092_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/06/07/28/instrument-2589863_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/26/22/36/music-1281642_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/11/07/00/18/guitar-2925274_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/05/01/18/18/guitar-2276181_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/28/23/13/guitar-2183684_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/25/03/40/musical-background-2886886_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/19/55/guitar-1836655_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/11/07/00/22/guitar-2925282_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2016/10/12/23/22/e-guitar-1736291_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2014/05/02/23/48/acoustic-guitar-336479_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2017/04/09/16/11/guitar-2216068_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
            <GalleryLink to="#">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/09/09/37/guitar-1245903_960_720.jpg"
                alt="Guitarra Maluca"
              />
            </GalleryLink>
          </ImageGallery>

          <ButtonLoadMore model="outline" color={colors.primary}>
            Carregar Mais
          </ButtonLoadMore>
        </Container>
      </GalleryDropContext.Provider>

      {modalGallery && <Gallery />}
    </>
  );
}
