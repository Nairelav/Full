import http from "http";
import { getVehicules, getVehicule, addVehicule } from "./controllers/VehiculeController";
import { getUser, getUsers, addUser } from "./controllers/UserController";
import { getFleets, getFleet, addFleet } from "./controllers/FleetController";
import { respond } from "./services/api";

export default class Server {
  readonly port: number;
  private baseRoute: string = "/api";

  constructor(port: number) {
    this.port = port;
  }

  start() {
    const server = http.createServer((req: any, res: any) => {
      if (req.url === `${this.baseRoute}/vehicule` && req.method === "GET") {
        getVehicules(res);
      } else if (req.url.match(/\/api\/vehicule\/([A-Za-z]+)/) && req.method === "GET") {
        const id: string = req.url.split("/")[3];
        getVehicule(res, id);
      } else if (req.url === `${this.baseRoute}/vehicule` && req.method === "POST") {
        addVehicule(req, res);
      }

      else if (req.url === `${this.baseRoute}/user` && req.method === "GET") {
        getUsers(res);
      } else if (req.url.match(/\/api\/user\/([A-Za-z]+)/) && req.method === "GET") {
        const id: string = req.url.split("/")[3];
        getUser(res, id);
      } else if (req.url === `${this.baseRoute}/user` && req.method === "POST") {
        addUser(req, res);
      }

      else if (req.url === `${this.baseRoute}/fleet` && req.method === "GET") {
        getFleets(res);
      } else if (req.url.match(/\/api\/fleet\/([A-Za-z]+)/) && req.method === "GET") {
        const id: string = req.url.split("/")[3];
        getFleet(res, id);
      } else if (req.url === `${this.baseRoute}/fleet` && req.method === "POST") {
        addFleet(req, res);
      }
      else {
        respond(res, 404, "Route not found");
      }
    });

    server.listen(this.port, () => console.log(`Server running on port ${this.port}`));
  }
}
