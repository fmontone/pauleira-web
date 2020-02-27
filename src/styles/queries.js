// ** Attention for mobile query - max-with **
// *Ls for Landscape ;)

const size = {
  mobile: '599px',
  tablet: '600px',
  tabletLs: '900px',
  laptop: '1200px',
  desktop: '1800px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletLs: `(min-width: ${size.tabletLs})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
