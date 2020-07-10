import React from 'react';

import Hero from './Hero';

import Meta from '~/pages/Meta';
import metadata from './data/metadata.json';
import metaImage from '~/assets/openGraph/mediaHome.png';

export default function Main() {
  return (
    <>
      <Meta data={metadata} image={metaImage} />
      <Hero />
    </>
  );
}
