const Lockr = window.Lockr;
const $ = window.$;

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

const functionsToExport = {
  init,
  getListaDeTransportes,
  getTransportePorId,
};
window.database = functionsToExport;

export default { ...functionsToExport };
