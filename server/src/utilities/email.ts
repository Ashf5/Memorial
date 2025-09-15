
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { getSoldierByIdDB } from "../models/soldierModels";
import { Soldier } from "../types/soldierType";

const mailerSend = new MailerSend({
    apiKey: process.env.APIKEY as string,
});

const SERVERDOMAIN = process.env.SERVERDOMAIN as string;
const sentFrom = new Sender(SERVERDOMAIN, "Fallen Soldiers Memorial");

// Sends a confirmation email to provided email address
export async function sendConfirmationEmail(userEmail: string, deed: string, soldier_id: string) {
    const recipients = [
        new Recipient(userEmail, "Deed Donor")
    ];

    // get soldier details
    let soldier: undefined | Soldier;
    try {
        soldier = await getSoldierByIdDB(Number(soldier_id))
    }
    catch (e) {

    }
    

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("Good Deed Confirmation")
        .setHtml(`<h3><strong>Thank you for committing to do a good deed!</strong><h3><p>You committed to ${deed} for ${soldier?.name || soldier_id}`);
    try {
        await mailerSend.email.send(emailParams);
        return 'success';
    }
    catch(e) {
        return 'failed';
    }
    
}