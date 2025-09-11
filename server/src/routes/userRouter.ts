
import { addDeed } from "../controllers/deedController";
import { getSoldierById, getSoldiersPaginated } from "../controllers/soldierController";
import { Router } from "express";

export const router = Router();

// Gets soldiers, paginated with page and limit. Defaults to 20 per page. Also takes a query parameter
router.get('/soldiers', getSoldiersPaginated);

// Gets soldier by id.
router.get('/soldiers/:id', getSoldierById);


router.post('/deeds', addDeed);
