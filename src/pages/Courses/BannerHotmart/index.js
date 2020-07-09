import React from 'react';

import { MdLaunch } from 'react-icons/md';
import { GoFlame } from 'react-icons/go';
import { Wrapper, Container, Title, Description, CallToAction } from './styles';

function BannerHotMart() {
  return (
    <Wrapper>
      <Container>
        <Title>Curso online de contrução de guitarra</Title>
        <Description>
          Realize seu sonho de construir uma Telecaster com o mínimo de
          recursos, em uma bela parceria da Pauleira com a Oficina de Casa!
          <span>
            <span>
              <GoFlame color="yellowgreen" />
              BÔNUS
              <GoFlame color="yellowgreen" />
            </span>
            Aprenda a cosntruir também uma Cigar Box Guitar!
          </span>
        </Description>
        <CallToAction
          onClick={() =>
            window.open(
              'https://oficinadecasa.com.br/cursos/curso-luthieria-pauleira-oficina-de-casa/',
              '_blank'
            )
          }
        >
          COMPRAR AGORA!
          <MdLaunch size="20" color="#fff" />
        </CallToAction>
      </Container>
    </Wrapper>
  );
}

export default BannerHotMart;
