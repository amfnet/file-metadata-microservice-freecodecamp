import { FileData } from "./interfaces";

export function formatInfoService(
	file: Express.Multer.File | undefined
): FileData | null {
	if (file) {
		return {
			name: file.originalname,
			type: file.mimetype,
			size: file.size,
		};
	}

	return null;
}
