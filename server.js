const http = require("http");
const fs = require("fs");

// Lire le contenu du fichier index.html
const indexFile = fs.readFileSync("./index.html", "utf-8");

// Créer le serveur HTTP
http.createServer(function (request, response) {
  // Si la requête est pour la page d'accueil, renvoyer le contenu du fichier index.html
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(indexFile);
    response.end();
  }
}).listen(8000); // Écouter sur le port 8000

console.log("Serveur lancé sur http://localhost:8000");
