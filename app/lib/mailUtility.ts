import nodemailer from "nodemailer";

interface MailOptions {
  to: string;
  subject: string;
  text: string;
}

export const sendMail = async (
  { to, subject, text }: MailOptions,
  p0?: string,
  p1?: string
): Promise<void> => {
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);

  try {
    // Create a transporter using your email service provider
    let transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password if 2FA is enabled
      },
      debug: true, // Enable debugging
      logger: true, // Log to console
    });

    // Set up email options
    let mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to, // Recipient address
      subject, // Subject line
      text, // Plain text body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
