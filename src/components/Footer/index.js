import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/shyvesCCD">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://github.com/shyvesCCD">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
