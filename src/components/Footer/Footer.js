import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel: +447502596577'>+44 7502 5965 77</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto: arbesistrefi@gmail.com'>arbesistrefi@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>2022. All right reserved!
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/arbes2'>
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href='https://linkedin.com'>
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
