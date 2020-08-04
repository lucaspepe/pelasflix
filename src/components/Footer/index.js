import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo60.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo Pelasflix" />
      </a>
      <p>
        Sua nova comunidade de vídeos
      </p>
    </FooterBase>
  );
}

export default Footer;
