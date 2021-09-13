import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const projects = {
  "Maze Generator": {
    "Description": "This is a Maze Generator written in Java. The Maze Generator create and solves a maze of any given size using Depth first search",
    "LinkToCode": "https://github.com/ameet2r/Maze_Generator",
    "LinkToDemo": "https://ameet2r.github.io/Maze_Generator/"
  },
  "String Checker": {
    "Description": "This is a tool to compare equivalency of two strings. Such a tool is helpful when comparing SHA keys to ensure that the software you are downloading has not been tampered with.",
    "LinkToCode": "https://github.com/ameet2r/StringChecker",
    "LinkToDemo": "https://ameet2r.github.io/StringChecker/"
  },
};

export default function Homepage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Ameet Toor
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Below are a few of my projects that I found helpful or interesting.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {
              Object.keys(projects).map((project, index) => (
                <Grid item key={project} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project}
                      </Typography>
                      <Typography>
                        {projects[project]["Description"]}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" href={projects[project]["LinkToCode"]}>
                        Code
                      </Button>
                      <Button size="small" color="primary" href={projects[project]["LinkToDemo"]}>
                        Demo
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

