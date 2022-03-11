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
exports.getPostData = exports.writeDataFile = exports.respond = void 0;
const fs = require("fs");
// @desc Créer une réponse de l'API
function respond(res, status, message) {
    return new Promise((resolve, reject) => {
        res.writeHead(status, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message }));
    });
}
exports.respond = respond;
// @desc Permet d'écrire dans un fichier (en guise de bdd)
function writeDataFile(filename, content) {
    return __awaiter(this, void 0, void 0, function* () {
        fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
            if (err)
                console.log(err);
        });
    });
}
exports.writeDataFile = writeDataFile;
// @desc Récupération de données passées dans le body de la requête
function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => __awaiter(this, void 0, void 0, function* () {
                resolve(body);
            }));
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.getPostData = getPostData;
