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
exports.canCreate = void 0;
const VehiculeModel = require("../models/VehiculeModel");
const { arrayMatch } = require("./array");
// @desc Vérification si on peut créer le véhicule
function canCreate(vehicule) {
    return __awaiter(this, void 0, void 0, function* () {
        // return new Promise(async (resolve, reject) => {
        let response = { status: true, message: "" };
        const vehicules = yield VehiculeModel.findAll();
        vehicule.name = vehicule.name.toLowerCase();
        vehicules.forEach((element) => {
            element.name = element.name.toLowerCase();
            if (element.name === vehicule.name) {
                // -- On vérifie que le véhicule qu'on souhaite créer ne soit pas dans le même endroit
                const result = arrayMatch(element.fleets, vehicule.fleets);
                if (result.length > 0) {
                    response.status = false;
                    response.message = "Vehicule has already been registered !";
                }
                return response;
            }
        });
        return response;
        // });
    });
}
exports.canCreate = canCreate;
