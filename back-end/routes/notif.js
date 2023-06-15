import express from "express";
import { createNotif } from '../controller/notif.js'
import { createSub } from "../novu/novu.js";

const router = express.Router();

router.post('/create', createNotif)
router.post('/createSub',createSub)

export default router;