import React, { useContext } from 'react';

import ActivePageContext from '~/contexts/activePage';

import CourseSetupBasico from './CourseSetupBasico';
import CourseSetupAvancado from './CourseSetupAvancado';
import CourseConstrucaoI from './CourseConstrucaoI';
import CourseConstrucaoII from './CourseConstrucaoII';
import CourseLivre from './CourseLivre';
import Investment from './Investment';

import { CardsWrapper, Container } from './styles';

export default function Course() {
  const { activePage } = useContext(ActivePageContext);

  return (
    <>
      {activePage === '/cursos/setup-regulagem-guitarra-basico' && (
        <CourseSetupBasico />
      )}
      {activePage === '/cursos/setup-regulagem-guitarra-avancado' && (
        <CourseSetupAvancado />
      )}
      {activePage === '/cursos/construcao-de-guitarra-braco-parafusado' && (
        <CourseConstrucaoI />
      )}
      {activePage === '/cursos/construcao-de-guitarra-braco-colado' && (
        <CourseConstrucaoII />
      )}
      {activePage === '/cursos/curso-livre-de-luthieria' && <CourseLivre />}
      <Investment course="setupBasico" />

      <CardsWrapper>
        <Container>
          <h3>Cursos Presenciais</h3>
        </Container>
      </CardsWrapper>
    </>
  );
}
