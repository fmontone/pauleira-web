import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Article = styled.article`
  padding: ${props => `0 ${props.padding}`};
  margin-bottom: 32px;

  @media ${device.laptop} {
    padding: 0;
  }

  /**
    TOC
    #-Layout
    #-Text
    #-Lists
    #-imagery
    #-selection & Mark
   */

  /* #-Layout */

  header {
    margin-top: 32px;
  }

  hr {
    width: 40%;
    height: 1px;
    margin: 40px auto;
    background-color: ${colors.greyHeavy};
    border: none;
  }

  /* #-Text */

  p,
  h2 {
    margin-bottom: 32px;
  }

  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 16px;
  }

  p,
  ul,
  ol {
    font-weight: 300;
    font-size: 17px;
    letter-spacing: -0.02em;
    line-height: 24px;
    text-align: left;
    color: ${colors.greyHeavy};
  }

  strong {
    font-weight: 500;
  }

  /* Quotation */

  blockquote {
    position: relative;
    margin: 32px;
    padding: 16px;
    font-size: 32px;
    line-height: 36px;
    font-style: oblique;
    color: ${colors.greyHeavy};
    border-radius: 12px;
    background-color: ${colors.white};
    overflow: hidden;

    cite {
      font-size: 24px;
      display: block;
      font-weight: 500;
    }
  }

  q {
    margin: 0 8px;
    font-style: oblique;
    color: ${colors.greyHeavy};
    background-color: ${colors.white};
    padding: 0 8px;
    border-radius: 12px;
  }

  /* #-Lists */

  ul,
  ol {
    margin-left: 32px;
    margin-bottom: 32px;
  }

  ul > li > ul,
  ul > li > ol,
  ol > li > ol,
  ol > li > ul {
    margin-bottom: 0px;
  }

  /* #-imagery */

  figure {
    width: 100%;
    height: auto;
    margin-bottom: 32px;

    img {
      width: 100%;
      max-width: 100%;
      padding: 12px;
      background: ${colors.white};
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

  /* #-selection & Mark */

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figcaption {
    ::selection {
      background-color: ${lighten(0.4, colors.primary)};
      color: ${colors.primary};
    }
  }

  em,
  strong,
  a,
  img,
  blockquote,
  blockquote,
  cite,
  q,
  q > cite {
    ::selection {
      background-color: ${lighten(0.4, colors.primary)};
      color: ${colors.terceary};
    }
  }

  mark {
    background-color: ${lighten(0.2, colors.terceary)};
    color: ${colors.black};
  }
`;
