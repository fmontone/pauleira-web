import React from 'react';
import PropTypes from 'prop-types';

import ButtonCustom from '~/components/ButtonCustom';
import VendorPagSeguro from '~/assets/vendor/pagbank-logo.png';

import { InvestmentSection, Container, InvestmentCard } from './styles';
import colors from '~/styles/colors';

export default function Investment({ course }) {
  const investmentValues = {
    setupBasico: {
      installment: 100.65,
      cash: 600.5,
    },
  };

  return (
    <InvestmentSection>
      <Container>
        <h2>Investimento</h2>
        <div className="cardWrapper">
          <InvestmentCard className="card">
            <span className="card__title card__title--installment">
              Cabe no Bolso
            </span>
            <div className="card__content">
              <div className="card__price-line">
                <span className="card__times">10x</span>
                <span className="card__price">
                  {investmentValues[course].installment}
                </span>
              </div>
              <div className="card__pay-gate">
                <img src={VendorPagSeguro} alt="Pagseguro / PagBank" />
              </div>
              <ButtonCustom width="stretch">Pagar Parcelado</ButtonCustom>
            </div>
          </InvestmentCard>
          <InvestmentCard className="card">
            <span className="card__title card__title--cash">20% Off</span>
            <div className="card__content">
              <div className="card__price-line">
                <span className="card__price">
                  {investmentValues[course].cash}
                </span>
              </div>
              <div className="card__pay-gate">
                <span>Depósito Itau</span>
              </div>
              <ButtonCustom width="stretch" color={colors.statusInfo}>
                Dados da Conta
              </ButtonCustom>
            </div>
          </InvestmentCard>
        </div>
      </Container>
    </InvestmentSection>
  );
}

Investment.propTypes = {
  course: PropTypes.string.isRequired,
};
