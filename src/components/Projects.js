import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pixel from '../images/pixel.png'
import Ticket from '../images/ticket.png'
import Down2Meet from '../images/down2meet.png'
import Insight from '../images/Insight.png'
import Housing from '../images/Housing.png'
import Vision from '../images/vision.png'
import ML from '../images/ml.png'
import Movie from '../images/movie.png'


const Projects = () => {
  return (
    <div className='projects'>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Ticket}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px'}}>
          <Typography variant="h6" component="div">
            Ticket Price Tracker
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A Chrome extension that monitors Ticketmaster concert prices and sends email alerts when they fall below a specified threshold
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Down2Meet}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px'}}>
          <Typography variant="h6" component="div">
            Down2Meet
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A social platform for planning meetups with friends, where you can post or join hangouts and customize them for specific groups.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/down2meet" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://down2meet.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Visit
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Insight}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px'}}>
          <Typography variant="h6" component="div">
            Insight UBC
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', height: 80 }}>
          A web application for querying datasets related to UBC courses and buildings.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/UBC-Course-and-Building-Finder" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://www.youtube.com/watch?v=rLJ3FrHxicU" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Demo
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Pixel}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '1px'}}>
          <Typography variant="h6" component="div">
            PixelMaze
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Data Structures and Algorithms assignments focused on advanced flood fill algorithms, image processing, and compression.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/PixelMaze" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Housing}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px'}}>
          <Typography variant="h6" component="div">
            Student Housing Manager
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          An app modeling the UBC Housing system, allowing for management of resident information and housing applications.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/Student-Residence-Manager" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Vision}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '1px'}}>
          <Typography variant="h6" component="div">
            Computer Vision
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Computer vision class assignments covering image filtering, face detection, image blending, panorama stitching, and deep learning
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/Computer-Vision" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={ML}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px'}}>
          <Typography variant="h6" component="div">
            Machine Learning
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Applied machine learning class assignments, involving training models, data preprocessing, word embeddings, and time series analysis.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/CS330-AppliedMachineLearning" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 270, maxHeight: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Movie}
        />
        <CardContent sx={{paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px', paddingRight: '0px'}}>
          <Typography variant="h6" component="div">
            Movie Tracker
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', height: 80 }}>
          A movie tracker app inspired by Letterboxd, for keeping track of movies you want to watch and have watched.
          </Typography>
        </CardContent>
        <CardActions sx={{padding: '0px' }}>
          <Button size="small">
            <a href="https://github.com/Vihangip/MovieTrackerApp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Repo
            </a>
          </Button>
          <Button size="small" style={{ margin: 0 }}>
            <a href="https://youtu.be/sSf0PkH3P5w?si=qDMy4SG70q5Xmxw7p" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Demo
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Projects;