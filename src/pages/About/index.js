import React from 'react';

import PageTitle from '~/components/PageTitle';
import { Container, Article } from './styles';

import dummyImageWoodShop from '~/assets/dummyImage-woodShop.jpg';
import dummyImagePaula from '~/assets/dummyImage-paulaBifulco.png';

export default function About() {
  return (
    <>
      <PageTitle>Sobre</PageTitle>
      <Container>
        <Article>
          <header>
            <h2>Nós criamos, construimos, esinamos e inspiramos</h2>
          </header>
          <section>
            <p>
              Sed ut <strong>perspiciatis unde omnis</strong> iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem <em>quia voluptas sit aspernatur</em> aut odit aut
              fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.{' '}
              <strong>
                <em>Neque porro</em>
              </strong>{' '}
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>

            <figure>
              <img src={dummyImageWoodShop} alt="Oficina de Marcenaria" />

              <figcaption>
                Uma linda oficina de marcenaria tirada de um banco de imagens
                <br />
                Image by&nbsp;
                <a
                  href="https://pixabay.com/users/ThMilherou-5808126/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4863393"
                  title="Thierry Milherou on Pixabay"
                >
                  Thierry Milherou
                </a>{' '}
                from{' '}
                <a
                  href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4863393"
                  title="Pixabay"
                >
                  Pixabay
                </a>
              </figcaption>
            </figure>

            <figure className="figure__align-left">
              <img src={dummyImagePaula} alt="Paula Bifulco" />

              <figcaption>Paula Bifulco</figcaption>
            </figure>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>

            <figure className="figure__align-right">
              <img src={dummyImagePaula} alt="Paula Bifulco" />

              <figcaption>Paula Bifulco</figcaption>
            </figure>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>

            <h3>Heading 3 test</h3>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>

            <h4>Heading 4 test</h4>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>
          </section>
        </Article>
      </Container>
    </>
  );
}
