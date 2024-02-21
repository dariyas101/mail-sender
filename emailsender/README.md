# Email Sender Application

This is a simple Node.js application that sends emails using Nodemailer.

## Usage

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Open the `app.js` file and update the SMTP configuration with your email provider's details.
4. Run the application using `node app.js`.
5. Check the console for any error messages or success messages indicating whether the email was sent successfully.

## SMTP Configuration

Make sure to update the SMTP configuration in the `app.js` file with your email provider's details:

- `host`: SMTP server host (e.g., smtp.gmail.com)
- `port`: Port for secure SMTP (SSL or TLS)
- `secure`: Set to `true` for SSL or `false` for TLS
- `auth.user`: Your email address
- `auth.pass`: Your email password or App Password if you have two-factor authentication (2FA) enabled

## Troubleshooting

If you encounter any issues with sending emails, refer to the troubleshooting section in the README file or consult the documentation of Nodemailer for more information.

