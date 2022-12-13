DROP TABLE IF EXISTS est_classe;
DROP TABLE IF EXISTS participe;
DROP TABLE IF EXISTS COUREUR;
DROP TABLE IF EXISTS COL;
DROP TABLE IF EXISTS ETAPE;
DROP TABLE IF EXISTS CLASSEMENT;
DROP TABLE IF EXISTS EQUIPE;
DROP TABLE IF EXISTS REPOS;
DROP TABLE IF EXISTS VILLE_ARRIVEE;
DROP TABLE IF EXISTS VILLE_DEPART;
DROP TABLE IF EXISTS PAYS;
DROP TABLE IF EXISTS DEPARTEMENT;
DROP TABLE IF EXISTS TYPE_CLASSEMENT;
DROP TABLE IF EXISTS TYPE_ETAPE;

CREATE TABLE IF NOT EXISTS TYPE_ETAPE(
    id_type_etape INTEGER PRIMARY KEY AUTOINCREMENT,
    libelle_type_etape VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS TYPE_CLASSEMENT(
    id_type_classement INTEGER PRIMARY KEY AUTOINCREMENT,
    libelle_type_classement VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS PAYS(
    id_pays INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_pays VARCHAR(255),
    drapeau_svg VARCHAR(4)
);

CREATE TABLE IF NOT EXISTS DEPARTEMENT(
    id_departement INTEGER PRIMARY KEY AUTOINCREMENT,
    num_departement VARCHAR(2),
    nom_departement VARCHAR(255),
    id_pays INT NOT NULL,
    FOREIGN KEY(id_pays) REFERENCES PAYS(id_pays)
);

CREATE TABLE IF NOT EXISTS VILLE_DEPART(
    id_ville_depart INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_ville_depart VARCHAR(255),
    id_departement INT NOT NULL,
    FOREIGN KEY(id_departement) REFERENCES DEPARTEMENT(id_departement)
);

CREATE TABLE IF NOT EXISTS VILLE_ARRIVEE(
    id_ville_arrivee INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_ville_arrivee VARCHAR(50),
    id_departement INT NOT NULL,
    FOREIGN KEY(id_departement) REFERENCES DEPARTEMENT(id_departement)
);

CREATE TABLE IF NOT EXISTS REPOS(
    id_repos INTEGER PRIMARY KEY AUTOINCREMENT,
    lieu_repos VARCHAR(255),
    date_repos DATE
);

CREATE TABLE IF NOT EXISTS EQUIPE(
    id_equipe INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_equipe VARCHAR(255),
    abrev_equipe VARCHAR(3),
    img_equipe VARCHAR(255),
    img_maillot_equipe VARCHAR(255),
    id_pays INT NOT NULL,
    FOREIGN KEY(id_pays) REFERENCES PAYS(id_pays)
);

CREATE TABLE IF NOT EXISTS CLASSEMENT(
    id_classement INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_classement VARCHAR(255),
    id_type_classement INT NOT NULL,
    FOREIGN KEY(id_type_classement) REFERENCES TYPE_CLASSEMENT(id_type_classement)
);

CREATE TABLE IF NOT EXISTS ETAPE(
    id_etape INTEGER PRIMARY KEY AUTOINCREMENT,
    libelle_etape VARCHAR(255),
    longueur DECIMAL(4,1),
    date_etape DATE,
    descriptif VARCHAR(5000),
    id_type_etape INT NOT NULL,
    id_ville_depart INT NOT NULL,
    id_ville_arrivee INT NOT NULL,
    FOREIGN KEY(id_type_etape) REFERENCES TYPE_ETAPE(id_type_etape),
    FOREIGN KEY(id_ville_arrivee) REFERENCES VILLE_ARRIVEE(id_ville_arrivee),
    FOREIGN KEY(id_ville_depart) REFERENCES VILLE_DEPART(id_ville_depart)
);

CREATE TABLE IF NOT EXISTS COL(
    id_col INTEGER PRIMARY KEY AUTOINCREMENT,
    cat_col INT,            -- Catégorie du col (NULL si non répertorié, 0 pour Hors Cat., 1 pour 1ère cat., etc...)
    nom_col VARCHAR(255),
    nb_km FLOAT,
    poucentage_moyen FLOAT,
    altitude INT,
    situation_km FLOAT,  -- Se situe au km ...
    img_profil_col VARCHAR(255),
    id_etape INT NOT NULL,
    FOREIGN KEY (id_etape) REFERENCES ETAPE(id_etape)
);

CREATE TABLE IF NOT EXISTS COUREUR(
    id_coureur INT,  -- Numéro de dossard du coureur
    nom_coureur VARCHAR(255),
    prenom_coureur VARCHAR(255),
    date_naissance DATE,
    img_coureur VARCHAR(255),
    est_present BOOLEAN DEFAULT TRUE,
    id_pays INT NOT NULL,
    id_equipe INT NOT NULL,
    FOREIGN KEY(id_pays) REFERENCES PAYS(id_pays),
    FOREIGN KEY(id_equipe) REFERENCES EQUIPE(id_equipe)
);

CREATE TABLE IF NOT EXISTS participe(
    id_etape INT,
    id_coureur INT,
    DATE_PARTICIPATION DATETIME,
    PRIMARY KEY(id_etape, id_coureur, DATE_PARTICIPATION),
    FOREIGN KEY(id_etape) REFERENCES ETAPE(id_etape),
    FOREIGN KEY(id_coureur) REFERENCES COUREUR(id_coureur)
);

CREATE TABLE IF NOT EXISTS est_classe(
    id_coureur INT,
    id_classement INT,
    classement INT,
    total VARCHAR(255),
    PRIMARY KEY(id_coureur, id_classement),
    FOREIGN KEY(id_coureur) REFERENCES COUREUR(id_coureur),
    FOREIGN KEY(id_classement) REFERENCES CLASSEMENT(id_classement)
);

SELECT E.id_etape, libelle_etape,
       nom_ville_depart || ' (' || (SELECT num_departement FROM DEPARTEMENT WHERE id_departement = VD.id_departement) || ') > ' || nom_ville_arrivee || ' (' || (SELECT num_departement FROM DEPARTEMENT WHERE id_departement = VA.id_departement) || ')' as villes,
       longueur || ' km' as long, libelle_type_etape, date_etape
FROM ETAPE E
LEFT JOIN VILLE_DEPART VD on E.id_ville_depart = VD.id_ville_depart
LEFT JOIN VILLE_ARRIVEE VA on E.id_ville_arrivee = VA.id_ville_arrivee
LEFT JOIN TYPE_ETAPE TE on E.id_type_etape = TE.id_type_etape
GROUP BY E.id_etape;

SELECT TE.id_type_etape, libelle_type_etape, COUNT(id_etape) as nbrEtapes
FROM TYPE_ETAPE TE
LEFT JOIN ETAPE E on TE.id_type_etape = E.id_type_etape
GROUP BY TE.id_type_etape, libelle_type_etape;