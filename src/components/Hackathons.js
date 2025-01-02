import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Echo from '../images/echo.png'
import Pizza from '../images/pizza.jpg'
import Aritzia from '../images/aritzia.jpg'
import nw from '../images/Housing.png'



const Hackathons = () => {
  return (
    <div className='hackathons'>
      <Card sx={{ maxWidth: 270, maxHeight: 500 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={nw}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px', height: '150px'}}>
          <Typography variant="h5" component="div" sx={{ marginBottom: '6px' }}>
            NW Hacks 2025
          </Typography>
          <Typography variant="h7" component="div" sx={{ marginBottom: '6px' }}>
            Echo Empathy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A platform connecting people with similar mental health experiences through intelligent Reddit searches.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/EchoEmpathy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://down2meet.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Visit
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://down2meet.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              DevPost
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 500 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Echo}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px', height: '150px'}}>
          <Typography variant="h5" component="div" sx={{ marginBottom: '6px' }}>
            NW Hacks 2024
          </Typography>
          <Typography variant="h7" component="div" sx={{ marginBottom: '6px' }}>
            Echo Empathy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', paddingTop: '4px' }}>
            A platform connecting people with similar mental health experiences through intelligent Reddit searches.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/EchoEmpathy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://devpost.com/software/echo-empathy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              DevPost
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 500 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Pizza}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px', height: '150px'}}>
          <Typography variant="h5" component="div" sx={{ marginBottom: '6px' }}>
            cmd-f 2023
          </Typography>
          <Typography variant="h7" component="div" sx={{ marginBottom: '6px' }}>
            Pizza at Home
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A disguised pizza delivery website allowing users to discretely report abuse and request urgent help.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/PizzaAtHome" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://vihangip.github.io/PizzaAtHome/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Visit
            </a>
          </Button>
          <Button size="small">
            <a href="https://devpost.com/software/pizza-at-home" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              DevPost
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 500 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Aritzia}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px', height: '150px'}}>
          <Typography variant="h5" component="div" sx={{ marginBottom: '6px' }}>
            girlCode × Aritzia 2023
          </Typography>
          <Typography variant="h7" component="div" sx={{ marginBottom: '6px' }}>
            Aritzia Stylist
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Replicating the "Clueless" experience with Aritzia's clothing to personalize and visualize outfits.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/Aritzia-Stylist-App" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://vihangip.github.io/Aritzia-Stylist-App/index.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Visit
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://devpost.com/software/aritzia-stylist" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              DevPost
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Hackathons;