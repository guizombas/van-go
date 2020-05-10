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
  Lockr.set('isLoaded', false);

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

export default {
  init,
  whenReady,
  getListaDeTransportes,
  getFaculdades,
  getBairros,
  getTransportePorId,
 };
