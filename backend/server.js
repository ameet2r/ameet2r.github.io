const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Contact email function
const sendContactEmail = async (formData) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      projectType,
      budget,
      description,
      timeline
    } = formData;

    // Format project type for display
    const formatProjectType = (type) => {
      const types = {
        'web-application': 'Web Application',
        'api-development': 'API Development',
        'frontend-modernization': 'Frontend Modernization',
        'cloud-deployment': 'Cloud Deployment',
        'consultation': 'Technical Consultation',
        'other': 'Other'
      };
      return types[type] || type;
    };

    // Format budget for display
    const formatBudget = (budget) => {
      const budgets = {
        'under-5k': 'Under $5,000',
        '5k-15k': '$5,000 - $15,000',
        '15k-30k': '$15,000 - $30,000',
        '30k-50k': '$30,000 - $50,000',
        'over-50k': 'Over $50,000',
        'discuss': 'Let\'s Discuss'
      };
      return budgets[budget] || budget;
    };


    const emailText = `
New Quote Request

Contact Information:
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Project Details:
Project Type: ${formatProjectType(projectType)}
Budget: ${formatBudget(budget)}
${timeline ? `Timeline: ${timeline}` : ''}

Project Description:
${description}

---
This quote request was sent from your portfolio website.
    `;

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL, // Use Resend's default verified email or your own
      to: [process.env.CONTACT_EMAIL],
      subject: `New Quote Request from ${name} - ${formatProjectType(projectType)}`,
      text: emailText,
      replyTo: email,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      statusCode: error.statusCode,
      name: error.name
    });
    return { success: false, error: error.message };
  }
};

// API route
app.post('/api/contact', async (req, res) => {
  console.log('Received contact request:', req.body);
  try {
    const result = await sendContactEmail(req.body);

    if (result.success) {
      console.log('Email sent successfully');
      return res.status(200).json({ message: 'Email sent successfully' });
    } else {
      console.error('Failed to send email:', result.error);
      return res.status(500).json({ error: 'Failed to send email', details: result.error });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});