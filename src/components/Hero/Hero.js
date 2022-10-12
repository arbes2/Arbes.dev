import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Design | Code | Test | Deploy
      </SectionTitle>
      <SectionText>
        Hi there! I'm Arbes Istrefi<br/>
        I bring ideas to life digitally.
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
    </Section>
);

export default Hero;