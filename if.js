
let nilaiUjian = 75;
let nilaiAbsen = 80;

if (nilaiAbsen + nilaiUjian > 140) {
    console.log('wawwww');
} else {
    console.log('hmmm');
}

let nilaiMapelKeseluruhan = 600;
const rataRata = (nilaiUjian + nilaiMapelKeseluruhan) / 8;

if (rataRata > 78.5) {
    console.log('kamu lulus');
    console.log(rataRata);
} else {
    console.log('coba lagi');
    console.log(rataRata);
}