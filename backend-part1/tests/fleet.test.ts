import { Vehicule } from "../src/types";
import { canCreate as canCreateVehicule } from "../src/services/vehicule";

describe("Fleets", () => {
  it("Successfully park a vehicle", async () => {
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

  it("Can't localize my vehicle to the same location two times in a row", async () => {
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
});