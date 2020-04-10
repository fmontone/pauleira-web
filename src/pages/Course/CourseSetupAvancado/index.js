import React from 'react';

import PageTitle from '~/components/PageTitle';
import Article from '~/components/htmlArticle';

import { Container } from './styles';

export default function CourseSetupAvancado() {
  return (
    <>
      <PageTitle>Setup Avancado</PageTitle>
      <Container>
        <Article>
          <h2>
            Aprenda a regular guitarras e contrabaixos trazendo seus poróprios
            instrumentos
          </h2>

          <p>
            Você traz seu instrumento e juntos faremos um serviço de regulagem
            básica oferecida por luthiers e guitar techs. São ajustes que mantém
            seus instrumentos regulados e em dia. Uma boa opção para quem curte
            mexer nos seus próprios instrumentos por conta própria ou até para
            quem tem a intenção de oferecer esse tipo de serviço em sua loja, ou
            até montar uma pequena oficina.
          </p>

          <h3>O que você vai desenvolver</h3>

          <ul>
            <li>Desmontagem Completa</li>
            <li>Limpeza (corpo, braço, escala, hardware)</li>
            <li>Ajuste de tensor</li>
            <li>Regulagem de oitavas com troca de cordas</li>
            <li>Revisão eletrônica simples</li>
          </ul>
        </Article>
      </Container>
    </>
  );
}
