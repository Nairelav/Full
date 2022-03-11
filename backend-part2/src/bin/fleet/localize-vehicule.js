#!/usr/bin/env node
const inquirer = require("inquirer");
const { findAll: findAllVehicules } = require("../../../dist/models/VehiculeModel");
const { findAll: findAllFleets } = require("../../../dist/models/FleetModel");

async function localizeVehicule() {
  const { fleets_id } = await inquirer.prompt({
    name: "fleets_id",
    type: "input",
    message: "Fleet ID : ",
  });
  const { immatriculationPlate } = await inquirer.prompt({
    name: "immatriculationPlate",
    type: "input",
    message: "Immatriculate Plate",
    default() {
      return "Return vehicule ID";
    },
  });

  const fleets = await findAllFleets();
  const vehicules = await findAllVehicules();
  let canBeCreated = false;

  let fleetLocalized;

  fleets.forEach((fleet) => {
    if (fleet.id === fleets_id) {
      vehicules.forEach((vehicule) => {
        if (vehicule.immatriculationPlate === immatriculationPlate) {
          fleetLocalized = fleet;
          canBeCreated = true;
          return true;
        }
      });
    }
  });

  if (canBeCreated) {
    console.log(`Fleet's coordinate for the vehicule ${immatriculationPlate} : ${fleetLocalized.coordinate}`);
  } else {
    console.log("Can't localize vehicule : please, verify your input");
  }

  return true;
}

localizeVehicule();
