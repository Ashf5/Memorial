import { Deed } from "../types/deedType";
import { db } from "../config/config";


// takes in a good deed and adds to database, email is optional.
export async function addDeedDB({deed, soldier_id, email}:Deed): Promise<string> {
    let inserted;
    if(email) {
        inserted = await db('deeds').insert({deed, soldier_id, email}, ['deed']);
    }
    else {
        inserted = await db('deeds').insert({deed, soldier_id}, ['deed']);
    }
    try {
        const response = inserted[0].deed;
        return response;
    } 
    catch(e) {
        throw e;
    }
    
}
