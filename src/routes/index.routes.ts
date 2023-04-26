import { Router } from "express";
import { filesRouter } from "../components/files/routes";

export const router = Router();

router.use("/api", filesRouter);
