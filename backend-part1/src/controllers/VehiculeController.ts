const VehiculeModel = require("../models/VehiculeModel");
import { canCreate } from "../services/vehicule";
import { respond, getPostData } from "../services/api";
import { Vehicule } from "../types";

// @desc Récupération de l'ensemble des véhicules existant
// @route GET /api/vehicule
export async function getVehicules(res: any) {
  try {
    const vehicules: Array<Vehicule> = await VehiculeModel.findAll();
    respond(res, 200, vehicules);
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}

// @desc Récupération du véhicule en fonction de son ID
// @route GET /api/vehicule/:id
export async function getVehicule(res: any, id: string) {
  try {
    const vehicule: Vehicule = await VehiculeModel.findOne(id);

    if (!vehicule) {
      respond(res, 404, "Vehicule not found");
    } else {
      respond(res, 200, vehicule);
    }
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}

// @desc Création d'un véhicule
// @route POST /api/vehicule
export async function addVehicule(req: any, res: any) {
  try {
    // -- Récupération des données dans le corps de la requête
    const body: string = await getPostData(req);

    const { name, type, price, fleets } = JSON.parse(body);
    const vehicule: Vehicule = { name, type, price, fleets };

    const emptyFieldCheck: boolean = Object.values(vehicule).some((el) => el === "" || el === "undefined");

    if (emptyFieldCheck) {
      // -- On vérifie que le véhicule remplit les conditions
      await canCreate(vehicule).then(async (canCreate) => {
        if (canCreate.status) {
          const newVehicule: Vehicule = await VehiculeModel.createOne(vehicule);
          return respond(res, 201, newVehicule);
        } else {
          return respond(res, 400, canCreate.message);
        }
      });
    } else {
      return respond(res, 400, "Pas tout les champs");
    }
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}
