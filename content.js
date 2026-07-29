// ============================================================
//  FICHIER DE CONFIGURATION — modifie uniquement ce fichier
// ============================================================

const CONFIG = {

  // --- TON IDENTITÉ ---
  nom: "Patrick Mazeirat",
  email: "pm.vfx@mailfence.com",
  metier: "Post-Producteur freelance",

  // --- TEXTE D'INTRO ---
  intro: {
    titre: "Post-production — Luxe & Cosmétique.",
    texte: "Chaque film a ses imprévus. Ce qu'on appelle expérience, c'est simplement avoir déjà été là — et savoir, sans hésiter, quel chemin prendre."
  },

  // --- FILMS (onglet Work) ---
  films: [
    { marque: "L'Oréal Paris x Mugler", titre: "LOAPxMugler",  vignette: "images/mugler.png",      type: "image" },
    { marque: "L'Oréal Paris",          titre: "Extensionist",  vignette: "images/extensionist.png",type: "image" },
    { marque: "L'Oréal Paris",          titre: "Hyaluron Tint", vignette: "images/tint.png",        type: "image" },
    { marque: "Coca-Cola",              titre: "100 ans",       vignette: "images/coca.png",        type: "image" },
    { marque: "Nissan",                 titre: "Juke",          vignette: "images/juke.png",        type: "image" },
    { marque: "Valentino",              titre: "Roma",          vignette: "images/valentino.png",   type: "image" }
  ],

  // --- SECTION IA — visuels et vidéos uniquement ---
  // type: "image" ou "video"
  // taille: "small" | "medium" | "large" | "wide"
  ia_media: [
    { type: "image", src: "images/ia-01.jpg", taille: "large"  },
    { type: "image", src: "images/ia-02.jpg", taille: "small"  },
    { type: "video", src: "images/ia-03.mp4", taille: "medium" },
    { type: "image", src: "images/ia-04.jpg", taille: "small"  },
    { type: "video", src: "images/ia-05.mp4", taille: "wide"   },
    { type: "image", src: "images/ia-06.jpg", taille: "medium" },
    { type: "image", src: "images/ia-07.jpg", taille: "small"  },
    { type: "video", src: "images/ia-08.mp4", taille: "large"  }
  ]

};
