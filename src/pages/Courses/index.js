import React from 'react';

import PageTitle from '~/components/PageTitle';
import ArticleCustom from '~/components/ArticleCustom';

import { Container, Timing } from './styles';

import CardCourses from './CardCourses';

export default function Courses() {
  return (
    <>
      <PageTitle>Cursos</PageTitle>
      <Container>
        <ArticleCustom>
          <header>
            <h2>Luthieria: regulagens e construção de instrumentos</h2>
          </header>
          <section>
            <p>
              Em 2018 a Pauleira passou a oferecer cursos de luthieria em sua
              oficina. Tanto para formação profissional básica, conhecimento e
              aprimoramento de técnicas, quanto para quem quer dominar um pouco
              mais o conhecimento em instrumentos como guitarra e baixos. Ou
              seja, estudando com a Pauleira você pode aprender a regular seus
              próprios instrumentos como um hobby ou também ir fazendo os nossos
              cursos padrão ou livres para poder montar sua própria oficina e
              passar a prestar serviços de luthieria para seus próprios
              clientes.
            </p>
            <p>Entre em contato e verifique a disponibilidade de horário.</p>

            <Timing className="timing">
              <div className="timing__line">
                <div className="timing__title">Segunda a Sexta</div>
                <div className="timing__hours">
                  <span>09:00 ~ 12:00</span>
                  <span>14:00 ~ 18:00</span>
                </div>
              </div>
              <div className="timing__line">
                <div className="timing__title">Sábado</div>
                <div className="timing__hours">
                  <span>09:00 ~ 12:00</span>
                </div>
              </div>
            </Timing>

            <h2>Cursos</h2>

            <CardCourses />
          </section>
        </ArticleCustom>
      </Container>
    </>
  );
}
