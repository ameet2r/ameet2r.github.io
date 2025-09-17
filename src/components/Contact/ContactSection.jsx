import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  Box
} from '@mui/material';
import ContactForm from './ContactForm.jsx';

const useStyles = makeStyles((theme) => ({
  contactSection: {
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.default,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  sectionSubtitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    color: theme.palette.text.primary,
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: theme.spacing(6),
    lineHeight: 1.6,
  },
}));

const ContactSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.contactSection} id="contact">
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.sectionTitle}>
          Let's Work Together
        </Typography>
        
        <Typography variant="h6" className={classes.sectionSubtitle}>
          Ready to bring your project to life? I'd love to hear about your ideas and provide you with a detailed quote. 
          Fill out the form below and I'll get back to you within 24 hours.
        </Typography>
        
        <ContactForm />
      </Container>
    </section>
  );
};

export default ContactSection;