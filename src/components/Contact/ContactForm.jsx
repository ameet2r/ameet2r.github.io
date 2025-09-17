import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { Send } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  formCard: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    fontWeight: 600,
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    padding: theme.spacing(1.5, 4),
    fontSize: '1.1rem',
    fontWeight: 600,
    marginTop: theme.spacing(2),
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  alertContainer: {
    marginBottom: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    control
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budget: '',
      description: '',
      timeline: ''
    }
  });

  const projectType = watch('projectType');
  const budget = watch('budget');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate required select fields
    if (!data.projectType) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a project type.'
      });
      setIsSubmitting(false);
      return;
    }

    if (!data.budget) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a budget range.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.' });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={classes.formCard}>
      <CardContent>
        <Typography variant="h4" className={classes.formTitle}>
          Get a Quote for Your Project
        </Typography>

        {submitStatus && (
          <Box className={classes.alertContainer}>
            <Alert severity={submitStatus.type}>
              {submitStatus.message}
            </Alert>
          </Box>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                className={classes.formField}
                {...register('name', { 
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                className={classes.formField}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company (Optional)"
                variant="outlined"
                className={classes.formField}
                {...register('company')}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone (Optional)"
                variant="outlined"
                className={classes.formField}
                {...register('phone')}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" className={classes.formField}>
                <InputLabel>Project Type</InputLabel>
                <Select
                  label="Project Type"
                  value={projectType || ''}
                  onChange={(e) => setValue('projectType', e.target.value)}
                  error={!!errors.projectType}
                >
                  <MenuItem value="web-application">Web Application</MenuItem>
                  <MenuItem value="api-development">API Development</MenuItem>
                  <MenuItem value="frontend-modernization">Frontend Modernization</MenuItem>
                  <MenuItem value="cloud-deployment">Cloud Deployment</MenuItem>
                  <MenuItem value="consultation">Technical Consultation</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {errors.projectType && (
                  <Typography variant="caption" color="error" style={{ marginTop: 4 }}>
                    {errors.projectType.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" className={classes.formField}>
                <InputLabel>Budget Range</InputLabel>
                <Select
                  label="Budget Range"
                  value={budget || ''}
                  onChange={(e) => setValue('budget', e.target.value)}
                  error={!!errors.budget}
                >
                  <MenuItem value="under-5k">Under $5,000</MenuItem>
                  <MenuItem value="5k-15k">$5,000 - $15,000</MenuItem>
                  <MenuItem value="15k-30k">$15,000 - $30,000</MenuItem>
                  <MenuItem value="30k-50k">$30,000 - $50,000</MenuItem>
                  <MenuItem value="over-50k">Over $50,000</MenuItem>
                  <MenuItem value="discuss">Let's Discuss</MenuItem>
                </Select>
                {errors.budget && (
                  <Typography variant="caption" color="error" style={{ marginTop: 4 }}>
                    {errors.budget.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Description"
                multiline
                rows={4}
                variant="outlined"
                className={classes.formField}
                placeholder="Please describe your project requirements, timeline, and any specific technologies you'd like to use..."
                {...register('description', { 
                  required: 'Project description is required',
                  minLength: { value: 20, message: 'Please provide more details (at least 20 characters)' }
                })}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Timeline"
                variant="outlined"
                className={classes.formField}
                placeholder="When do you need this project completed?"
                {...register('timeline')}
              />
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submitButton}
                  disabled={isSubmitting}
                  startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                >
                  {isSubmitting ? (
                    <span className={classes.loadingContainer}>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Quote Request'
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;