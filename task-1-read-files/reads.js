import fs from "fs";

function printFile(filename) {
    const readMe = fs.readFileSync(filename, "utf-8");
    console.log(readMe);
}


printFile("data1.txt");
printFile("data3.txt");