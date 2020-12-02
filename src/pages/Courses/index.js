import React from 'react';

import PageTitle from '~/components/PageTitle';
import ArticleCustom from '~/components/ArticleCustom';
import BannerHotmart from '~/pages/Courses/BannerHotmart';
import PaulaBifulco from '~/assets/pics/paula-bifulco-luthier-guitar-maker-pauleira-002.jpg';

import Meta from '~/pages/Meta';
import metadata from './data/metadata.json';
import metaImage from '~/assets/openGraph/mediaCursos.png';

import { Container } from './styles';

export default function Courses() {
  return (
    <>
      <Meta data={metadata} image={metaImage} />
      <PageTitle
        title="Cursos"
        theTitle="Cursos de Luthieria para todos os níveis"
        subTitle="Aprenda construção e manutenção de guitarras e contrabaixos"
      />
      <Container>
        <ArticleCustom>
          <header>
            <h2>Momentos especiais exigem ações especiais!</h2>
          </header>
          <section>
            <figure>
              <img src={PaulaBifulco} alt="Paula Bifulco Luthier Pauleira" />

              <figcaption>
                Sorry, sem cursos presenciais na Pauleira por enquanto!
              </figcaption>
            </figure>
            <p>
              Poxa, neste momento delicado que estamos vivendo nós infelizmente
              não estamos com os cursos presenciais disponíveis.
            </p>

            <p>Mas gostaria de te fazer um convite:</p>
            <p>
              Que tal conhecer nosso super curso online de construção de
              guitarra?! Além de muita informação sobre luthieria e marcenaria,
              te garanto que também será uma experiência inesquecível. E melhor:
              você pode fazer o curso no seu tempo, na sua casa e ainda tem todo
              nosso suporte técnico!
            </p>
            <p>
              Fora o curso, também estão rolando altas dicas no Canal Pauleira
              do YouTube e faço questão de compartilhar um montão de ideias e
              dicas fora de série!
            </p>

            <p>Vem com a gente! Let&apos;s rock!</p>

            <BannerHotmart />

            <p>
              Se tiver qualquer dúvida quando ao curso, fique à vontade para
              mandar uma mensagem em nosso whatsapp clicando no botão abaixo:
            </p>
          </section>
        </ArticleCustom>
      </Container>
    </>
  );
}
