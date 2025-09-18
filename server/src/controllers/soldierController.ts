
import { getNumberSoldiersDB, getSoldierByIdDB, getSoldiersDB, getSoldiersPaginatedDB, getSoldiersSearchDB } from "../models/soldierModels";
import { Request, Response } from "express";
import { Soldier } from "../types/soldierType";


// Gets paginated soldiers, if no query params then defaults to first page with 20
export const getSoldiersPaginated = async (req:Request, res:Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const query = req.query.query as string;
        
        let soldiers:Soldier[];
        if (query) {
            soldiers = await getSoldiersSearchDB(query, page, limit);
        } else {
            soldiers = await getSoldiersPaginatedDB(page, limit);
        }
         
        if (soldiers.length === 0) {
            return res.status(404).json(soldiers);
        }

        return res.status(200).json(soldiers)

    }catch (e) {
        return res.status(500).json({msg: "Something went wrong."});
    }
    
}


export const getSoldierById = async (req:Request, res: Response) => {
    
    let id = Number(req.params.id);
    if (!id) {
        return res.status(400).json({msg: "Invalid id provided"});
    }
    try {
        let soldier = await getSoldierByIdDB(id);
        if(!soldier) {
            return res.status(404).json({msg: 'Soldier not found'});
        }
        return res.status(200).json(soldier);
    }
    catch(e) {
        return res.status(500).json({msg: "Something went wrong."});
    }
}

// function to get soldiers by search query
export const getSoldiersSearch = async (req:Request, res:Response) => {
    const {query, page, limit} = req.params;
    const pageNumber = Number(page)
    const pageLimit = Number(limit);

    try {
        const soldiers = await getSoldiersSearchDB(query, pageNumber, pageLimit);
        return res.status(200).json(soldiers);
    }
    catch(e) {
        return res.status(500).json({msg: 'An error occured while fetching soldiers'});
    }
}

export const getNumberSoldiers = async (req: Request, res: Response) => {
    try {
        const numSoldiers = await getNumberSoldiersDB();
        return res.status(200).json({count: numSoldiers});
    }
    catch(e) {
        return res.status(500).json({msg: 'Error fetching number of soldiers'});
    }
    
}