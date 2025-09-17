import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip
} from '@mui/material';
import {
  Code,
  Storage,
  Cloud,
  DeviceHub
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  skillsSection: {
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.default,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    fontWeight: 700,
  },
  skillCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[8],
    },
  },
  skillIcon: {
    fontSize: '3rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  skillTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  skillDescription: {
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },
  skillChips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
  },
  skillChip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
  },
}));

const skillsData = [
  {
    icon: <Code />,
    title: 'Frontend Development',
    description: 'Creating responsive, modern user interfaces with React and modern JavaScript technologies.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'SPA']
  },
  {
    icon: <Storage />,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs with Python, Java, and Scala.',
    technologies: ['Python', 'Java', 'Scala', 'Node.js', 'REST APIs', 'Microservices', 'FastAPI']
  },
  {
    icon: <DeviceHub />,
    title: 'Automation & Tools',
    description: 'Developing automation tools and services that improve efficiency and reduce processing times.',
    technologies: ['Data Processing', 'API Migrations', 'System Integration', 'Performance Optimization']
  },
  {
    icon: <Cloud />,
    title: 'Enterprise Solutions',
    description: 'Building scalable, reliable systems for consulting, insurance, and enterprise platforms.',
    technologies: ['Enterprise Architecture', 'System Reliability', 'Database Design', 'Cloud Deployment']
  }
];

const SkillsSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.skillsSection} id="skills">
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.sectionTitle}>
          Skills & Technologies
        </Typography>
        
        <Grid container spacing={4}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className={classes.skillCard}>
                <CardContent className={classes.cardContent}>
                  <Box className={classes.skillIcon}>
                    {skill.icon}
                  </Box>
                  
                  <Typography variant="h5" className={classes.skillTitle}>
                    {skill.title}
                  </Typography>
                  
                  <Typography variant="body2" className={classes.skillDescription}>
                    {skill.description}
                  </Typography>
                  
                  <Box className={classes.skillChips}>
                    {skill.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        className={classes.skillChip}
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SkillsSection;