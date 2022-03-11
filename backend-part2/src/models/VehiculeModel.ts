import { getMultiDataFirestore } from "../services/api";
import { Vehicule as VehiculeType } from "../types";
const { Vehicule } = require("../../config");

// @des Renvoie l'ensemble des véhicules existant
export function findAll(): Promise<Object> {
  return new Promise(async (resolve, reject) => {
    const snapshot = await Vehicule.get();
    let vehicules: Array<VehiculeType> = getMultiDataFirestore(snapshot);
    resolve(vehicules);
  });
}

// @dec En fonction de l'ID, renvoie le véhicule en question
export function findOne(id: string): Promise<Array<VehiculeType>> {
  return new Promise(async (resolve, reject) => {
    const vehicule = await Vehicule.doc(id).get();
    resolve(vehicule.data());
  });
}

// @dec Création d'un véhicule
export function createOne(vehicule: VehiculeType) {
  return new Promise(async (resolve, reject) => {
    const vehiculeAdded = await Vehicule.add(vehicule);
    resolve(vehiculeAdded.id);
  });
}
