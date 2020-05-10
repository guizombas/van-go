import header from "../components/header.js";
import database from "./database.js";
const $ = window.$;

window.database = database;

async function main() {
  await database.init();
  $("body").prepend(header);
}

$( document ).ready( main );
