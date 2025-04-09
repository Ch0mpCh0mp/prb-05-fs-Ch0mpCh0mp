import {readFile} from "fs/promises";

async function printFile(filename) {
    try {
        const content = await readFile(filename, "utf-8");
        console.log(content);
    } catch (err) {
        console.error("Fehler beim Lesen von ${filename}:", err.message);
    }
}

printFile("data1.txt");
printFile("data3.txt");