const { User } = require("../../config");
import { getMultiDataFirestore } from "../services/api";
import { User as UserType } from "../types";

// @des Renvoie l'ensemble des véhicules existant
export function findAll(): Promise<Array<UserType>> {
  return new Promise(async (resolve, reject) => {
    const snapshot = await User.get();
    const users: Array<UserType> = getMultiDataFirestore(snapshot);
    resolve(users);
  });
}

// @dec En fonction de l'ID, renvoie le véhicule en question
export function findOne(id: string): Promise<UserType> {
  return new Promise(async (resolve, reject) => {
    const user = await User.doc(id).get();
    resolve(user);
  });
}

// @dec Création d'un véhicule
export function createOne(user: UserType): Promise<UserType> {
  return new Promise(async (resolve, reject) => {
    const userAdded = await User.add(user);
    resolve(userAdded.id);
  });
}
