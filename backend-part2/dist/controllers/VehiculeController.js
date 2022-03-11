"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVehicule = exports.getVehicule = exports.getVehicules = void 0;
const VehiculeModel = require("../models/VehiculeModel");
const vehicule_1 = require("../services/vehicule");
const api_1 = require("../services/api");
// @desc Récupération de l'ensemble des véhicules existant
// @route GET /api/vehicule
function getVehicules(res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vehicules = yield VehiculeModel.findAll();
            (0, api_1.respond)(res, 200, vehicules);
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.getVehicules = getVehicules;
// @desc Récupération du véhicule en fonction de son ID
// @route GET /api/vehicule/:id
function getVehicule(res, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vehicule = yield VehiculeModel.findOne(id);
            if (!vehicule) {
                (0, api_1.respond)(res, 404, "Vehicule not found");
            }
            else {
                (0, api_1.respond)(res, 200, vehicule);
            }
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.getVehicule = getVehicule;
// @desc Création d'un véhicule
// @route POST /api/vehicule
function addVehicule(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // -- Récupération des données dans le corps de la requête
            const body = yield (0, api_1.getPostData)(req);
            const { immatriculationPlate, fleets } = JSON.parse(body);
            const vehicule = { immatriculationPlate, fleets };
            // -- On vérifie que le véhicule remplit les conditions
            yield (0, vehicule_1.canCreate)(vehicule).then((canCreate) => __awaiter(this, void 0, void 0, function* () {
                if (canCreate.status) {
                    const newVehicule = yield VehiculeModel.createOne(vehicule);
                    return (0, api_1.respond)(res, 201, newVehicule);
                }
                else {
                    return (0, api_1.respond)(res, 400, canCreate.message);
                }
            }));
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.addVehicule = addVehicule;
