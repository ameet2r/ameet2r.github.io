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

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #3f51b5; margin-bottom: 30px; text-align: center; border-bottom: 2px solid #3f51b5; padding-bottom: 15px;">
            New Quote Request
          </h1>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; margin-bottom: 15px; font-size: 18px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #3f51b5; text-decoration: none;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
                <td style="padding: 8px 0; color: #333;">${company}</td>
              </tr>
              ` : ''}
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #3f51b5; text-decoration: none;">${phone}</a></td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; margin-bottom: 15px; font-size: 18px;">Project Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Project Type:</td>
                <td style="padding: 8px 0; color: #333;">${formatProjectType(projectType)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Budget:</td>
                <td style="padding: 8px 0; color: #333;">${formatBudget(budget)}</td>
              </tr>
              ${timeline ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Timeline:</td>
                <td style="padding: 8px 0; color: #333;">${timeline}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; margin-bottom: 15px; font-size: 18px;">Project Description</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #3f51b5;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${description.replace(/\n/g, '<br>')}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              This quote request was sent from your portfolio website.
            </p>
          </div>
        </div>
      </div>
    `;

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
      html: emailHtml,
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