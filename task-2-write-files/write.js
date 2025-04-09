import fs from "fs";

function updateFile(filename) {
    fs.readFile(filename, `utf-8`, (err, data) => {
        if(err) {
            console.error(`Fehler beim Lesen der Datei ${filename}:`, err.message);
            return;
        }
    

    const newData = data + "*";

    fs.writeFile(filename, newData, (err) => {
        if(err) {
            console.error(`Fehler beim Schreiben der Datei ${filename}:`, err.message);
            return;
        }
        console.log(`Datei erfolgreich aktualisiert: ${filename}`);
    });

});
}

updateFile(`review.txt`);
updateFile('review.txt');
updateFile('review.txt');
updateFile('review.txt');
updateFile('star.txt');