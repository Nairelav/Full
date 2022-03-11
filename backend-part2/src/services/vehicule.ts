const VehiculeModel = require("../models/VehiculeModel");
const { arrayMatch } = require("./array");
import { Vehicule, Response } from "../types";

interface canCreate {
  status: boolean;
  message: string;
}

// @desc Vérification si on peut créer le véhicule
export async function canCreate(vehicule: Vehicule) {
  let response: Response = { status: true, message: "" };
  const vehicules = await VehiculeModel.findAll();

  const emptyFieldCheck: boolean = Object.values(vehicule).some((el) => el === "" || el === "undefined");

  if (!emptyFieldCheck) {
    vehicule.immatriculationPlate = vehicule.immatriculationPlate.toLowerCase();
    vehicules.forEach((element: Vehicule) => {
      element.immatriculationPlate = element.immatriculationPlate.toLowerCase();
      if (element.immatriculationPlate === vehicule.immatriculationPlate) {
        // -- On vérifie que le véhicule qu'on souhaite créer ne soit pas dans le même endroit
        const result: Array<string> = arrayMatch(element.fleets, vehicule.fleets);
        if (result.length > 0) {
          response = { status: false, message: "Vehicule has already been registered !" };
        }
        return response;
      }
    });
  } else {
    response = { status: false, message: "Please Filled all fields" };
  }

  return response;
}
