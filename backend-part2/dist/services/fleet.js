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
exports.localizeVehicule = exports.registerVehicule = exports.createFleet = void 0;
const VehiculeModel = require("../models/VehiculeModel");
const FleetModel = require("../models/FleetModel");
// @desc Logique de la création du parc
function createFleet(fleet) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = { status: true, message: "" };
        const emptyFieldCheck = Object.values(fleet).some((el) => el === "" || el === "undefined");
        if (!emptyFieldCheck) {
            const idFleet = yield FleetModel.createOne(fleet);
            response.message = idFleet;
        }
        else {
            response = { status: false, message: "Some data are not completed" };
        }
        return response;
    });
}
exports.createFleet = createFleet;
// @desc
function registerVehicule(idFleet, immatriculationPlate) {
    return __awaiter(this, void 0, void 0, function* () {
        const newVehicule = { immatriculationPlate, fleets: idFleet };
        const fleetCurrent = FleetModel.getOne(idFleet);
        console.log(fleetCurrent);
        // if() {
        // }
    });
}
exports.registerVehicule = registerVehicule;
// @desc Vérification si on peut créer le véhicule
function localizeVehicule(id, vehicule) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = { status: true, message: "" };
        return response;
    });
}
exports.localizeVehicule = localizeVehicule;
