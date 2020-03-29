import React from 'react';

import { Foot, Salve } from './styles';

import QuickLinks from '~/components/QuickLinks';
import ButtonCustom from '~/components/ButtonCustom';

export default function Footer() {
  return (
    <Foot>
      <Salve>
        <h2>Let&apos;s Rock</h2>
        <p>Mande um salve para a Pauleira:</p>
        <ButtonCustom model="regular" color="fuchsia" size="large" width="auto">
          Abrir Whatsapp
        </ButtonCustom>
      </Salve>
      <QuickLinks />
    </Foot>
  );
}
