const VehiculeModel = require("../models/VehiculeModel");
const FleetModel = require("../models/FleetModel");
import { Vehicule as VehiculeType, Fleet as FleetType, Response } from "../types";

// @desc Logique de la création du parc
export async function createFleet(fleet: FleetType) {
  let response: Response = { status: true, message: "" };

  const emptyFieldCheck: boolean = Object.values(fleet).some((el) => el === "" || el === "undefined");

  if (!emptyFieldCheck) {
    const idFleet: string = await FleetModel.createOne(fleet);
    response.message = idFleet;
  } else {
    response = { status: false, message: "Some data are not completed" };
  }

  return response;
}

// @desc
export async function registerVehicule(idFleet: string, immatriculationPlate: string) {
  const newVehicule: VehiculeType = { immatriculationPlate, fleets: idFleet };

  const fleetCurrent: FleetType = FleetModel.getOne(idFleet)

  console.log(fleetCurrent)

  // if() {

  // }


}

// @desc Vérification si on peut créer le véhicule
export async function localizeVehicule(id: string, vehicule: VehiculeType) {
  let response: Response = { status: true, message: "" };

  return response;
}
