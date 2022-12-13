const getAllCoureursFromEquipe = `SELECT * FROM COUREUR 
                                WHERE id_equipe = (SELECT id_equipe FROM EQUIPE WHERE abrev_equipe = $1)`

const getEtape = `SELECT * FROM ETAPE WHERE id_etape = $1`
const getDetailsCoureur = `SELECT * FROM COUREUR WHERE id_coureur = $1`
const getAllEtapes = `SELECT E.id_etape, libelle_etape,
                               nom_ville_depart || ' (' || (SELECT num_departement FROM DEPARTEMENT WHERE id_departement = VD.id_departement) || ') > ' || nom_ville_arrivee || ' (' || (SELECT num_departement FROM DEPARTEMENT WHERE id_departement = VA.id_departement) || ')' as villes,
                               longueur || ' km' as long, libelle_type_etape, date_etape
                        FROM ETAPE E
                        LEFT JOIN VILLE_DEPART VD on E.id_ville_depart = VD.id_ville_depart
                        LEFT JOIN VILLE_ARRIVEE VA on E.id_ville_arrivee = VA.id_ville_arrivee
                        LEFT JOIN TYPE_ETAPE TE on E.id_type_etape = TE.id_type_etape
                        GROUP BY E.id_etape;`

const getTeamNum = `SELECT * FROM EQUIPE WHERE id_equipe = $1`
const getAllTeams = `SELECT * FROM EQUIPE`

module.exports = {
    getAllCoureursFromEquipe, getEtape, getDetailsCoureur, getAllEtapes, getAllTeams, getTeamNum
}