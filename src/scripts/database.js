const Lockr = window.Lockr;
const $ = window.$;

let isDatabaseReady = false;

function loadDefaultData() {
  return new Promise((resolve) => {
    $.getJSON("data.json", (json) => {
      resolve(json);
    });
  });
}

async function init() {
  Lockr.prefix = "lockr_";

  const isDatabaseLoadedToStorage = Lockr.get('isLoaded');
  if (!isDatabaseLoadedToStorage) {
    const defaultData = await loadDefaultData();

    Object.keys(defaultData).map(key => {
      Lockr.set(key, defaultData[key]);
    });

    Lockr.set('isLoaded', true);
  }

  isDatabaseReady = true;
}

function whenReady(callback) {
  const resolveWhenReady = new Promise((resolve) => {
    const interval = setInterval(function () {
      if(isDatabaseReady) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });

  resolveWhenReady.then(callback);
}

function getListaDeTransportes() {
  const transportes = Lockr.get('transportes');
  const arrayDeTransportes = [];

  Object.keys(transportes).map(key => {
    arrayDeTransportes.push({
      ...transportes[key],
      id: key,
    });
  });

  return arrayDeTransportes;
}

function getTransportePorId(id) {
  const transportes = Lockr.get('transportes');
  return transportes[id];
}

function getFaculdades() {
  const faculdades = Lockr.get('faculdades');
  const arrayDeFaculdades = [];

  Object.keys(faculdades).map(key => {
    arrayDeFaculdades.push({
      value: key,
      label: faculdades[key],
    });
  });

  return arrayDeFaculdades;
}

function getNomeDaFaculdadePeloId(id) {
  const faculdades = Lockr.get('faculdades');
  return faculdades[id];
}

function getNomeDoBairroPeloId(id) {
  const bairros = Lockr.get('bairros');
  return bairros[id];
}

function getBairros() {
  const bairros = Lockr.get('bairros');
  const arrayDeBairros = [];

  Object.keys(bairros).map(key => {
    arrayDeBairros.push({
      value: key,
      label: bairros[key],
    });
  });

  return arrayDeBairros;
}

function getListaFiltradaDeTransportes({
  faculdade,
  bairro,
}) {
  try {
    const transportes = getListaDeTransportes();

    let transportesFiltrados = transportes;
    transportesFiltrados = transportesFiltrados.filter(t => t.bairros.includes(bairro));
    transportesFiltrados = transportesFiltrados.filter(t => t.faculdades.includes(faculdade));

    return transportesFiltrados;
  } catch (err) {
    console.error(err);
    return [];
  }
}

function saveVagas (id, ida, volta){
  const transportes = Lockr.get('transportes');
  transportes[id].vagas.ida = ida;
  transportes[id].vagas.volta = volta;
  Lockr.set('transportes',transportes);
}

export default {
  init,
  whenReady,
  getListaDeTransportes,
  getFaculdades,
  getBairros,
  getTransportePorId,
  getNomeDaFaculdadePeloId,
  getNomeDoBairroPeloId,
  getListaFiltradaDeTransportes,
  saveVagas
 };
