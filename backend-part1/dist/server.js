"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const VehiculeController_1 = require("./controllers/VehiculeController");
const api_1 = require("./services/api");
class Server {
    constructor(port) {
        this.baseRoute = "/api";
        this.port = port;
    }
    start() {
        const server = http_1.default.createServer((req, res) => {
            if (req.url === `${this.baseRoute}/vehicule` && req.method === "GET") {
                (0, VehiculeController_1.getVehicules)(res);
            }
            else if (req.url.match(/\/api\/vehicule\/([0-9]+)/) && req.method === "GET") {
                const id = req.url.split("/")[3];
                (0, VehiculeController_1.getVehicule)(res, id);
            }
            else if (req.url === "/api/vehicule" && req.method === "POST") {
                (0, VehiculeController_1.addVehicule)(req, res);
            }
            else {
                (0, api_1.respond)(res, 404, "Route not found");
            }
        });
        server.listen(this.port, () => console.log(`Server running on port ${this.port}`));
    }
}
exports.default = Server;
