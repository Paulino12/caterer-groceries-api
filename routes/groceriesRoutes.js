import { Router } from "express";
import {
    welcome, getAllGroceries, searchGroceries
} from "../controllers/groceriesControllers.js"

const router = Router()

// welcome
router.get('/', welcome)
// get all groceries
router.get('/groceries', getAllGroceries)
// search groceries
router.get('/search/:searchQuery', searchGroceries)

export default router