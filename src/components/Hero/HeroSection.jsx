import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Avatar
} from '@mui/material';
import { Email, GetApp } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(12, 0, 8),
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
  },
  heroContent: {
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: '0 auto',
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 300,
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: theme.spacing(4),
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: theme.spacing(4),
    lineHeight: 1.6,
    color: theme.palette.primary.contrastText,
  },
  buttonContainer: {
    display: 'flex',
    gap: theme.spacing(2),
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(1.5, 4),
    fontSize: '1.1rem',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  secondaryButton: {
    borderColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1.5, 4),
    fontSize: '1.1rem',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

const HeroSection = ({ onContactClick }) => {
  const classes = useStyles();

  const scrollToContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={classes.heroSection}>
      <Container maxWidth="lg">
        <div className={classes.heroContent}>
          <Avatar
            className={classes.avatar}
            src="/503229720_122120607614842262_7867287881405528820_n.jpg"
            alt="Ameet Toor"
          >
            AT
          </Avatar>
          
          <Typography variant="h1" className={classes.title}>
            Ameet Toor
          </Typography>
          
          <Typography variant="h4" className={classes.subtitle}>
            Full-Stack Software Engineer
          </Typography>
          
          <Typography variant="body1" className={classes.description}>
            I'm a software developer who specializes in Python, React, Java, and Scala, with a track record of building scalable, user-centered systems. My work includes developing automation tools that significantly reduce data validation time, creating React applications that improve accessibility, and delivering services that ensure system reliability during large-scale migrations. With experience spanning consulting, insurance, and enterprise platforms, I focus on crafting solutions that are efficient, maintainable, and impactful for both technical teams and end users.
          </Typography>
          
          <Box className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.primaryButton}
              startIcon={<Email />}
              onClick={scrollToContact}
              size="large"
            >
              Contact Me
            </Button>
            
            <Button
              variant="outlined"
              className={classes.secondaryButton}
              startIcon={<GetApp />}
              size="large"
              href="#projects"
            >
              View Projects
            </Button>
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;