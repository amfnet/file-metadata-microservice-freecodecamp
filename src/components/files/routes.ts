import { Router } from "express";
import multer from "multer";
import { postUploadFile } from "./controller";

export const filesRouter = Router();

filesRouter.post("/fileanalyse", multer().single("upfile"), postUploadFile);
