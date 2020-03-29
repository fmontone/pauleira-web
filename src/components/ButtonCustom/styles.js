import styled from 'styled-components';

import colors from '~/styles/colors';

const height = { small: '16px', regular: '32px', large: '64px' };

export const Button = styled.button`
  width: ${props => (props.width === 'stretch' ? '100%' : 'auto')};
  height: ${props => height[props.size]};
  padding: 0 32px;

  text-transform: ${props =>
    props.model === 'callToAction' ? 'uppercase' : 'unset'};
  font-size: ${props => (props.size === 'small' ? '12px' : '16px')};
  font-weight: 500;
  color: ${props => { /*eslint-disable-line*/
    switch (props.model) {
      case 'regular':
      case 'callToAction':
        return `${colors.white}`;
      case 'outline':
        return `${props.color}`;
      case 'inactive':
      case 'inactiveOutline':
        return `${colors.greyMedium}`;
      default:
    }
  }};

  border-radius: 6px;
  border: ${props => { /*eslint-disable-line*/
    switch (props.model) {
      case 'regular':
      case 'callToAction':
      case 'inactive':
        return 'unset';
      case 'outline':
        return `1px solid ${props.color}`;
      case 'inactiveOutline':
        return `1px solid ${colors.greyMedium}`;
      default:
    }
  }};

  background: ${props => { /*eslint-disable-line*/
    switch (props.model) {
      case 'regular':
        return props.color;
      case 'outline':
        return colors.greyLighter;
      case 'callToAction':
        return 'linear-gradient(-45deg, rgba(223,0,255,1) 0%, rgba(49,166,239,1) 100%)';
      case 'inactive':
        return colors.greyLight;
      case 'inactiveOutline':
        return colors.greyLighter;
      default:
    }
  }};

  filter: ${props =>
    props.model === 'callToAction'
      ? 'drop-shadow(0px 6px 11px rgba(138, 0, 255, 0.39))'
      : 'unset'};

  cursor: ${props =>
    props.model === 'inactive' || props.model === 'inactiveOutline'
      ? 'unset'
      : 'pointer'};
`;
