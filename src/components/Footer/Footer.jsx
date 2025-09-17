import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  Grid,
  Box,
  Link,
  IconButton
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(6, 0, 3),
    marginTop: 'auto',
  },
  footerContent: {
    marginBottom: theme.spacing(4),
  },
  footerTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  footerText: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  socialIcons: {
    display: 'flex',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  socialIcon: {
    color: theme.palette.primary.contrastText,
    '&:hover': {
      opacity: 0.8,
      transform: 'translateY(-2px)',
    },
    transition: 'all 0.3s ease',
  },
  divider: {
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 0.5,
    margin: theme.spacing(3, 0, 2),
  },
  copyright: {
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    fontSize: '0.875rem',
  },
  quickLinks: {
    '& a': {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      display: 'block',
      marginBottom: theme.spacing(1),
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} className={classes.footerContent}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.footerTitle}>
              Ameet Toor
            </Typography>
            <Typography variant="body2" className={classes.footerText}>
              Software developer with over seven years of experience specializing in Python, React, Java, and Scala.
              Building scalable, user-centered systems that improve efficiency and reliability across consulting,
              insurance, and enterprise platforms.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.footerTitle}>
              Quick Links
            </Typography>
            <Box className={classes.socialIcons}>
              <IconButton
                className={classes.socialIcon}
                href="https://linkedin.com/in/ameet-toor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                className={classes.socialIcon}
                href="https://github.com/ameet2r"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHub />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box 
          className={classes.divider} 
          component="hr" 
          style={{ border: 'none', height: '1px' }}
        />

        <Typography variant="body2" className={classes.copyright}>
          © {new Date().getFullYear()} Ameet Toor. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;