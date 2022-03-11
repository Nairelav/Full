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
exports.createOne = exports.findOne = exports.findAll = void 0;
const { User } = require("../../config");
const api_1 = require("../services/api");
// @des Renvoie l'ensemble des véhicules existant
function findAll() {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const snapshot = yield User.get();
        const users = (0, api_1.getMultiDataFirestore)(snapshot);
        resolve(users);
    }));
}
exports.findAll = findAll;
// @dec En fonction de l'ID, renvoie le véhicule en question
function findOne(id) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const user = yield User.doc(id).get();
        resolve(user);
    }));
}
exports.findOne = findOne;
// @dec Création d'un véhicule
function createOne(user) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const userAdded = yield User.add(user);
        resolve(userAdded.id);
    }));
}
exports.createOne = createOne;
