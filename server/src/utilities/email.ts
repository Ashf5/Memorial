
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
    apiKey: process.env.APIKEY as string,
});

const SERVERDOMAIN = process.env.SERVERDOMAIN as string;
const sentFrom = new Sender(SERVERDOMAIN, "Asher Fried");

// Sends a confirmation email to provided email address
export async function sendConfirmationEmail(userEmail: string) {
    const recipients = [
        new Recipient(userEmail, "Deed Donor")
    ];

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("Good Deed Confirmation")
        .setHtml("<strong>Thank you for committing to do a good deed!</strong>")
        .setText("Info: ");

    await mailerSend.email.send(emailParams);
}