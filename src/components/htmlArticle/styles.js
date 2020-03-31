import styled from 'styled-components';

import colors from '~/styles/colors';

export const Article = styled.article`
  margin-bottom: 32px;

  /* Layout */

  header {
    margin-top: 32px;
  }

  /* Text */

  p,
  h2 {
    margin-bottom: 32px;

    ::selection {
      background-color: ${colors.terceary};
      color: ${colors.primary};
    }
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

    ::selection {
      background-color: ${colors.primary};
      color: ${colors.terceary};
    }
  }

  em {
    ::selection {
      background-color: ${colors.primary};
      color: ${colors.terceary};
    }
  }

  /* imagery */

  figure {
    width: 100%;
    height: auto;
    margin-bottom: 32px;

    img {
      max-width: 100%;
      padding: 12px;
      background: #fff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);

      ::selection {
        background-color: ${colors.primary};
        color: ${colors.terceary};
      }
    }

    /* Floating */

    &.figure__align-right {
      max-width: 33.333%;
      float: right;
      margin-left: 32px;
    }

    &.figure__align-left {
      max-width: 33.333%;
      float: left;
      margin-right: 32px;
    }

    /* Image Caption */

    figcaption {
      padding: 8px;
      font-weight: 300;
      color: ${colors.greyHeavy};
      font-style: oblique;
      text-align: center;

      ::selection {
        background-color: ${colors.terceary};
        color: ${colors.primary};
      }
    }
  }
`;
