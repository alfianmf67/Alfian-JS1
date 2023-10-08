// program if else

let Umur = 17
let verify = "silahkan buat ktp"

if (Umur == 18) {
    console.log(` {verify}`);
} else {
    console.log("silahkan tunggu 1 tahun lagi");
}

// program switch case

var jalurCepatKampus = 3; 

switch (jalurCepatKampus) {
  case 1:
    console.log("Lewat Mall cijantung 50 menit");
    break;
  case 2:
    console.log("Lewat Cijantung 70 menit");
    break;
  case 3:
    console.log("Lewat Margonda 45 menit");
    break;
  case 4:
    console.log("lewat jalan raya bogor 60 menit");
    break;
  default:
    console.log("jalur utama 80 menit");
}

// nested if

var nilaiSemester = 2.5;
var persentaseAbsen = 75;

if (persentaseAbsen >=75) {
  
  if (nilaiSemester >= 2.7) {
    
    console.log("anda lulus ujian");
  } else {
    console.log("silahkan menemui dosen untuk perbaikan nilai");
  }
} else {
  console.log("anda diwajib kan mengulang mata kuliah");
}

// for statemnet

var anime = ["Bleach", "One Piece", "One puch man", "Eleceed", "solo leveling"];
for (var i = 0; i < anime.length; i++) {
  console.log(" reqomendasi anime favorite saya " + anime[i]);
}

// while

var hobby = ["membaca", "menyanyi", "main game", "main bola", "belajar bahasa asing"]
var index = 0

while (index<hobby.length) {
    console.log("saya suka " + hobby[index]);
    index++;
}

// do while

var hari = 1;

do {
  console.log("Ini adalah hari ke-" + hari);
  hari++;
} while (hari <= 7);

// function

function perkalian(angka1, angka2) {
    return angka1 * angka2;
  }
  
  
  var hasilPerkalianDari = perkalian(123, 598);
  
  
  console.log("Hasil perkalian = " + hasilPerkalianDari);
  