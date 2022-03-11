const fs = require("fs");

// @desc Créer une réponse de l'API
export function respond(res: any, status: number, message: string | Object) {
  return new Promise((resolve, reject) => {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message }));
  });
}

// @desc Permet d'écrire dans un fichier (en guise de bdd)
export async function writeDataFile(filename: string, content: Object) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err: any) => {
    if (err) console.log(err);
  });
}

// @desc Récupération de données passées dans le body de la requête
export function getPostData(req: any): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      req.on("data", (chunk: any) => {
        body += chunk.toString();
      });

      req.on("end", async () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function getMultiDataFirestore(array: Array<any>) {
  let arrayOutput: Array<any> = [];

  array.forEach((doc: any) => {
    arrayOutput.push({ id: doc.id, ...doc.data() });
  });

  return arrayOutput;
}
