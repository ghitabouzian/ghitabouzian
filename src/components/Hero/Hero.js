import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        print("Hola!  <br/>
        I'm Ghita ")
      </SectionTitle>
      <SectionText>
        Technologically and Civically engaged.
      </SectionText>
      <Button onClick={()=> window.location ="mailto:bouzian.ghita@lycee-descartes.ma"}>Contact me</Button>
    </LeftSection>

  </Section>
);

export default Hero;