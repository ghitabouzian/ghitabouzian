import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2020, text: 'Participated in Steer Your Career program (95% score)', },
  { number: 2020, text: "Won 1st place in Injaz Al Maghrib's Innovation Camp"},
  { number: 2021, text: 'Won Best Mobile App in Neohacks Hackathon', },
  { number: 2021, text: 'Selected to participate in Math Olympiads', },
  
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>

        </Box>
      ))}

    </Boxes>
  </Section>
);

export default Acomplishments;
