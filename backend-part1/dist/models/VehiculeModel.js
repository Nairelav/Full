"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOne = exports.findOne = exports.findAll = void 0;
const api_1 = require("../services/api");
const { v4: uuidv4 } = require("uuid");
const vehicules = require("../../data/vehicules.json");
// @des Renvoie l'ensemble des véhicules existant
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(vehicules);
    });
}
exports.findAll = findAll;
// @dec En fonction de l'ID, renvoie le véhicule en question
function findOne(id) {
    return new Promise((resolve, reject) => {
        const vehicule = vehicules.find((item) => item.id === id);
        resolve(vehicule);
    });
}
exports.findOne = findOne;
// @dec Création d'un véhicule
function createOne(vehicule) {
    return new Promise((resolve, reject) => {
        const newVehicule = Object.assign({ id: uuidv4() }, vehicule);
        vehicules.push(newVehicule);
        (0, api_1.writeDataFile)("./data/vehicules.json", vehicules);
        resolve(newVehicule);
    });
}
exports.createOne = createOne;
