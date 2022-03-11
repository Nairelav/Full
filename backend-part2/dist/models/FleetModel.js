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
exports.createOne = exports.getOne = exports.findAll = void 0;
const { Fleet } = require("../../config");
const api_1 = require("../services/api");
// @des Renvoie l'ensemble des véhicules existant
function findAll() {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const snapshot = yield Fleet.get();
        let fleets = (0, api_1.getMultiDataFirestore)(snapshot);
        resolve(fleets);
    }));
}
exports.findAll = findAll;
// @desc Récupération de Fleet par son ID
function getOne(id) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const fleet = yield Fleet.doc(id).get();
        resolve(fleet.data());
    }));
}
exports.getOne = getOne;
// @dec Création d'un véhicule
function createOne(fleet) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const fleetAdded = yield Fleet.add(fleet);
            resolve(fleetAdded.id);
        }
        catch (error) {
            reject(error);
        }
    }));
}
exports.createOne = createOne;
