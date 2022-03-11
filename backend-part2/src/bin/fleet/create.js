#!/usr/bin/env node
const inquirer = require("inquirer");
const { createOne } = require("../../../dist/models/FleetModel");

async function createFleet() {
  const answer = await inquirer.prompt({
    name: "user_id",
    type: "input",
    message: "Create Fleet : need UserID",
    default() {
      return "Return fleet ID";
    },
  });

  const fleet = { name: `fleet-${answer.user_id}`, coordinate: "49.445246,1.0635177", userId: answer.user_id };
  const fleetId = await createOne(fleet);
  userId = fleetId;
}

createFleet();
