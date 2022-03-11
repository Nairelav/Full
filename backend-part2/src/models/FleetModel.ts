const { Fleet } = require("../../config");
import { getMultiDataFirestore } from "../services/api";
import { Fleet as FleetType } from "../types";

// @des Renvoie l'ensemble des véhicules existant
export function findAll(): Promise<Array<FleetType>> {
  return new Promise(async (resolve, reject) => {
    const snapshot = await Fleet.get();
    let fleets: Array<FleetType> = getMultiDataFirestore(snapshot);
    resolve(fleets);
  });
}

// @desc Récupération de Fleet par son ID
export function getOne(id: string): Promise<FleetType> {
  return new Promise(async (resolve, reject) => {
    const fleet = await Fleet.doc(id).get();
    resolve(fleet.data());
  });
}

// @dec Création d'un véhicule
export function createOne(fleet: FleetType): Promise<FleetType> {
  return new Promise(async (resolve, reject) => {
    try {
      const fleetAdded = await Fleet.add(fleet);
      resolve(fleetAdded.id);
    } catch (error) {
      reject(error)
    }
  });
}
