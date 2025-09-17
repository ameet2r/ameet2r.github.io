import React from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import all the new components
import HeroSection from './components/Hero/HeroSection.jsx';
import SkillsSection from './components/Skills/SkillsSection.jsx';
import ServicesSection from './components/Services/ServicesSection.jsx';
import ProjectsSection from './components/Projects/ProjectsSection.jsx';
import ContactSection from './components/Contact/ContactSection.jsx';
import Footer from './components/Footer/Footer.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
  },
}));

const Homepage = () => {
  const classes = useStyles();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.main}>
        <HeroSection onContactClick={scrollToContact} />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;
