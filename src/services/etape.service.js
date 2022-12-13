import LocalSource from '../datasource/controller'

async function getAllEtapesFromLocalSource() {
    return LocalSource.getAllEtapes()
}

/*
async function getAllEtapesFromAPI() {
  // Quand l'API sera fonctionnelle
  return {}
}
*/

async function getAllEtapes() {
    let resp;
    try {
        resp = await getAllEtapesFromLocalSource()
    } catch(err) {
        resp = {error: 1, data: 'erreur réseau, impossible de récupérer les étapes'}
    }
    return resp
}

export default {
    getAllEtapes
}