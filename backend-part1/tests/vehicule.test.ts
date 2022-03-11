import { Vehicule } from "../src/types";
import { canCreate as canCreateVehicule } from "../src/services/vehicule";

describe("Vehicules", () => {
  it("I can register a vehicle", async () => {
    const newVehicule: Vehicule = {
      name: "Fiat",
      type: "1",
      price: 16000,
      fleets: ["1", "2"],
    };

    // -- On vérifie que le véhicule remplit les conditions
    await canCreateVehicule(newVehicule).then(async (dataReturn) => {
      expect(dataReturn.status).toEqual(true);
    });
  });

  it("I can't register same vehicle twice", async () => {
    const newVehicule: Vehicule = {
      name: "Audi",
      type: "1",
      price: 36000,
      fleets: ["1", "2"],
    };

    // -- On vérifie que le véhicule remplit les conditions
    await canCreateVehicule(newVehicule).then(async (dataReturn) => {
      expect(dataReturn.status).toEqual(false);
    });
  });

  it("Same vehicle can belong to more than one fleet", async () => {
    const newVehicule: Vehicule = {
      name: "Cupra",
      type: "1",
      price: 16000,
      fleets: ["1", "2", "3"],
    };

    // -- On vérifie que le véhicule remplit les conditions
    await canCreateVehicule(newVehicule).then(async (dataReturn) => {
      expect(dataReturn.status).toEqual(true);
    });
  });
});
