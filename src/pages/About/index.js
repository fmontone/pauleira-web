import React from 'react';

import PageTitle from '~/components/PageTitle';
import { Container, Article } from './styles';

import PaulaBifulco from '~/assets/pics/paula-bifulco-guitar-maker.jpeg';

export default function About() {
  return (
    <>
      <PageTitle>Sobre</PageTitle>
      <Container>
        <Article>
          <header>
            <h2>Eu amo inspirar pessoas a fazerem coisas diferentes!</h2>
          </header>
          <section>
            <p>
              Olá! Meu nome é Paula Bifulco, sou guitar Maker há mais de 10 anos
              e faço questão de compartilhar com você as experiências mais
              Pauleira que existem no mundo das guitarras.
            </p>
            <figure>
              <img src={PaulaBifulco} alt="Paula Bifulco Luthier Pauleira" />

              <figcaption>
                Paula Bifulco é a Luthier que comanda a marca Pauleira
              </figcaption>
            </figure>
            <p>
              Seja através de cursos ou serviços, minha expectativa desde o
              início, quando ingressei totalmente em 2008 na luthieria, sempre
              foi de inspirar pessoas como você a fazerem coisas diferentes
              sempre buscando compartilhar a simplicidade, praticidade e
              objetividade de todas as atividades relacionadas a manutenção,
              construção, customização.
            </p>

            <p>
              Em 2017 comecei a criar cursos individuais 100% práticos dentro da
              minha própria oficina, afim de entender individualmente as
              necessidades de apoio ou suporte técnico que cada aluno possuía.
            </p>

            <p>
              Atualmente, ainda mantendo o modo individual de cursos, você
              encontra diversas possibilidades de cursos customizados, os quais
              são possíveis de configurar de acordo com seus objetivos.
            </p>

            <p>
              Além dos cursos presenciais, também existe um curso online. Sim! É
              possível ter experiencias fora de série até mesmo à distância! É
              curso muito especial, feito em parceria com a equipe Oficina de
              Casa, que foi planejado para atender desde que não entende nada de
              luthieria ou marcenaria até luthiers que já possuem certa
              experiência e gostariam de aprimorar ou aprender novas técnicas.
              Você faz a sua guitarra (ou baixo - e até uma Guitarra de Caixa)
              na sua casa, no seu tempo. E ainda tem todo nosso suporte técnico!
            </p>

            <p>
              Curtiu? Então deixo aqui o meu convite para você acompanhar as
              atividades que estão rolando por aqui pelas redes sociais.
            </p>
          </section>
        </Article>
      </Container>
    </>
  );
}
