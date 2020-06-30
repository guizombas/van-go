import header from "../components/header.js";
import footer from "../components/footer.js"
import database from "./database.js";
const $ = window.$;

window.database = database;

async function main() {
  $("body").prepend(header);
  await database.init();
  $("body").append(footer);
}




//avaliação


$( document ).ready( main );
