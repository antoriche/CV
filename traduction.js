var dict = {
  dev: {
    fr: "- Développeur Frontend -",
    en: "- Frontend Developer -",
  },
  belgium: {
    fr: "Belgique",
    en: "Belgium",
  },
  download: {
    fr: "Imprimer",
    en: "Print",
  },
  skills: {
    fr: "Compétences",
    en: "Skills",
  },
  languages: {
    fr: "Langues",
    en: "Languages",
  },
  french: {
    fr: "Français",
    en: "French",
  },
  english: {
    fr: "Anglais",
    en: "English",
  },
  "mother-tongue": {
    fr: "Langue Maternelle",
    en: "Native speaker",
  },
  september: {
    fr: "septembre",
    en: "september",
  },
  april: {
    fr: "Avril",
    en: "April",
  },
  vocabulary: {
    fr: "Bonne maîtrise du vocabulaire informatique",
    en: "Fluency in computer vocabulary",
  },
  experience: {
    fr: "Parcours",
    en: "Career",
  },
  animator: {
    fr: "Animateur aux Jeunesses Scientifiques",
    en: "Animator at Jeunesses Scientifiques",
  },
  animator_content: {
    fr:
      "<li>Enseignement ludique des bases de la programmation à des jeunes de 12 à 18 ans</li>" +
      "<li><small>(Camps d'été, activités extra-scolaires ...)</small></li>",
    en:
      "<li>Playful teaching of the basics of programming to teenagers</li>" +
      "<li><small>(Summer camps, outside school activities ...)</small></li>",
  },
  ipl: {
    fr: "Institut Paul Lambin",
    en: "Paul Lambin Institute",
  },
  ipl_content: {
    fr:
      "<li>Formation à la programmation en Java, Javascript, PHP, SQL et C</li>" +
      "<li>Développement d'applications Client - Serveur</li>" +
      "<li>Développement de sites Web en PHP</li>" +
      "<li>Réalisation d'applications Android</li>",
    en:
      "<li>Learned to program in Java, Javascript, PHP, SQL and C</li>" +
      "<li>Development of client-server applications</li>" +
      "<li>Development of PHP websites</li>" +
      "<li>Realisation of Android applications</li>",
  },
  ipes_content: {
    fr: "Diplôme d'enseignement secondaire",
    en: "High school graduate",
  },
  soft_skills: {
    fr: "Caractère",
    en: "Soft skills",
  },
  autodidact: {
    fr: "Autodidacte",
    en: "Self-educated",
  },
  curious: {
    fr: "Curieux, aime découvrir de nouvelles technologies",
    en: "Curious, likes to discover new technologies",
  },
  persistent: {
    fr: "Persévérant",
    en: "Persistent",
  },
  reliable: {
    fr: "Fiable et capable de respecter les délais",
    en: "Reliable and able to meet tight deadlines",
  },
  challenge: {
    fr: "Aime les défis",
    en: "Loves new challenges",
  },
  brussels: {
    fr: "Bruxelles",
    en: "Brussels",
  },
  waver: {
    fr: "Wavre",
    en: "Waver",
  },
  month: {
    fr: "mois",
    en: "months",
  },
  emakina: {
    fr: "Stage chez Emakina",
    en: "Internship at Emakina",
  },
  emakina_content: {
    fr: "<li>Mémoire : \"Réalisation d'un outil permettant de tester le comportement d'une application via le protocole WebSocket\"</li><li>Développement d'une application ES6 utilisant Electron, React et Socket.IO</li></ul>",
    en: '<li>Thesis : "Develop a tool to test an application behavior via WebSocket"</li><li>Develop an ES6 application using Electron, React and Socket.IO</li></ul>',
  },
  new_zealand: {
    fr: "Perfectionnement en Anglais",
    en: "English development",
  },
  new_zealand_content: {
    fr: "<li>Etude de l'anglais durant 3 mois à l'étranger à l'école LSNZ</li><li>Atteint le niveau intermédiaire suppérieur (B2)</li>",
    en: "<li>Studied English abroad for 3 months at LSNZ</li><li>Reached Upper-intermediate level (B2)</li>",
  },
  diplomes: {
    fr: "Diplômes",
    en: "Education",
  },
  bachelier_informatique_gestion: {
    fr: "Bachelier en informatique de gestion",
    en: "Bachelor in computer sciences",
  },
  "aws-certification-description": {
    fr: "Capacité à écrire et à déployer des applications basées sur le cloud.",
    en: "Ability to write and deploy cloud-based applications.",
  },
  "jetpack-title": {
    fr: "Developpeur frontend chez Jetpack.AI",
    en: "Frontend developer at Jetpack.AI",
  },
  jetpackai_content: {
    fr: `
    <li>Responsable de developper des applications de visualisation des données</li>
		<li>Exploitation des données de nos clients pour faire ressortir leurs valeurs</li>
		<li>Création de graphique SVG sur mesures (d3.js)</li>
    `,
    en: `
    <li>In charge to develop data-driven applications</li>
    <li>Bringing value to our customers data</li>
    <li>Designing custom SVG charts (d3.js)</li>
    `,
  },
  "marketing-mockup":{
    fr: "Mockup marketing pour la sécurité des données",
    en: "Marketing mockup for data privacy",
  },
  "portfolio":{
    fr: "Voir mon Portfolio",
    en: "See my Portfolio",
  }
};

var valid_languages = ["fr", "en"];

$(function () {
  var lang = findGetParameter("lang");
  if (lang == null || lang == undefined || !valid_languages.includes(lang)) {
    setGetParameter("lang", "en");
    lang = "en";
  }
  $("#lang_field").val(lang);
  $("#lang_field").on("change", function () {
    setGetParameter("lang", $("#lang_field").val());
    loadLang($("#lang_field").val());
  });

  loadLang(lang);
});

function loadLang(lang) {
  $("[traduction]").each(function () {
    if ($(this).html() != dict[$(this).attr("traduction")]["fr"]) {
      console.warn(
        "default != french : \n" +
          $(this).html() +
          "\n<>\n" +
          dict[$(this).attr("traduction")]["fr"]
      );
    }
    var trad = dict[$(this).attr("traduction")][lang];
    if (trad == null || trad == undefined) return;
    $(this).html(trad);
  });
}

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}
function setGetParameter(paramName, paramValue) {
  var url = window.location.href;
  var hash = location.hash;
  url = url.replace(hash, "");
  if (url.indexOf(paramName + "=") >= 0) {
    var prefix = url.substring(0, url.indexOf(paramName));
    var suffix = url.substring(url.indexOf(paramName));
    suffix = suffix.substring(suffix.indexOf("=") + 1);
    suffix =
      suffix.indexOf("&") >= 0 ? suffix.substring(suffix.indexOf("&")) : "";
    url = prefix + paramName + "=" + paramValue + suffix;
  } else {
    if (url.indexOf("?") < 0) url += "?" + paramName + "=" + paramValue;
    else url += "&" + paramName + "=" + paramValue;
  }
  window.location.href = url + hash;
}
