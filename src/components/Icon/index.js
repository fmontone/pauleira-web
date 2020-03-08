import React from 'react';

import LogoFlyingP from './LogoFlyingP';
import SocialContact from './SocialContact';
import SocialYouTube from './SocialYouTube';
import SocialInstagram from './SocialInstagram';
import SocialFacebook from './SocialFacebook';

// import { Container } from './styles';

export default function Icon({ name, color, size }) {
  switch (name) {
    case 'logo-flying-p':
      return <LogoFlyingP name color={color} size={size} />;
    case 'social-contact':
      return <SocialContact name color={color} size={size} />;
    case 'social-youtube':
      return <SocialYouTube name color={color} size={size} />;
    case 'social-instagram':
      return <SocialInstagram name color={color} size={size} />;
    case 'social-facebook':
      return <SocialFacebook name color={color} size={size} />;
    default:
  }
}
