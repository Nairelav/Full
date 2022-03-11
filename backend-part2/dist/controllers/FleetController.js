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
exports.localizeVehicule = exports.addFleet = exports.getFleet = exports.getFleets = void 0;
const FleetModel = require("../models/FleetModel");
const api_1 = require("../services/api");
const fleet_1 = require("../services/fleet");
// @desc Récupération de l'ensemble des park
// @route POST /api/fleet
function getFleets(res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fleets = yield FleetModel.findAll();
            (0, api_1.respond)(res, 200, fleets);
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.getFleets = getFleets;
// @desc Récupération d'un park par son ID
// @route POST /api/fleet
function getFleet(res, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fleetCurrent = yield FleetModel.getOne(id);
            return (0, api_1.respond)(res, 200, fleetCurrent);
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.getFleet = getFleet;
// @desc Création d'un utilisateur
// @route POST /api/vehicule
function addFleet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // -- Récupération des données dans le corps de la requête
            const body = yield (0, api_1.getPostData)(req);
            const { name, coordinate, userId } = JSON.parse(body);
            const fleet = { name, coordinate, userId };
            const responseData = yield (0, fleet_1.createFleet)(fleet);
            if (responseData.status) {
                // -- On vérifie que le véhicule remplit les conditions
                return (0, api_1.respond)(res, 201, responseData.message);
            }
            else {
                return (0, api_1.respond)(res, 400, responseData.message);
            }
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.addFleet = addFleet;
function localizeVehicule(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.localizeVehicule = localizeVehicule;
