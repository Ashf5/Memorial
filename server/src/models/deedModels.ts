import { Deed } from "../types/deedType";
import { db } from "../config/config";


// takes in a good deed and adds to database, email is optional.
export async function addDeedDB({deed, soldier_id, email}:Deed): Promise<string> {

    

    // use transaction to update total count and add the deed
    const inserted = await db.transaction(async (trx) => {
        let returnedDeed;
        if(email) {
            returnedDeed = await trx('deeds').insert({deed, soldier_id, email}, ['deed']);
        }
        else {
            returnedDeed = await trx('deeds').insert({deed, soldier_id}, ['deed']);
        }
        const total = await trx('total_deeds').select('total_count').first();
        await trx('total_deeds').update({'total_count': Number(total.total_count) + 1})
        return returnedDeed;
    })
    
    try {
        const response = inserted[0].deed;
        return response;
    } 
    catch(e) {
        throw e;
    }
    
}


export async function getTotalDeedsDB() {
    const total = await db('total_deeds').select('total_count').first();
    return Number(total.total_count);
}
