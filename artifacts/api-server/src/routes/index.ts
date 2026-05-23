import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import subscribeRouter from "./subscribe";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/contact", contactRouter);
router.use("/subscribe", subscribeRouter);

export default router;
