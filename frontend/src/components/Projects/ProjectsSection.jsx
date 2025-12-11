import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box
} from '@mui/material';
import { Code, Launch, GitHub } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  projectsSection: {
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
  projectCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[12],
    },
  },
  projectTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  projectDescription: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    flexGrow: 1,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  techChip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: '0.75rem',
    height: '24px',
  },
  cardActions: {
    padding: theme.spacing(2),
    paddingTop: 0,
    justifyContent: 'space-between',
  },
  actionButton: {
    fontWeight: 600,
  },
}));

const projectsData = [
  {
    title: 'Motorcycle Weather',
    description: 'Weather forecasting service providing detailed meteorological data for motorcycle enthusiasts and outdoor adventurers across US territories.',
    technologies: ['FastAPI', 'Python', 'Docker', 'React', 'Material-UI', 'JavaScript', 'SPA'],
    codeLink: '#',
    demoLink: 'https://weather.toorforge.com',
    highlights: ['FastAPI', 'Firebase/Firestore', 'Python', 'Docker', 'React']
  },
  {
    title: 'Workout Tracker',
    description: ' A full-stack fitness application that enables users to create custom workout plans, track exercises in real-time, and visualize progress through analytics dashboards. Built with React and FastAPI, the app features Firebase authentication, Firestore database integration, Garmin workout data import capabilities, and comprehensive progress tracking with interactive charts. Containerized with Docker and deployed on Railway for production-ready scalability.',
    technologies:  ["React", "Vite", "Material-UI (MUI)", "React Router", "Firebase Authentication", "Firebase Admin SDK", "Firestore", "MUI X-Charts",
  "Leaflet", "React-Leaflet", "Python", "FastAPI", "Pydantic", "Uvicorn", "Pytest", "Docker", "Docker Compose", "Nginx", "Railway",
  "Git", "JavaScript", "HTML", "CSS"],
    codeLink: '#',
    demoLink: 'https://workout.toorforge.com',
    highlights: ['FastAPI', 'Firebase/Firestore', 'Python', 'Docker', 'React']
  },
  {
    title: 'Maze Generator & Solver',
    description: 'An interactive maze generation and solving application built with Java. Demonstrates algorithmic thinking and problem-solving skills using Depth-First Search for both maze creation and pathfinding. Features customizable maze sizes and real-time visualization.',
    technologies: ['Java', 'Algorithms', 'DFS', 'GUI', 'Data Structures'],
    codeLink: 'https://github.com/ameet2r/Maze_Generator',
    demoLink: 'https://ameet2r.github.io/Maze_Generator/',
    highlights: ['Algorithm Implementation', 'Interactive Visualization', 'Performance Optimization']
  },
  {
    title: 'String Equivalency Checker',
    description: 'A security-focused tool for comparing string equivalency, particularly useful for SHA key verification and ensuring software integrity. Built with attention to security best practices and user experience.',
    technologies: ['JavaScript', 'Security', 'Cryptography', 'Web APIs', 'Responsive Design'],
    codeLink: 'https://github.com/ameet2r/StringChecker',
    demoLink: 'https://ameet2r.github.io/StringChecker/',
    highlights: ['Security Focus', 'Clean UI/UX', 'Cross-Platform']
  },
  {
    title: 'Professional Portfolio',
    description: 'This responsive portfolio website showcasing full-stack development capabilities. Built with React, Material-UI, and modern web technologies. Features contact form integration with email services and professional design patterns.',
    technologies: ['React', 'Material-UI', 'JavaScript', 'Responsive Design', 'Email Integration'],
    codeLink: 'https://github.com/ameet2r/ameet2r.github.io',
    demoLink: '#',
    highlights: ['Modern React Patterns', 'Professional Design', 'Contact Integration']
  }
];

const ProjectsSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.projectsSection} id="projects">
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.sectionTitle}>
          Featured Projects
        </Typography>
        
        <Typography variant="h6" className={classes.sectionSubtitle}>
          Here are some examples of my work that demonstrate my technical skills and problem-solving approach. 
          Each project showcases different aspects of software development and engineering best practices.
        </Typography>
        
        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card className={classes.projectCard}>
                <CardContent>
                  <Typography variant="h5" className={classes.projectTitle}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body2" className={classes.projectDescription}>
                    {project.description}
                  </Typography>
                  
                  <Box className={classes.techStack}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        className={classes.techChip}
                        size="small"
                      />
                    ))}
                  </Box>
                  
                  {project.highlights && (
                    <Box>
                      <Typography variant="subtitle2" style={{ fontWeight: 600, marginBottom: 8 }}>
                        Key Features:
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: 20, color: '#666' }}>
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} style={{ fontSize: '0.875rem', marginBottom: 4 }}>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </CardContent>
                
                <CardActions className={classes.cardActions}>
                  {project.codeLink && project.codeLink !== '#' && (
                    <Button
                      size="small"
                      color="primary"
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHub />}
                      className={classes.actionButton}
                    >
                      Code
                    </Button>
                  )}
                  <Button
                    size="small"
                    color="primary"
                    href={project.demoLink}
                    target={project.demoLink === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    startIcon={<Launch />}
                    className={classes.actionButton}
                    disabled={project.demoLink === '#'}
                  >
                    {project.demoLink === '#' ? 'Live Site' : 'Demo'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ProjectsSection;