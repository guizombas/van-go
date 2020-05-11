import header from "../components/header.js";
import database from "./database.js";
const $ = window.$;

window.database = database;

async function main() {
  $("body").prepend(header);
  await database.init();
}

$( document ).ready( main );
