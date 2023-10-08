//if,else,nested-if
let nilai = 60;

if (nilai >= 85) {
  //if
  console.log("Nilai Anda A");
} else if (nilai > 80) {
  //nested if
  console.log("Nilai Anda B +");
} else if (nilai >= 75) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C +");
} else if (nilai >= 65) {
  console.log("Nilai Anda C");
} else {
  //else
  console.log("Nilai Anda D");
}

//switch case
let buku = "Novel";

switch (buku) {
  case "Komik":
    console.log("Ini buku komik");
    break;
  case "Edukasi":
    console.log("Ini buku Edukasi");
    break;
  case "Resep Masak":
    console.log("Ini buku Resep Masak");
    break;
  default:
    console.log("Ini buku yang tidak ada di list");
}

//for statement
for (let i = 1; i <= 10; i++) {
  console.log("Pengepul sampah ke-" + i);
}

//while, do while
let x = 1;

do {
  console.log("Anak ke-: " + x);
  x++;
} while (x <= 10);

//function
function kali(a, b) {
  return a * b;
}

let hasil = kali(10, 10);
console.log("Hasil perkalian: " + hasil);