import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Web,
  Api,
  Smartphone,
  CloudQueue,
  CheckCircle
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  servicesSection: {
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.paper,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  sectionSubtitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    color: theme.palette.text.secondary,
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: theme.spacing(6),
  },
  serviceCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    border: `2px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[12],
      borderColor: theme.palette.primary.main,
    },
  },
  serviceIcon: {
    fontSize: '3.5rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  serviceTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  serviceDescription: {
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  serviceFeatures: {
    marginTop: 'auto',
  },
  featureItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  featureIcon: {
    color: theme.palette.success.main,
    minWidth: '32px',
  },
  featureText: {
    margin: 0,
    '& .MuiListItemText-primary': {
      fontSize: '0.9rem',
      fontWeight: 500,
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    padding: theme.spacing(3),
  },
}));

const servicesData = [
  {
    icon: <Web />,
    title: 'Full-Stack Web Applications',
    description: 'Complete web application development from frontend to backend, including responsive design, user authentication, and database integration.',
    features: [
      'React frontends',
      'RESTful API development',
      'Database design & optimization',
      'User authentication & security',
      'Responsive mobile-first design'
    ]
  },
  {
    icon: <Api />,
    title: 'API & Microservices',
    description: 'Design and build scalable APIs and microservices architectures that can handle high traffic and integrate seamlessly with existing systems.',
    features: [
      'RESTful & GraphQL APIs',
      'Microservices architecture',
      'API documentation & testing',
      'Third-party integrations',
      'Performance optimization'
    ]
  },
  {
    icon: <Smartphone />,
    title: 'Frontend Modernization',
    description: 'Transform legacy applications with modern frontend technologies, improving user experience and maintainability.',
    features: [
      'Legacy system modernization',
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Cross-browser compatibility',
      'Performance optimization'
    ]
  },
  {
    icon: <CloudQueue />,
    title: 'Cloud Solutions & DevOps',
    description: 'Deploy and scale applications in the cloud with proper CI/CD pipelines, monitoring, and infrastructure as code.',
    features: [
      'Cloud deployment (AWS, Azure, GCP)',
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Monitoring & logging',
      'Scalability & load balancing'
    ]
  }
];

const ServicesSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.servicesSection} id="services">
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.sectionTitle}>
          Services I Offer
        </Typography>
        
        <Typography variant="h6" className={classes.sectionSubtitle}>
          With over seven years of experience specializing in Python, React, Java, and Scala,
          I provide comprehensive software development services that improve efficiency, reliability, and user experience.
        </Typography>
        
        <Grid container spacing={4}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className={classes.serviceCard}>
                <CardContent className={classes.cardContent}>
                  <Box className={classes.serviceIcon}>
                    {service.icon}
                  </Box>
                  
                  <Typography variant="h5" className={classes.serviceTitle}>
                    {service.title}
                  </Typography>
                  
                  <Typography variant="body2" className={classes.serviceDescription}>
                    {service.description}
                  </Typography>
                  
                  <List className={classes.serviceFeatures}>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} className={classes.featureItem}>
                        <ListItemIcon className={classes.featureIcon}>
                          <CheckCircle fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          className={classes.featureText}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ServicesSection;