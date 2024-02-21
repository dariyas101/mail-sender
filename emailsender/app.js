const nodemailer = require('nodemailer');

// Set up basic email configuration (SMTP details)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'dariya260205@gmail.com', 
        pass: 'xnnxgtdzkbiaoqwx'
    }
});

// Add a logger to see email sending process
transporter.verify(function(error, success) {
    if (error) {
        console.log('Error in verifying transporter:', error);
    } else {
        console.log('Transporter is ready to take our messages');
    }
});

// Enable debugging
transporter.on('log', console.log);

// Function to send email
const sendEmail = async (recipient, subject, message) => {
    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Test" <dariya260205@gmail.com>', 
            to: '221521@astanait.edu.kz', 
            subject: 'Test, tes, te, t',
            text: 'Faizolla agai'
        });

        console.log('Email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Call the email sending function with sample data
sendEmail('221521@astanait.edu.kz', 'Test Email', 'Assalamualeikum');