import { Router } from "express";
import { creteRecord, deleteRecord, getRecord, getRecords, updateRecord } from "../controllers/carController.js";

const router = Router();
// subroutes til /api/cars
router.get("/", getRecords);
router.get("/:id", getRecord);
router.post("/", creteRecord);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);


export const carRoutes = router;