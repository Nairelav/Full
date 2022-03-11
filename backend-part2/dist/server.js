"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const VehiculeController_1 = require("./controllers/VehiculeController");
const UserController_1 = require("./controllers/UserController");
const FleetController_1 = require("./controllers/FleetController");
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
            else if (req.url.match(/\/api\/vehicule\/([A-Za-z]+)/) && req.method === "GET") {
                const id = req.url.split("/")[3];
                (0, VehiculeController_1.getVehicule)(res, id);
            }
            else if (req.url === `${this.baseRoute}/vehicule` && req.method === "POST") {
                (0, VehiculeController_1.addVehicule)(req, res);
            }
            else if (req.url === `${this.baseRoute}/user` && req.method === "GET") {
                (0, UserController_1.getUsers)(res);
            }
            else if (req.url.match(/\/api\/user\/([A-Za-z]+)/) && req.method === "GET") {
                const id = req.url.split("/")[3];
                (0, UserController_1.getUser)(res, id);
            }
            else if (req.url === `${this.baseRoute}/user` && req.method === "POST") {
                (0, UserController_1.addUser)(req, res);
            }
            else if (req.url === `${this.baseRoute}/fleet` && req.method === "GET") {
                (0, FleetController_1.getFleets)(res);
            }
            else if (req.url.match(/\/api\/fleet\/([A-Za-z]+)/) && req.method === "GET") {
                const id = req.url.split("/")[3];
                (0, FleetController_1.getFleet)(res, id);
            }
            else if (req.url === `${this.baseRoute}/fleet` && req.method === "POST") {
                (0, FleetController_1.addFleet)(req, res);
            }
            else {
                (0, api_1.respond)(res, 404, "Route not found");
            }
        });
        server.listen(this.port, () => console.log(`Server running on port ${this.port}`));
    }
}
exports.default = Server;
