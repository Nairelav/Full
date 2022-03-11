import { Vehicule } from "../types";
import { writeDataFile } from "../services/api";
const { v4: uuidv4 } = require("uuid");
const vehicules = require("../../data/vehicules.json");

// @des Renvoie l'ensemble des véhicules existant
export function findAll(): Promise<Object> {
  return new Promise((resolve, reject) => {
    resolve(vehicules);
  });
}

// @dec En fonction de l'ID, renvoie le véhicule en question
export function findOne(id: string): Promise<Object> {
  return new Promise((resolve, reject) => {
    const vehicule: Vehicule = vehicules.find((item: Vehicule) => item.id === id);
    resolve(vehicule);
  });
}

// @dec Création d'un véhicule
export function createOne(vehicule: Vehicule) {
  return new Promise((resolve, reject) => {
    const newVehicule = { id: uuidv4(), ...vehicule };

    vehicules.push(newVehicule);
    writeDataFile("./data/vehicules.json", vehicules);

    resolve(newVehicule);
  });
}