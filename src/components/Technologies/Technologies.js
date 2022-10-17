import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have worked with a range of Technologies in the web development world.
    From Front-End to & Design
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size='3rem'/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            React.js | HTML/CSS | WordPress
          </ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiReact size='3rem'/>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiReact size='3rem'/>
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with<br />
            Figma | Scetch | Photoshop
          </ListParagraph>
        </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
 </Section>
);

export default Technologies;
