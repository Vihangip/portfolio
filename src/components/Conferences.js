import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Conference from '../images/conference.jpg'

const Conferences = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 800, maxHeight: 1000 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={Conference}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '10px', height: '200px'}}>
          <Typography variant="h5" component="div" sx={{ marginBottom: '6px' }}>
            Can-CWiC 2024
          </Typography>
          <Typography variant="h8" component="div" sx={{ marginBottom: '6px' }}>
            📍 Toronto, Ontario
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            I had the honor of representing The University of British Columbia at the 14th Annual Canadian Celebration of Women in Computing Conference
            at York University in Toronto. I was fortunate to be one of the 12 fully sponsored students to attend, thanks to UBC's Department of Computer 
            Science and the Committee for Outreach, Diversity, and Equity (CODE).

            During the conference, I learned so much from the career journeys of women in leadership roles across various industries, 
            including Electronic Arts (EA), CGI, RBC, Amazon Web Services (AWS), and BMO. I gained insights into navigating a tech career as a woman and 
            explored topics like GenAI, data science and cybersecurity. The highlight for me was connecting with supportive peers from all over Canada—the atmosphere was inspiring, 
            and I feel very lucky to have been part of it.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conferences;