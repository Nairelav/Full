import http from "http";
import { getVehicules, getVehicule, addVehicule } from "./controllers/VehiculeController";
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
      } else if (req.url.match(/\/api\/vehicule\/([0-9]+)/) && req.method === "GET") {
        const id: string = req.url.split("/")[3];
        getVehicule(res, id);
      } else if (req.url === "/api/vehicule" && req.method === "POST") {
        addVehicule(req, res);
      } else {
        respond(res, 404, "Route not found");
      }
    });

    server.listen(this.port, () => console.log(`Server running on port ${this.port}`));
  }
}
