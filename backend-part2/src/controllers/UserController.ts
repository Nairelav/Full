const UserModel = require("../models/UserModel");
import { respond, getPostData } from "../services/api";
import { User } from "../types";

// @desc Récupération de l'ensemble des utilisateurs
// @route POST /api/user
export async function getUsers(res: any) {
  try {
    const users: Array<User> = await UserModel.findAll();
    respond(res, 200, users);
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}

// @desc Récupération du véhicule en fonction de son ID
// @route GET /api/user/:id
export async function getUser(res: any, id: string) {
  try {
    const user: User = await UserModel.findOne(id);

    if (!user) {
      respond(res, 404, "User not found");
    } else {
      respond(res, 200, user);
    }
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}

// @desc Création d'un utilisateur
// @route POST /api/vehicule
export async function addUser(req: any, res: any) {
  try {
    // -- Récupération des données dans le corps de la requête
    const body: string = await getPostData(req);

    const { name } = JSON.parse(body);
    const user: User = { name };

    const emptyFieldCheck: boolean = Object.values(user).some((el) => el === "" || el === "undefined");

    if (!emptyFieldCheck) {
      // -- On vérifie que le véhicule remplit les conditions
      const newUser: User = await UserModel.createOne(user);
      return respond(res, 201, newUser);
    } else {
      return respond(res, 400, "Pas tout les champs");
    }
  } catch (error: any) {
    respond(res, 400, error.message);
  }
}
