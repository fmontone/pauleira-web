import React from 'react';

import { Foot, Salve, Container } from './styles';

import QuickLinks from '~/components/QuickLinks';
import ButtonCustom from '~/components/ButtonCustom';

export default function Footer() {
  return (
    <Foot>
      <Salve>
        <h2>Let&apos;s Rock</h2>
        <p>Mande um salve para a Pauleira:</p>
        <ButtonCustom model="callToAction">Abrir Whatsapp</ButtonCustom>
      </Salve>
      <Container>
        <QuickLinks width="250px" />
      </Container>
    </Foot>
  );
}
