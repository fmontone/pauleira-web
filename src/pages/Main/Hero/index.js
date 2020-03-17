import React, { useState, useEffect } from 'react';

import history from '~/services/history';

import HeroIllustration from '~/assets/PauleiraHeroIsometricIllustration.png';
import { Container, Title, HeroImg, CallToAction } from './styles';

export default function Hero() {
  const courseList = [
    'Construção',
    'Regulagem',
    'Limpeza',
    'Customização',
    'Eletrônica',
  ];
  const [courseIndex, setCourseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseIndex(
        courseIndex === courseList.length - 1 ? 0 : courseIndex + 1
      );
    }, 1600);

    return () => clearInterval(interval);
  }, [courseIndex, courseList]);

  return (
    <Container>
      <Title>
        Aprenda
        <span className="title__highlight">{courseList[courseIndex]}</span>
        de guitarras e contrabaixos
      </Title>

      <HeroImg
        src={HeroIllustration}
        alt="Pauleira Guitars Ilustração Isométrica da Luthier Paula Bifulvo ensinando técnicas de luthieria para um aluno"
      />

      <CallToAction onClick={() => history.push('/cursos')} width="stretch">
        Conheça Nossos Cursos
      </CallToAction>
    </Container>
  );
}
