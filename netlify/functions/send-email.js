import { Resend } from 'resend';
// Remove import that's causing errors
// import { CONTACT_INFO } from '../../src/config/constants';

export const handler = async function(event, context) {
  console.log('Function triggered');
  
  // Define contact info directly in the function
  const PHONE_DISPLAY = "(706) 897-7012";
  
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    console.log('Request body:', event.body);
    const data = JSON.parse(event.body);
    console.log('Parsed data:', data);
    
    // Log API Key (masked)
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key available:', apiKey ? `${apiKey.substring(0, 5)}...` : 'Missing');
    
    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format appointment date and collect all form data
    const formattedDate = data.preferredDate ? new Date(data.preferredDate).toLocaleDateString() : 'Not specified';
    
    // Create HTML content for the email
    const htmlContent = `
      <h1>New Appointment Request</h1>
      <h2>Client Information:</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      
      <h2>Pet Information:</h2>
      <p><strong>Pet Name:</strong> ${data.petName}</p>
      <p><strong>Pet Type:</strong> ${data.petType}</p>
      <p><strong>Primary Concern:</strong> ${data.concern}</p>
      
      <h2>Appointment Details:</h2>
      <p><strong>Appointment Type:</strong> ${data.appointmentType}</p>
      <p><strong>Preferred Date:</strong> ${formattedDate}</p>
      <p><strong>Preferred Time:</strong> ${data.preferredTime || 'Not specified'}</p>
      
      <h2>Additional Information:</h2>
      <p>${data.message || 'None provided'}</p>
      
      <h2>Source:</h2>
      <p><strong>How they heard about us:</strong> ${data.hearAboutUs || 'Not specified'}</p>
    `;

    // Create plain text version
    const textContent = `
      New Appointment Request
      
      CLIENT INFORMATION:
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone}
      
      PET INFORMATION:
      Pet Name: ${data.petName}
      Pet Type: ${data.petType}
      Primary Concern: ${data.concern}
      
      APPOINTMENT DETAILS:
      Appointment Type: ${data.appointmentType}
      Preferred Date: ${formattedDate}
      Preferred Time: ${data.preferredTime || 'Not specified'}
      
      ADDITIONAL INFORMATION:
      ${data.message || 'None provided'}
      
      SOURCE:
      How they heard about us: ${data.hearAboutUs || 'Not specified'}
    `;
    
    console.log('Sending email to staff');
    
    // Send notification email to staff
    const staffResult = await resend.emails.send({
      from: 'Paw Power Rehab <appointments@pawpowerrehab.com>',
      to: ['drjackson@pawpowerrehab.com', 'admin@pawpowerrehab.com'],
      subject: `New Appointment Request: ${data.firstName} ${data.lastName} for ${data.petName}`,
      html: htmlContent,
      text: textContent,
      // Optional headers to prevent email threading
      headers: {
        'X-Entity-Ref-ID': `appointment-${Date.now()}`,
      }
    }).catch(error => {
      console.error('Error sending staff email:', error);
      throw error;
    });
    
    console.log('Staff email result:', staffResult);
    
    // Send confirmation email to client
    const clientHtml = `
      <h1>Thank You for Your Appointment Request!</h1>
      
      <p>Dear ${data.firstName},</p>
      
      <p>We have received your appointment request for ${data.petName}. Our team will review your information and get back to you within 24 hours to confirm your appointment.</p>
      
      <h2>Your Request Details:</h2>
      <ul>
        <li><strong>Pet:</strong> ${data.petName} (${data.petType})</li>
        <li><strong>Reason:</strong> ${data.concern}</li>
        <li><strong>Requested Service:</strong> ${data.appointmentType}</li>
        ${data.preferredDate ? `<li><strong>Preferred Date:</strong> ${new Date(data.preferredDate).toLocaleDateString()}</li>` : ''}
      </ul>
      
      <p>If you need to make any changes to your request or have any questions, please don't hesitate to contact us at ${PHONE_DISPLAY}.</p>
      
      <p>Thank you for choosing Paw Power Rehabilitation!</p>
      
      <p>Best regards,<br>
      Dr. Jackson and the Paw Power Team</p>
    `;
    
    const clientText = `
      Thank You for Your Appointment Request!
      
      Dear ${data.firstName},
      
      We have received your appointment request for ${data.petName}. Our team will review your information and get back to you within 24 hours to confirm your appointment.
      
      YOUR REQUEST DETAILS:
      - Pet: ${data.petName} (${data.petType})
      - Reason: ${data.concern}
      - Requested Service: ${data.appointmentType}
      ${data.preferredDate ? `- Preferred Date: ${new Date(data.preferredDate).toLocaleDateString()}` : ''}
      
      If you need to make any changes to your request or have any questions, please don't hesitate to contact us at ${PHONE_DISPLAY}.
      
      Thank you for choosing Paw Power Rehabilitation!
      
      Best regards,
      Dr. Jackson and the Paw Power Team
    `;
    
    console.log('Sending email to client:', data.email);
    
    const clientResult = await resend.emails.send({
      from: 'Paw Power Rehab <appointments@pawpowerrehab.com>',
      to: [data.email],
      subject: `Appointment Request Received - Paw Power Rehabilitation`,
      html: clientHtml,
      text: clientText,
      headers: {
        'X-Entity-Ref-ID': `confirmation-${Date.now()}`,
      }
    }).catch(error => {
      console.error('Error sending client email:', error);
      throw error;
    });
    
    console.log('Client email result:', clientResult);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', id: staffResult.id }),
    };
  } catch (error) {
    console.error('Error in function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
}
