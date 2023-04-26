import { Request, Response } from "express";
import { formatInfoService } from "./service";

export function postUploadFile(req: Request, res: Response) {
	const { file } = req;
	const data = formatInfoService(file);

	if (data) {
		res.status(200).send(data);
		return;
	}
	res.status(400).send({ err: "Invalid request" });
}
