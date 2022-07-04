// npm init
// npm i chalk, nodemon

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Judul : ", (judul) => {
  rl.question("Nama penulis : ", (penulis) => {
    rl.question("Tahun : ", (tahun) => {
      rl.question("Status : ", (status) => {
        const buku = { judul, penulis, tahun, status };
        const file = fs.readFileSync("data/libs.json", "utf8");
        const bukus = JSON.parse(file);

        bukus.push(buku);
        fs.writeFileSync("data/libs.json", JSON.stringify(bukus));
        console.log(`Info: ${judul} @ ${penulis} was added!`);
        rl.close();
      });
    });
  });
});
