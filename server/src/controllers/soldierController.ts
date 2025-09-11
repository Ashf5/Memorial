
import { getSoldierByIdDB, getSoldiersDB, getSoldiersPaginatedDB } from "../models/soldierModels";
import { Request, Response } from "express";


// Gets paginated soldiers, if no query params then defaults to first page with 20
export const getSoldiersPaginated = async (req:Request, res:Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const soldiers = await getSoldiersPaginatedDB(page, limit);
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