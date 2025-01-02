import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Geotab from '../images/Geotab.png'
import Seaspan from '../images/seaspan.jpg'

import Typography from '@mui/material/Typography';

const Experience = () => {
  return (
    <div style={{width: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector style={{ backgroundColor: 'white', height: '30px' }} />
          <TimelineDot style={{ backgroundColor: 'white', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Geotab} alt="Geotab" style={{ width: '90px', height: '80px'}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '0px', px: 2, mt: '65px'}}>
          <Typography variant="h6" component="span">
            Software Developer Intern
          </Typography>
          <Typography>Jan 2025 - Present</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineConnector style={{ backgroundColor: 'white', height: '120px' }} />
          <TimelineDot style={{ backgroundColor: 'white', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Seaspan} alt="Seaspan" style={{ width: '95px', height: '55px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '0px', px: 2, mt: '160px'}}>
          <Typography variant="h6" component="span">
            Full Stack Developer Intern
          </Typography>
          <Typography>Jan 2024 - Aug 2024</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    </div>
  );
};

export default Experience;