import React, { useState, useEffect, useContext } from 'react';

import history from '~/services/history';
import { ActivePageContext } from '~/contexts';
import { useWindowSize } from '~/hooks/useWindowSize';
import { windowSize } from '~/styles/queries';

import HeroIllustration from '~/assets/PauleiraHeroIsometricIllustration@2x.png';
import { Container, TextAndCall, Title, CallToAction, HeroImg } from './styles';

export default function Hero() {
  const courseList = [
    'Construção',
    'Regulagem',
    'Limpeza',
    'Customização',
    'Eletrônica',
  ];
  const [courseIndex, setCourseIndex] = useState(0);
  const { setActivePage } = useContext(ActivePageContext);
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseIndex(
        courseIndex === courseList.length - 1 ? 0 : courseIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [courseIndex, courseList.length]);

  function handleCallToActionClick() {
    setActivePage('cursos');
    history.push('/cursos');
  }

  return (
    <Container>
      <TextAndCall>
        <Title>
          Aprenda
          <span className="title__highlight">{courseList[courseIndex]}</span>
          de guitarras e contrabaixos
        </Title>

        <CallToAction
          onClick={handleCallToActionClick}
          width={windowWidth < windowSize.laptop ? 'stretch' : 'auto'}
        >
          Conheça Nossos Cursos
        </CallToAction>
      </TextAndCall>
      <HeroImg
        src={HeroIllustration}
        alt="Pauleira Guitars Ilustração Isométrica da Luthier Paula Bifulco ensinando técnicas de luthieria para um aluno"
      />
    </Container>
  );
}
