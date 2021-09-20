import {} from "dotenv/config";
import express from "express";
import path from "path";
import { getMember, getMembers } from "./controllers/member.controller.js";
import { getVillages } from "./controllers/village.controller.js";

const app = express();
const API_PREFIX = "/api/";

app.get(`/`, (req, res) =>
    res.sendFile(path.resolve(process.cwd(), "src/pages/index.html"))
);
app.get(`${API_PREFIX}members`, getMembers);
app.get(`${API_PREFIX}members/:name`, getMember);
app.get(`${API_PREFIX}villages`, getVillages);

app.listen(process.env.PORT, () => {
    console.log("Server is running... at: " + process.env.PORT);
});
