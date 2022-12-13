import LocalSource from '../datasource/controller'

async function getAllTeamsFromLocalSource() {
    return LocalSource.getAllEquipes()
}

/*
async function getAllTeamsFromAPI() {
  // Quand l'API sera fonctionnelle
  return {}
}
*/

async function getAllTeams() {
    let resp;
    try {
        resp = await getAllTeamsFromLocalSource()
    } catch(err) {
        resp = {error: 1, data: 'erreur réseau, impossible de récupérer les équipes'}
    }
    return resp
}

export default {
    getAllTeams
}