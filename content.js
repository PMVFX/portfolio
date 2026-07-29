// ============================================================
//  FICHIER DE CONFIGURATION — modifie uniquement ce fichier
// ============================================================

const CONFIG = {

  // --- TON IDENTITÉ ---
  nom: "Patrick Mazeirat",
  email: "pm (.) vfx @ mailfence.com",
  metier: "Post-Producteur freelance",

  // --- TEXTE D'INTRO ---
  intro: {
    texte: "Chaque film a ses imprévus. Ce qu'on appelle expérience, c'est simplement avoir déjà été là — et savoir, sans hésiter, quel chemin prendre."
  },

  // --- FILMS (onglet Work) ---
  films: [
    { marque: "Dior Beauty",    titre: "Fond de teint Forever",    meta: "2024 — TV 30s",       vignette: "images/film-01.jpg" },
    { marque: "Chanel",         titre: "N°5 — Film institutionnel", meta: "2024 — Digital",      vignette: "images/film-02.jpg" },
    { marque: "Lancôme",        titre: "Lancement Idôle",          meta: "2023 — 14 formats",   vignette: "images/film-03.jpg" },
    { marque: "YSL Beauté",     titre: "Rouge Pur Couture",        meta: "2023 — Broadcast",    vignette: "images/film-04.jpg" },
    { marque: "Hermès",         titre: "Terre d'Hermès",           meta: "2023 — Retail",       vignette: "images/film-05.jpg" },
    { marque: "L'Oréal Paris",  titre: "True Match",               meta: "2022 — International",vignette: "images/film-06.jpg" }
  ],

  // --- SECTION IA — visuels et vidéos uniquement ---
  // type: "image" ou "video"
  // Pour les vidéos : fichier local (mp4) ou URL Vimeo/YouTube
  // taille: "small" | "medium" | "large" | "wide"
  //   small  = carré ~1:1
  //   medium = paysage standard 16:9
  //   large  = grande case, occupe plus de place
  //   wide   = pleine largeur
  ia_media: [
    { type: "image", src: "images/ia-01.jpg",  taille: "large"  },
    { type: "image", src: "images/ia-02.jpg",  taille: "small"  },
    { type: "video", src: "images/ia-03.mp4",  taille: "medium" },
    { type: "image", src: "images/ia-04.jpg",  taille: "small"  },
    { type: "video", src: "images/ia-05.mp4",  taille: "wide"   },
    { type: "image", src: "images/ia-06.jpg",  taille: "medium" },
    { type: "image", src: "images/ia-07.jpg",  taille: "small"  },
    { type: "video", src: "images/ia-08.mp4",  taille: "large"  }
  ]

};
