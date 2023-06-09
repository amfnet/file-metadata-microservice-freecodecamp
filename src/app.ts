import express, { Express } from "express";
import cors from "cors";
import { router } from "./routes/index.routes";
import path from "path";

class App {
	private server: Express;
	port: number;

	constructor(pPort: number = 3000) {
		this.server = express();
		this.port = pPort;
		this.server.use(cors());
		this.middlewares();
		this.server.use(router);
	}

	middlewares() {
		this.server.set("views", path.join(__dirname, "views"));
		this.server.set("view engine", "ejs");
	}

	listen(callback: () => void): void {
		this.server.listen(this.port, callback);
	}
}

export { App };
