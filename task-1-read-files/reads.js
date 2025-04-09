import {readFile} from "fs";

function printFile(filename) {
    readFile(filename, "utf-8", function (err, data) {
        if(err) {
            console.error(`Fehler beim Lesen von ${filename}:`, err.message);
        } else {
            console.log(data);
        }
    });
}

printFile("data1.txt");
printFile("data3.txt");