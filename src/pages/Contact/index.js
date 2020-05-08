import React from 'react';

import { IoLogoWhatsapp } from 'react-icons/io';
import { FiExternalLink } from 'react-icons/fi';
import PageTitle from '~/components/PageTitle';
import { Container, GpsCard, GpsButton } from './styles';
import colors from '~/styles/colors';

export default function Contact() {
  return (
    <>
      <PageTitle>Contato</PageTitle>
      <Container>
        <h2>Atendemos somente com hora marcada</h2>
        <section>
          <div className="contact__info">
            <h4>Dados de Contato</h4>
            <p>
              <span>
                <IoLogoWhatsapp color="4fce5d" />
              </span>
              (11) 98371-4260
            </p>
            <p>
              <a href="mailto:inbox@pauleira.com.br">inbox@pauleira.com.br</a>
            </p>
          </div>
          <div className="contact__address">
            <h4>Endereço</h4>
            <p>
              Rua Farrapos, 11 <br />
              Jd Petropolis <br />
              São Paulo - SP <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/search?tbm=lcl&ei=bVCwXtrfOrPY5OUPjMypiAk&q=luthier+pauleira&oq=Luthier+Pauleira&gs_l=psy-ab.1.0.0i22i30k1.5067.6269.0.7907.9.8.0.0.0.0.305.694.0j1j1j1.3.0....0...1c.1.64.psy-ab..6.3.692...0j0i273k1.0.yDfxIpNYnSc#rlfi=hd:;si:15993977676823467806;mv:[[-23.629702667160778,-46.68297569528427],[-23.63354094375833,-46.68819527402725],null,[-23.631621819522753,-46.68558548465576],18]"
              >
                Abrir Google Maps <FiExternalLink />
              </a>
            </p>
          </div>
          <GpsCard>
            <h3>Já está vindo?</h3>
            <h4>
              Escolha seu GPS favorito e inicie sua viagem para a Pauleira:
            </h4>
            <div className="gps__options">
              <GpsButton
                width="stretch"
                color={colors.statusInfo}
                onClick={() =>
                  window.open(
                    'https://www.waze.com/ul?ll=-23.63185800%2C-46.68539610&navigate=yes',
                    '_blank'
                  )
                }
              >
                Waze
              </GpsButton>
              <GpsButton
                width="stretch"
                color={colors.statusDanger}
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/dir/-23.6322335,-46.6851049/google+maps+pauleira+guitars/',
                    '_blank'
                  )
                }
              >
                Google Maps
              </GpsButton>
            </div>
          </GpsCard>
        </section>
      </Container>
    </>
  );
}
