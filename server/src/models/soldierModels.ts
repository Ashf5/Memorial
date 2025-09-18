
import {db} from '../config/config';
import type { Soldier } from '../types/soldierType';


// model to get all soldiers, with all their details 

export const getSoldiersDB = async ():Promise<Soldier[]> => {
    try {
        let soldiers:Soldier[] = await db('soldiers').select();
        return soldiers;
    }catch(e) {
        console.log(e);
        throw e;
    }
    
}


// Gets a single soldier by id and returns it in an object. If doesn't exist it returns undefined
export const getSoldierByIdDB = async(id:number):Promise<Soldier|undefined> => {
    try {
        let soldier:Soldier | undefined = await db('soldiers').select().where({id:id}).first();
        return soldier
    }catch(e) {
        console.log(e);
        throw e;
    }
}


// Returns paginated soldiers, has default params set to twenty a page
export const getSoldiersPaginatedDB = async(pageNumber:number = 1, perPage:number = 20): Promise<Soldier[]> => {
    let offset = (pageNumber - 1) * perPage;
    try {
        let soldiers: Soldier[] = await db('soldiers').select().offset(offset).limit(perPage);
        return soldiers;
    }catch(e) {
        console.log(e);
        throw e;
    }
    
}


// Returns a list of soldiers matching the search query
export const getSoldiersSearchDB = async(query:string, pageNumber:number = 1, perPage:number = 20): Promise<Soldier[]> => {
    let offset = (pageNumber - 1) * perPage;

    try {
        const soldiers: Soldier[] = await db('soldiers').select().whereILike('name', `%${query}%`).offset(offset).limit(perPage);
        return soldiers;
    }
    catch(e) {
        console.log(e);
        throw e;
    }

}

// returns the total count of soldiers in the database
export const getNumberSoldiersDB = async() => {
    const number = await db('soldiers').count();
    return number[0].count;
}
