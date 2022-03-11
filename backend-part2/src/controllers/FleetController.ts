const FleetModel = require("../models/FleetModel");
import { respond, getPostData } from "../services/api";
import { createFleet } from "../services/fleet";
import { Fleet, Response } from "../types";

// @desc Récupération de l'ensemble des park
// @route POST /api/fleet
export async function getFleets(res: any) {
  try {
    const fleets: Array<Fleet> = await FleetModel.findAll();
    respond(res, 200, fleets);
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}

// @desc Récupération d'un park par son ID
// @route POST /api/fleet
export async function getFleet(res: any, id: string) {
  try {
    const fleetCurrent: Fleet = await FleetModel.getOne(id);
    return respond(res, 200, fleetCurrent);
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}

// @desc Création d'un utilisateur
// @route POST /api/vehicule
export async function addFleet(req: any, res: any) {
  try {
    // -- Récupération des données dans le corps de la requête
    const body: string = await getPostData(req);
    const { name, coordinate, userId } = JSON.parse(body);
    const fleet: Fleet = { name, coordinate, userId };

    const responseData: Response = await createFleet(fleet);
    if (responseData.status) {
      // -- On vérifie que le véhicule remplit les conditions
      return respond(res, 201, responseData.message);
    } else {
      return respond(res, 400, responseData.message);
    }
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}

export async function localizeVehicule(req: any, res: any) {}
