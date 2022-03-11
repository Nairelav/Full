const VehiculeModel = require("../models/VehiculeModel");
const { arrayMatch } = require("./array");
import { Vehicule } from "../types";

interface canCreate {
  status: boolean;
  message: string;
}

interface Response {
  status: boolean;
  message: string;
}

// @desc Vérification si on peut créer le véhicule
export async function canCreate(vehicule: Vehicule) {
  // return new Promise(async (resolve, reject) => {
  let response: Response = { status: true, message: "" };
  const vehicules = await VehiculeModel.findAll();

  vehicule.name = vehicule.name.toLowerCase();
  vehicules.forEach((element: Vehicule) => {
    element.name = element.name.toLowerCase();
    if (element.name === vehicule.name) {
      // -- On vérifie que le véhicule qu'on souhaite créer ne soit pas dans le même endroit
      const result: Array<number> = arrayMatch(element.fleets, vehicule.fleets);
      if (result.length > 0) {
        response.status = false;
        response.message = "Vehicule has already been registered !";
      }
      return response;
    }
  });

  return response;
  // });
}
