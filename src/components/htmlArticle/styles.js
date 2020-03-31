import styled from 'styled-components';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Article = styled.article`
  padding: 0 16px;
  margin-bottom: 32px;

  @media ${device.laptop} {
    padding: 0;
  }

  /* Layout */

  header {
    margin-top: 32px;
  }

  /* Text */

  p,
  h2 {
    margin-bottom: 32px;
  }

  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 16px;

    ::selection {
      background-color: ${colors.terceary};
      color: ${colors.primary};
    }
  }

  p {
    font-weight: 300;
    font-size: 17px;
    letter-spacing: -0.02em;
    line-height: 24px;
    text-align: left;
    color: ${colors.greyHeavy};

    ::selection {
      background-color: ${colors.terceary};
      color: ${colors.primary};
    }
  }

  a {
    ::selection {
      background-color: ${colors.primary};
      color: ${colors.terceary};
    }
  }

  strong {
    font-weight: 500;
  }

  em {
  }

  /* imagery */

  figure {
    width: 100%;
    height: auto;
    margin-bottom: 32px;

    img {
      width: 100%;
      max-width: 100%;
      padding: 12px;
      background: #fff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    }

    /* Figure - Floating */

    &.figure__align-right {
      float: right;
      margin-left: 32px;

      @media ${device.tabletLs} {
        max-width: 33.333%;
      }
    }

    &.figure__align-left {
      float: left;
      margin-right: 32px;

      @media ${device.tabletLs} {
        max-width: 33.333%;
      }
    }

    /* Image Caption */

    figcaption {
      padding: 8px;
      font-weight: 300;
      color: ${colors.greyHeavy};
      font-style: oblique;
      text-align: center;
    }
  }

  /* selection */

  p,
  h2,
  figcaption {
    ::selection {
      background-color: ${colors.terceary};
      color: ${colors.primary};
    }
  }

  em,
  strong,
  img {
    ::selection {
      background-color: ${colors.primary};
      color: ${colors.terceary};
    }
  }
`;
