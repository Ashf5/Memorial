
import { getSoldierById, getSoldiersPaginated } from "../controllers/soldierController";
import { Router } from "express";

export const router = Router();

// Gets soldiers, paginated with page and limit. Defaults to 20 per page.
router.get('/soldiers', getSoldiersPaginated);

// Gets soldier by id.
router.get('/soldiers/:id', getSoldierById);