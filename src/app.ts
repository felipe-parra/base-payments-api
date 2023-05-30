import express from "express";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes";

const app = express();

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Middlewares
app.use(cors());
app.use(helmet());

// Routes
app.use(routes);

export default app;
