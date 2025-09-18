
import { addDeed, getTotalDeeds } from "../controllers/deedController";
import { getNumberSoldiers, getSoldierById, getSoldiersPaginated } from "../controllers/soldierController";
import { Router } from "express";

export const router = Router();

// Gets soldiers, paginated with page and limit. Defaults to 20 per page. Also takes a query parameter
router.get('/soldiers', getSoldiersPaginated);

// Gets number of soldiers in the database
router.get('/soldiers/count', getNumberSoldiers);

// Gets soldier by id.
router.get('/soldiers/:id', getSoldierById);

// adds a good deed
router.post('/deeds', addDeed);

// gets total number of deeds
router.get('/deeds', getTotalDeeds);


