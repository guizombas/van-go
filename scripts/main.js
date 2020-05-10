import header from "../components/header.js";
import database from "./database.js";
const $ = window.$;

async function main() {
  await database.init();

  $("body").prepend(header);
  console.log( "ready!" );

  console.log(database.getListaDeTransportes());
}

$( document ).ready( main );
