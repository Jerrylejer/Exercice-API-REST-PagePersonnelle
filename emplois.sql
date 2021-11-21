DROP TABLE IF EXISTS "emplois";

CREATE TABLE IF NOT EXISTS "emplois" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "poste" VARCHAR(128),
  "entreprise" VARCHAR(128),
  "lien" VARCHAR(255),
  "etoile" INT,
  "emplacement" VARCHAR(255),
  "entree" INT,
  "sortie" INT,
  "statut" VARCHAR(128),
  "commentaires" VARCHAR(4000)
);

INSERT INTO "emplois" ("id", "poste", "entreprise", "lien",
 "etoile", "emplacement", "entree", "sortie", "statut", "commentaires") VALUES 
 (1, 'Directeur', 'Hôtel Touraine Opéra', '', 4, 'Paris 9ème Arr.', 2008, 2021, 'cadre', 'Lorem' ),
 (2, 'Sous-Directeur et Directeur', 'Hôtel Louvre-Saint-Honoré', '', 4, 'Paris 1er Arr.', 2003, 2007, 'cadre', 'Lorem' ),
 (3, 'Chef de réception', 'Hôtel Louvre-Saint-Honoré', '', 4, 'Paris 1er Arr.', 2000, 2003, 'employé', 'Lorem' ),
 (4, 'Réceptionniste', 'Grand Hôtel du Louvre', '', 5, 'Paris 1er Arr.', 2000, 2000, 'employé', 'Lorem' ),
 (5, 'Réceptionniste de nuit', 'Hôtel Garden-Elysées', '', 4, 'Paris 16ème Arr.', 1997, 1999, 'employé', 'Lorem' )

