import { addDeedDB } from "../models/deedModels";
import { Request, Response } from "express";
import { sendConfirmationEmail } from "../utilities/email";


// adds a deed, does basic verification on the request
export async function addDeed(req:Request, res:Response) {
    const {deed, soldier_id, email} = req.body;
    if (!deed || !soldier_id) {
        return res.status(400).json({msg: 'deed and soldier_id are mandatory'});
    }
    const numId = Number(soldier_id);
    if (!numId) {
        return res.status(400).json({msg: 'soldier_id must be a number'});
    }

    try {
        const response = await addDeedDB({deed, soldier_id:numId, email});

        // if successful and email, send a confirmation email
        if (response && email) {
            sendConfirmationEmail(email);
        }

        return res.status(200).json({msg: `Deed created! ${response}`})
    }
    catch(e) {
        console.log(e);
        return res.status(500).json({msg: 'error occured while adding good deed'});
    }
}