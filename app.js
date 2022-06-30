const fs = require("fs");
// const { stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan judul buku : ", (judul) => {
  rl.question("Masukan nama penulis : ", (penulis) => {
    const buku = {
      judul,
      penulis,
    };
    const file = fs.readFileSync("data/buku.json", "utf8");
    const bukus = JSON.parse(file);
    bukus.push(buku);
    fs.writeFileSync("data/buku.json", JSON.stringify(bukus));
    console.log(`judul : ${judul} - penulis : ${penulis} telah ditambahkan!`);
    rl.close();
  });
});
