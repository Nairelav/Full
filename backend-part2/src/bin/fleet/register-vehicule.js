#!/usr/bin/env node
const inquirer = require("inquirer");
const { createOne } = require("../../../dist/models/VehiculeModel");
const { findAll } = require("../../../dist/models/FleetModel");

async function registerVehicule() {
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

  const fleets = await findAll();
  let canBeCreated = false;

  fleets.forEach((fleet) => {
    if (fleet.id === fleets_id) canBeCreated = true;
  });

  if(canBeCreated) {
    const vehicule = { immatriculationPlate, fleets: [fleets_id] };
    console.log(await createOne(vehicule));
  } else {
    console.log("Can't register vehicule : Fleet doesn't exist.")
  }
}

registerVehicule();
