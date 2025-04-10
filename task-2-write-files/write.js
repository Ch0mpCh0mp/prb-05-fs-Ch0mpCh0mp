// import fs from "fs";

// function updateFile(filename) {
//     fs.readFile(filename, `utf-8`, (err, data) => {
//         if(err) {
//             console.error(`Fehler beim Lesen der Datei ${filename}:`, err.message);
//             return;
//         }
    

//     const newData = data + "*";

//     fs.writeFile(filename, newData, (err) => {
//         if(err) {
//             console.error(`Fehler beim Schreiben der Datei ${filename}:`, err.message);
//             return;
//         }
//         console.log(`Datei erfolgreich aktualisiert: ${filename}`);
//     });

// });
// }

import fs from "fs";

function updateFile(filename) {
  const readThis = fs.readFileSync(filename, "utf8"); // --> 'fs.readFileSync(filename, "utf8")' liest text aus "review.txt"
  // console.log(readThis); --> 'readThis' gibt text aus "review.txt" wieder
  const newContent = `${readThis} *`; // --> zu 'readThis' wird ein '*' angehängt
  // console.log(newContent); --> 'newContent' gibt NEUEN text aus "review.txt" wieder
  fs.writeFileSync(filename, newContent, "utf8");
  // Um bei jedem Abruf der FunKtion zu sehen, was danach drin steht, funktioniert:
  console.log(newContent);
}

updateFile("review.txt");

// Absturz: Weil "star.txt" nicht existiert:
// updateFile("star.txt");

updateFile(`review.txt`);
updateFile('review.txt');
updateFile('review.txt');
updateFile('review.txt');
updateFile('star.txt');