const pool = require('./db')

const types_etapes = require('./src/json/type_etape.json');
async function insertTypesEtapes() {
    for (let i = 0; i < types_etapes.length; i++) {
        const type = types_etapes[i];
        await pool.run(`INSERT INTO TYPE_ETAPE(id_type_etape, libelle_type_etape) VALUES ($1,$2)`, [type.id_type_etape, type.libelle_type_etape], (error, results) => {
            if(error) throw error
        })
    }
}

const types_clt = require('./src/json/classement.json').type_classement
async function insertTypesClt() {
    for (let i = 0; i < types_clt.length; i++) {
        const type = types_clt[i];
        await pool.run(`INSERT INTO TYPE_CLASSEMENT(id_type_classement, libelle_type_classement) VALUES ($1,$2)`, [type.id_type_classement, type.libelle_type_classement], (error, results) => {
            if(error) throw error
        })
    }
}

const pays = require('./src/json/pays.json')
async function insertPays() {
    for (let i = 0; i < pays.length; i++) {
        const p = pays[i];
        await pool.run(`INSERT INTO PAYS(id_pays, nom_pays, drapeau_svg) VALUES ($1,$2,$3)`, [p.id_pays, p.nom_pays, p.drapeau_svg], (error, results) => {
            if(error) throw error
        })
    }
}

const departements = require('./src/json/departement.json')
async function insertDepartements() {
    for(let i = 0; i < departements.length; i++) {
        const dep = departements[i];
        await pool.run(`INSERT INTO DEPARTEMENT(id_departement, num_departement, nom_departement, id_pays) VALUES
                        ($1,$2,$3,$4)`, [i+1, dep.num_departement, dep.nom_departement, dep.id_pays], (error, results) => {
            if(error) throw error
        })
    }
}

const villes_depart = require('./src/json/ville.json').ville_depart
const villes_arrivee = require('./src/json/ville.json').ville_arrivee
async function insertVilles() {
    for (let i = 0; i < villes_depart.length; i++) {
        const dep = villes_depart[i];
        await pool.run(`INSERT INTO VILLE_DEPART(id_ville_depart, nom_ville_depart, id_departement) VALUES ($1,$2,$3)`, [dep.id_ville_depart, dep.libelle_ville_depart, dep.id_departement], (error, results) => {
            if(error) throw error
        })

        const arr = villes_arrivee[i];
        await pool.run(`INSERT INTO VILLE_ARRIVEE(id_ville_arrivee, nom_ville_arrivee, id_departement) VALUES ($1,$2,$3)`, [arr.id_ville_arrivee, arr.libelle_ville_arrivee, arr.id_departement], (error, results) => {
            if(error) throw error
        })
    }
}

const repos = require('./src/json/repos.json');
async function insertRepos() {
    for (let i = 0; i < repos.length; i++) {
        const r = repos[i];
        await pool.run(`INSERT INTO REPOS(lieu_repos, date_repos)
                        VALUES ($1,$2)`, [r.ville_repos, r.date_repos], (error, results) => {
            if (error) throw error
        })
    }
}

const equipes = require('./src/json/equipe.json')
async function insertEquipes() {
    for (let i = 0; i < equipes.length; i++) {
        const eq = equipes[i];
        await pool.run(`INSERT INTO EQUIPE(id_equipe, nom_equipe, abrev_equipe, img_equipe, img_maillot_equipe, id_pays)
                        VALUES ($1, $2, $3, $4, $5, $6)`, [eq.id_equipe, eq.nom_equipe, eq.abrev_equipe, eq.img_equipe, eq.img_maillot_equipe, eq.id_pays],
                        (error, results) => {
            if (error) throw error
        })
    }
}

/*const classements = require('../../json/classement.json')
async function insertClassements() {
    return null;
}*/

const etapes = require('./src/json/etape.json');
async function insertEtapes() {
    for (let i = 0; i < etapes.length; i++) {
        const etape = etapes[i];
        await pool.run(`INSERT INTO ETAPE(id_etape, libelle_etape, longueur, date_etape, descriptif, id_type_etape, id_ville_depart, id_ville_arrivee) VALUES
                         ($1,$2,$3,$4,$5,$6,$7,$8)`, [etape.id_etape, etape.libelle_etape, etape.longueur, etape.date_etape, etape.descriptif, etape.id_type_etape, etape.id_ville_depart, etape.id_ville_arrivee],
                        (error, results) => {
            if (error) throw error
        })
    }
}

const cols = require('./src/json/col.json')
async function insertCols() {
    for (let i = 0; i < cols.length; i++) {
        const c = cols[i];
        await pool.run(`INSERT INTO COL(id_col, cat_col, nom_col, nb_km, poucentage_moyen, altitude, situation_km, img_profil_col, id_etape) VALUES
                         ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [c.id_col, c.cat_col, c.nom_col, c.nb_km, c.poucentage_moyen, c.altitude, c.situation_km, c.img_profil_col, c.id_etape],
                        (error, results) => {
                if (error) throw error
            })
    }
}

const coureurs = require('./src/json/coureur.json')
async function insertCoureurs() {
    for (let i = 0; i < coureurs.length; i++) {
        const c = coureurs[i];
        await pool.run(`INSERT INTO COUREUR(id_coureur, nom_coureur, prenom_coureur, date_naissance, img_coureur, est_present, id_pays, id_equipe) VALUES
                         ($1,$2,$3,$4,$5,$6,$7,$8)`, [c.id_coureur, c.nom_coureur, c.prenom_coureur, c.date_naissance, c.img_coureur, c.est_present, c.id_pays, c.id_equipe],
            (error, results) => {
                if (error) throw error
            })
    }
}

async function insertParticipe() {
    for(let i = 0; i < etapes.length; i++) {
        const etape = etapes[i];
        for (let j = 0; j < coureurs.length; j++) {
            const cour = coureurs[j];
            if(cour.est_present) {
                await pool.run(`INSERT INTO participe(id_etape, id_coureur, DATE_PARTICIPATION) VALUES ($1,$2,$3)`,
                    [etape.id_etape, cour.id_coureur, etape.date_etape], (error, results) => {
                        if (error) throw error
                    })
            }
        }
    }
}

async function start() {
    await insertTypesEtapes();
    await insertTypesClt();
    await insertPays()
    await insertDepartements()
    await insertVilles();
    await insertRepos();
    await insertEquipes();
    await insertEtapes();
    await insertCols();
    await insertCoureurs();
    await insertParticipe()
}
start()