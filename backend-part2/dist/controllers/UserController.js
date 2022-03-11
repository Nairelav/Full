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
exports.addUser = exports.getUser = exports.getUsers = void 0;
const UserModel = require("../models/UserModel");
const api_1 = require("../services/api");
// @desc Récupération de l'ensemble des utilisateurs
// @route POST /api/user
function getUsers(res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield UserModel.findAll();
            (0, api_1.respond)(res, 200, users);
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.getUsers = getUsers;
// @desc Récupération du véhicule en fonction de son ID
// @route GET /api/user/:id
function getUser(res, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserModel.findOne(id);
            if (!user) {
                (0, api_1.respond)(res, 404, "User not found");
            }
            else {
                (0, api_1.respond)(res, 200, user);
            }
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.getUser = getUser;
// @desc Création d'un utilisateur
// @route POST /api/vehicule
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // -- Récupération des données dans le corps de la requête
            const body = yield (0, api_1.getPostData)(req);
            const { name } = JSON.parse(body);
            const user = { name };
            const emptyFieldCheck = Object.values(user).some((el) => el === "" || el === "undefined");
            if (!emptyFieldCheck) {
                // -- On vérifie que le véhicule remplit les conditions
                const newUser = yield UserModel.createOne(user);
                return (0, api_1.respond)(res, 201, newUser);
            }
            else {
                return (0, api_1.respond)(res, 400, "Pas tout les champs");
            }
        }
        catch (error) {
            (0, api_1.respond)(res, 400, error.message);
        }
    });
}
exports.addUser = addUser;
